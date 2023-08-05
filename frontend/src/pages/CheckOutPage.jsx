import { useEffect } from "react";
import { json, redirect, useNavigate } from "react-router-dom";
import CheckOut from "../components/checkout/CheckOut";
import Head from "../components/Head";
import { userLoader } from "../auth";
import useLoading from "./../hooks/useLoading";
import PageLoading from "../components/UI/PageLoading";
import Modal from "../components/UI/Modal";
import SessionExpired from "./../components/UI/SessionExpired";
import Card from "../components/UI/Card";

const CheckOutPage = () => {
  const navigate = useNavigate();
  const [isLoading, isSessionExpired] = useLoading();

  useEffect(() => {
    return () => {
      localStorage.removeItem("isCheckOutBtnClicked");
    };
  }, [navigate]);

  return (
    <>
      <Head title="CheckOut" description="CheckOut page" />
      <CheckOut />
      {isLoading && (
        <Modal>
          <PageLoading />
        </Modal>
      )}
      {isSessionExpired && (
        <Modal>
          <Card>
            <SessionExpired />
          </Card>
        </Modal>
      )}
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
    throw json({ message: exception.message }, { status: 500 });
  }
};
