import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import classes from "./ErrorPage.module.css";
import errorImg from "../img/error.png";
import Head from "../Head";

const ErrorPage = () => {
  const error = useRouteError();
  let title = "An Error Occured";
  let message = "Something Went Wrong!";
  const status = error.status;
  console.log(error);

  if (status === 500) {
    message = error.data.message;
  }
  if (status === 404) {
    title = "404 Error - Page Not Found";
    message = "We're sorry, but the page you are looking for does not exist.";
  }

  return (
    <>
      <Head title={title} description={message} />
      <MainNavigation />
      <div className={classes.container}>
        <h1>{title}</h1>
        <img alt="error page logo" src={errorImg} />
        <p>{message}</p>
      </div>
    </>
  );
};

export default ErrorPage;
