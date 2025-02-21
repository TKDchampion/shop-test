export interface ApiConfig {
  baseConfig?: BaseConfig;
  body?: Record<string, unknown> | FormData;
  url: string;
  renderType?: RenderType;
  disabledErrorAlert?: boolean;
}

type RequestHeaders = Record<string, string>;

interface BaseConfig {
  headers?: RequestHeaders;
  baseURL?: string;
}

export type Method = "GET" | "POST" | "PUT" | "DELETE";

export interface FetchConfig {
  method: Method;
  headers: RequestHeaders;
  body?: string | FormData;
  cache?: RequestCache;
  next?: object;
}

export type RenderType = "SSR" | "SSG" | "ISR";
