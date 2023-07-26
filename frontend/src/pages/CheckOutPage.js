import { useEffect } from "react";
import { json, redirect, useNavigate } from "react-router-dom";
import CheckOut from "../components/checkout/CheckOut";
import Head from "../components/Head";
import { getToken } from "../auth";
import { SERVER_URL_API } from "../envConfig";

const CheckOutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      localStorage.removeItem("isCheckOutBtnClicked");
    };
  }, [navigate]);

  return (
    <>
      <Head title="CheckOut" description="CheckOut page" />
      <CheckOut />
    </>
  );
};

export default CheckOutPage;

export const checkOutPageLoader = async () => {
  if (!localStorage.getItem("isCheckOutBtnClicked")) return redirect("/");
  const token = getToken();
  if (token) {
    try {
      const response = await fetch(`${SERVER_URL_API}/users`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.errorMsg)
      return data;
    } catch (exception) {
      console.log(exception.message);
      throw json({message: exception.message}, {status: 500});
    }
  }
  return null;
};
