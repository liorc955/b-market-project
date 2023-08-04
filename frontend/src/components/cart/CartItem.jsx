import classes from "./CartItem.module.css";
import ProductImg from "../product/ProductImg";

const CartItem = (props) => {
  let counterBody = (
    <div className={classes.counter}>
      <button disabled={props.disableEditing} onClick={props.onAddItem}>
        +
      </button>
      <span>{props.quantity}</span>
      <button disabled={props.disableEditing} onClick={props.onRemoveItem}>
        -
      </button>
    </div>
  );
  if (props.disableEditing) {
    counterBody = <span> Amount: {props.quantity}</span>;
  }

  return (
    <li className={classes.item}>
      <ProductImg alt={props.title} src={props.image} />
      <div>
        <h5>{props.title}</h5>
        {props.disableEditing && <span>{props.description}</span>}
        <span>Price: {props.price}$</span>
        {counterBody}
      </div>
    </li>
  );
};

export default CartItem;
