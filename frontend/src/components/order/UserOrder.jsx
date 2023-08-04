import Accordion from "react-bootstrap/Accordion";
import Address from "./../user/Address";
import CartItems from "../cart/CartItems";
import classes from "./UserOrder.module.css";

const UserOrder = (props) => {
  const containerClass = "border rounded mb-4";
  return (
    <Accordion.Item eventKey={props.id}>
      <Accordion.Header>Order Number : {props.id}</Accordion.Header>
      <Accordion.Body className={classes["order-container"]}>
        <label>Products:</label>
        <div className={containerClass}>
          <div className="p-3">
            <CartItems
              totalAmount={props.totalAmount}
              items={props.products}
              disableEditing
            />
          </div>
        </div>
        <label>Shipped to:</label>
        <div className={containerClass}>
          <Address className="p-2 m-1" address={props.address} />
        </div>
        <label>Order Time Submitted: {props.timeStamp}</label>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default UserOrder;
