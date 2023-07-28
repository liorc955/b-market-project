import { useState, useEffect } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import { getToken, removeToken } from "../auth";

const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSessionExpired, setIsSessionExpired] = useState(false);
  const navigation = useNavigation();
  const navigate = useNavigate();
  const token = getToken();

  useEffect(() => {

    if (token === "EXPIRED") {
      removeToken();
      navigate("/login");
      setIsSessionExpired(true);
    }

    if (navigation.state === "loading" && !isLoading) {
      setIsLoading(true);
    }

    if (navigation.state === "idle" && isLoading) {
      setIsLoading(false);
    }

    if (navigation.state === "loading" && isSessionExpired) {
      setIsSessionExpired(false);
    }

  }, [navigation.state, isLoading, isSessionExpired, token, navigate]);

  return [isLoading, isSessionExpired];
};

export default useLoading;
