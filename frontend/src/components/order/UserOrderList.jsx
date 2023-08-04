import Accordion from "react-bootstrap/Accordion";
import UserOrder from "./UserOrder";

const UserOrderList = (props) => {
  return (
    <Accordion>
      {props.orders.map((order) => (
        <UserOrder
          key={order._id}
          id={order._id}
          timeStamp={order.timeStamp}
          address={order.userAddress}
          products={order.products}
          totalAmount={order.totalAmount}
        />
      ))}
    </Accordion>
  );
};

export default UserOrderList;
