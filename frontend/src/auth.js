import { redirect } from "react-router-dom";

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
