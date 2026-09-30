const BASE_URL = (import.meta.env.VITE_API_BASE_URL as string) || 'http://127.0.0.1:8000';

interface ApiResponse {
  success: boolean;
  error?: string;
  field?: string;
  [key: string]: unknown;
}

async function request<T extends ApiResponse>(path: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...init,
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', ...(init.headers ?? {}) },
  });
  const data = (await res.json()) as T;
  if (!data.success) throw new Error(data.error ?? 'Request failed');
  return data;
}

export const api = {
  post: <T extends ApiResponse>(path: string, body: unknown) =>
    request<T>(path, { method: 'POST', body: JSON.stringify(body) }),

  get: <T extends ApiResponse>(path: string) => request<T>(path),
};
