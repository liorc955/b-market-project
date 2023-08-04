import { useEffect } from "react";
import { json, redirect, useNavigate } from "react-router-dom";
import CheckOut from "../components/checkout/CheckOut";
import Head from "../components/Head";
import { userLoader } from "../auth";

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
  try {
    const data = await userLoader();
    return data;
  } catch (exception) {
    throw json({message: exception.message}, {status: 500});
  }
};
