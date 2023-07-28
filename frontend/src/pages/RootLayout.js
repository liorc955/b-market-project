import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";
import Modal from "../components/UI/Modal";
import PageLoading from "../components/UI/PageLoading";
import useLoading from "../hooks/useLoading";
import Card from "../components/UI/Card";
import SessionExpired from "../components/UI/SessionExpired";

const RootLayout = () => {
  const [isLoading, isSessionExpired] = useLoading();
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

export default RootLayout;
