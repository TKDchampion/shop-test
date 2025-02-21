import { ApiConfig, FetchConfig, Method, RenderType } from "./model";

const errorHandle = (status: number, msg: string) => {
  console.log(`api error: ${status} | ${msg}`);
  if (status === 401) {
    // window.location.href = "/login"
  }
  return false;
};

export default async function fetchInstance<T>(
  apiconfig: ApiConfig,
  method: Method,
  renderType?: RenderType
): Promise<T> {
  const token = "";

  const baseURL =
    apiconfig.baseConfig?.baseURL || process.env["NEXT_PUBLIC_API_URL"];

  const fetchConfig: FetchConfig = {
    method,
    headers: apiconfig.baseConfig?.headers || {
      Authorization: `Bearer ${token}`,
    },
  };

  if (apiconfig.body) {
    if (apiconfig.body instanceof FormData) {
      fetchConfig["body"] = apiconfig.body;
    } else {
      fetchConfig["body"] = JSON.stringify(apiconfig.body);
      fetchConfig["headers"] = {
        ...fetchConfig["headers"],
        "Content-Type": "application/json",
      };
    }
  }

  if (renderType) {
    switch (renderType) {
      case "ISR":
        fetchConfig["next"] = { revalidate: 5 };
        break;
      case "SSG":
        fetchConfig["cache"] = "force-cache";
        break;
      case "SSR":
        fetchConfig["cache"] = "no-store";
        break;
    }
  }

  const controller = new AbortController();
  const { signal } = controller;
  const timeout = 1000 * 30; // 30 seconds

  const timeoutPromise = new Promise<Response>((_, reject) => {
    setTimeout(() => {
      reject(new Error("Request timed out"));
      controller.abort();
    }, timeout);
  });

  try {
    const response = await Promise.race([
      fetch(`${baseURL}/${apiconfig.url}`, { ...fetchConfig, signal }),
      timeoutPromise,
    ]);

    if (!(response instanceof Response)) {
      throw new Error("Unexpected response type");
    }

    const respText = await response.text();

    if (!response.ok) {
      errorHandle(response.status, respText);
      throw new Error(respText);
    }

    return respText ? (JSON.parse(respText) as T) : ({} as T);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("API Error:", error.message);
      throw error;
    }
    throw new Error("An unknown error occurred");
  }
}
