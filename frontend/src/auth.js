import { redirect } from "react-router-dom";

export const getToken = () => {
    const token = localStorage.getItem("token");
    if (!token || token === undefined) return null;
    return token;
}

export const removeToken = () => {
    localStorage.removeItem("token");
}

export const setToken = (token) => {
    localStorage.setItem("token", token);
}


export const checkAutLoader = () => {
    const token = getToken();
    if (token !== null) return redirect("/");
    return null;
}