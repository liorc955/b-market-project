import successAnimation from './../../img/success.gif';
import Card from '../UI/Card';
import classes from './OrderSubmitted.module.css';

const OrderSubmitted = () => {
  return (
    <Card>
      <div className={classes.container}>
        <span>
          Your order has been submitted successfully!
        </span>
        <br />
        <img
          src={successAnimation}
          alt="success animation"
        />
      </div>
    </Card>
  );
};

export default OrderSubmitted;
