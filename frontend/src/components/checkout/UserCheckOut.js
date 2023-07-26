import Button from "../UI/Button";
import classes from "./UserCheckOut.module.css";
import SignpostIcon from '@mui/icons-material/Signpost';

const UserCheckOut = (props) => {
  const user = props.user;

  const userAddress = {
    street: user.street,
    city: user.city,
    state: user.state,
    zipCode: user.zipCode
  }

  const handleOnClick = () => {
    props.postNewOrder({
      address: userAddress,
      id: user._id
    });
  };

  return (
    <>
      <h2>
        Hey {user.firstName} {user.lastName}👋
      </h2>
      <h5><SignpostIcon />Your address information is: </h5>
      <p className={classes.address}>
        <span>Street: {userAddress.street}</span>
        <span>City: {userAddress.city}</span>
        <span>State: {userAddress.state}</span>
        <span>ZipCode: {userAddress.zipCode}</span>
      </p>
      <h6>Should we countinue with the order?</h6>
      <div className="d-flex justify-content-between">
        <Button onClick={handleOnClick}>Submit Order</Button>
        <Button>Edit Address</Button>
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
