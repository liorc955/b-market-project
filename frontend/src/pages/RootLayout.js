import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Modal from "../components/UI/Modal";
import PageLoading from "../components/UI/PageLoading";

const RootLayout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "loading") {
      setIsLoading(true);
    }

    return ()=> setIsLoading(false);
  }, [navigation.state]);

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
      {isLoading && <Modal><PageLoading /></Modal>}
    </>
  );
};

export default RootLayout;
