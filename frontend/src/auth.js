import { redirect } from "react-router-dom";

const getToken = () => {
    const token = localStorage.getItem("token");
    if (!token || token === undefined) return null;
    return token;
}

export const removeToken = () => {
    localStorage.removeItem("token");
    return redirect("/");
}

export const setToken = (token) => {
    localStorage.setItem("token", token);
}


export const tokenLoader = () => getToken();

export const checkAutLoader = () => {
    const token = getToken();
    if (token !== null) return redirect("/");
    return null;
}