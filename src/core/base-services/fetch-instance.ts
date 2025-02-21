import { ApiConfig, FetchConfig, Method, RenderType } from "./model";

const errorHandle = (status: number, msg: string) => {
  console.log(`api error: ${status} | ${msg}`);
  switch (status) {
    case 401:
      // window.location.href = "/login"
      break;
    default:
      break;
  }
  return false;
};

export default async function fetchInstance(
  apiconfig: ApiConfig,
  method: Method,
  renderType?: RenderType
): Promise<any> {
  const token = "";

  const baseURL = apiconfig.baseConfig?.baseURL
    ? apiconfig.baseConfig.baseURL
    : process.env["NEXT_PUBLIC_API_URL"];

  const fetchConfig: FetchConfig = {
    method: method,
    headers: apiconfig.baseConfig?.headers
      ? apiconfig.baseConfig.headers
      : {
          Authorization: `Bearer ${token}`,
        },
  };

  if (apiconfig.body) {
    const isFormData = apiconfig.body instanceof FormData;
    if (isFormData) {
      fetchConfig["body"] = apiconfig.body as FormData;
    } else {
      fetchConfig["body"] = JSON.stringify(apiconfig.body);
      fetchConfig["headers"] = {
        ...fetchConfig["headers"],
        "Content-Type": "application/json",
      };
    }
  }

  if (renderType) {
    // app router setting
    // SSG, cache: "force-cache",
    // SSR, cache: "no-store",
    // ISR, { revalidate: seconds }
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
  // Create an AbortController instance
  const controller = new AbortController();
  const { signal } = controller;
  const timeout = 1000 * 30; // 30 seconds
  // Create a timeout promise that rejects after 30 seconds
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject({ status: 408, message: "Request timed out" });
    }, timeout);
  });

  try {
    const response = await Promise.race([
      fetch(`${baseURL}/${apiconfig.url}`, { ...fetchConfig, signal }),
      timeoutPromise,
    ]);

    if (!(response instanceof Response)) {
      throw { status: 500, message: "Unexpected response type" };
    }

    const respText = await response.text();
    if (!response.ok) {
      // Try to extract error details from the response
      errorHandle(response.status, respText);
      throw { status: response.status, message: JSON.parse(respText) };
    }

    if (respText) {
      const result = JSON.parse(respText);
      return result;
    } else {
      return {
        status: response.status,
        message: "Request was successful but no data returned",
      };
    }
  } catch (error: any) {
    if (error?.status === 408) {
      controller.abort();
    }
    throw error;
  }
}
