
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CheckOut from "../components/checkout/CheckOut";

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

  return <CheckOut />;
};

export default CheckOutPage;
