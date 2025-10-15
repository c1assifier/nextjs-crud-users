export const API_CONFIG = {
  baseUrl:
    process.env.NEXT_PUBLIC_API_URL && process.env.NEXT_PUBLIC_API_URL.length > 0
      ? process.env.NEXT_PUBLIC_API_URL
      : typeof window === 'undefined'
        ? 'http://localhost:5050'
        : '/api',
};
