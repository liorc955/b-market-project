import classes from './Address.module.css';

const Address = (props) => {
  const { address } = props;
  return (
    <p className={`${classes.address}${props.className ? " " + props.className : ""}`}>
      <span>Street: {address.street}</span>
      <span>City: {address.city}</span>
      <span>State: {address.state}</span>
      <span>ZipCode: {address.zipCode}</span>
    </p>
  );
};

export default Address;
