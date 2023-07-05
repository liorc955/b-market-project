import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CheckOut from "../components/checkout/CheckOut";
import Head from "../components/Head";

const CheckOutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("isCheckOutBtnClicked")) {
      navigate("..");
    }
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
