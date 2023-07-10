import { useState, useEffect } from "react";
import { useNavigation } from "react-router-dom";


const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "loading" && !isLoading) {
      setIsLoading(true);
    }

    if (navigation.state === "idle" && isLoading) {
      setIsLoading(false);
    }
  }, [navigation.state, isLoading]);

  return isLoading;
};

export default useLoading;
