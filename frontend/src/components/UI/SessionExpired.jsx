import { useNavigate } from "react-router-dom";
import oopsLogo from "../../img/oopslogo.png";
import Button from "./Button";

const SessionExpired = () => {
  const navigate = useNavigate();

  const handleClickEvent = () => {
    navigate("/login");
  };

  return (
    <div className="text-center">
      <img style={{ width: "250px" }} alt="oops logo" src={oopsLogo} />
      <h5>Your Session Has Expired</h5>
      <h6>Please login again</h6>
      <Button onClick={handleClickEvent}>Sure</Button>
    </div>
  );
};

export default SessionExpired;
