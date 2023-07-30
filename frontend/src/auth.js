import { redirect } from "react-router-dom";
import { SERVER_URL_API } from "./envConfig";

export const getToken = () => {
  const token = localStorage.getItem("token");
  if (!token || token === undefined) return null;
  const expirationTime = getTokenDuration();
  if (expirationTime < 0) return "EXPIRED";
  return token;
};

export const removeToken = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expiration");
};

export const getTokenDuration = () => {
  const expirationDate = new Date(localStorage.getItem("expiration"));
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
};

export const setToken = (token) => {
  localStorage.setItem("token", token);
};

export const setExpirationTime = (expirationTime) => {
  localStorage.setItem("expiration", expirationTime);
};

export const checkAutLoader = () => {
  const token = getToken();
  if (token !== null) return redirect("/");
  return null;
};

export const userLoader = async () => {
  const token = getToken();
  if (token) {
    const response = await fetch(`${SERVER_URL_API}/users`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.errorMsg);
    return data;
  }
  return null;
};
