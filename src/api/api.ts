// src/api/api.ts
import axios, { AxiosRequestConfig, Method } from "axios";

export const api = axios.create({
  baseURL: "http://194.87.236.27/",
  timeout: 30000,
  // ВАЖНО: не задаём здесь Content-Type глобально
});

export const apiRequest = async <T = any>(
  method: Method,
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const isForm = (typeof FormData !== "undefined") && data instanceof FormData;

    const defaultHeaders = isForm ? {} : { "Content-Type": "application/json" };

    const response = await api.request<T>({
      method,
      url,
      data,
      ...config,
      headers: {
        ...defaultHeaders,
        ...(config?.headers || {}),
      },
    });

    return response.data;
  } catch (error: any) {
    throw error;
  }
};
