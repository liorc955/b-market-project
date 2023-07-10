import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";
import Modal from "../components/UI/Modal";
import PageLoading from "../components/UI/PageLoading";
import useLoading from "../hooks/useLoading";

const RootLayout = () => {
  const isLoading = useLoading();
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
      {isLoading && (
        <Modal>
          <PageLoading />
        </Modal>
      )}
    </>
  );
};

export default RootLayout;
