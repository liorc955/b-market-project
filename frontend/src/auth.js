import { redirect } from "react-router-dom";
import { SERVER_URL_API, SERVER_URL_AUTH } from "./envConfig";

export const getTokenExpiration = () => {
  const isTokenExpired = localStorage.getItem("expiration");
  if (!isTokenExpired || isTokenExpired === undefined) return null;
  const expirationTime = getTokenDuration();
  if (expirationTime < 0) return "EXPIRED";
  return true;
};

export const removeTokenExpiration = () => {
  localStorage.removeItem("expiration");
};

export const getTokenDuration = () => {
  const expirationDate = new Date(localStorage.getItem("expiration"));
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
};

export const setExpirationTime = (expirationTime) => {
  localStorage.setItem("expiration", expirationTime);
};

export const checkAutLoader = () => {
  const tokenExpiration = getTokenExpiration();
  if (tokenExpiration !== null) return redirect("/");
  return null;
};

export const userLoader = async () => {
  const tokenExpiration = getTokenExpiration();
  if (tokenExpiration) {
    const response = await fetch(`${SERVER_URL_API}/users/user`, {
      method: "GET",
      credentials: "include",
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.errorMsg);
    return data;
  }
  return null;
};

export const logOut = async () => {
  try {
    const response = await fetch(`${SERVER_URL_AUTH}/logout`, {
      method: "GET",
      credentials: "include",
    })
    if (!response.ok) throw new Error();
  } catch (expection) {
    console.log(expection);
  }
}
