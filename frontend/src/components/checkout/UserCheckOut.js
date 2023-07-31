import { Link } from "react-router-dom";
import Button from "../UI/Button";
import classes from "./UserCheckOut.module.css";

const UserCheckOut = (props) => {
  const user = props.user;

  const { address } = user;

  const handleOnClick = () => {
    props.postNewOrder({
      address,
      id: user._id,
    });
  };

  return (
    <>
      <h2>Hey {user.firstName}</h2>
      <h5>Your address information: </h5>
      <p className={classes.address}>
        <span>Street: {address.street}</span>
        <span>City: {address.city}</span>
        <span>State: {address.state}</span>
        <span>ZipCode: {address.zipCode}</span>
      </p>
      <h6>Should we countinue with the order?</h6>
      <div className="d-flex justify-content-between">
        <Button onClick={handleOnClick}>Submit Order</Button>
        <Link to={"/personal-area/address"}><Button>Edit Address</Button></Link>
      </div>
      {props.isErrorOnPost && (
        <p className="text-danger text-center mt-2" role="alert">
          Please Try Again
        </p>
      )}
    </>
  );
};

export default UserCheckOut;
