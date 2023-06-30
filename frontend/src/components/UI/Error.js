import { useNavigate } from "react-router-dom";
import classes from './Error.module.css';
import errorLogo from "../../img/error.png";

const Error = () => {
  const navigate = useNavigate();

  const reloadPage = () => {
    navigate(0);
  };

  return (
    <div className={classes["error-container"]}>
      <img src={errorLogo} alt="Error page logo" />
      <h5>Something went wrong!</h5>
      <button onClick={reloadPage}>Try Again</button>
    </div>
  );
};

export default Error;