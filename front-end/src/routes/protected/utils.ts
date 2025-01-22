import Cookies from "js-cookie";
import { AuthData } from "./types";

const validateAuthData = (data: unknown): data is AuthData => {
  if (!data || typeof data !== "object") return false;
  return typeof (data as { role?: string }).role === "string";
};

const AUTH_COOKIE_KEY = "authData";

export const getAuthData = () => {
  try {
    const cookie = Cookies.get(AUTH_COOKIE_KEY);
    if (!cookie) return null;
    const cookieParsed = JSON.parse(cookie);
    return validateAuthData(cookieParsed) ? cookieParsed : null;
  } catch {
    Cookies.remove(AUTH_COOKIE_KEY);
    return null;
  }
};
