import Offcanvas from "react-bootstrap/Offcanvas";
import Navbar from "react-bootstrap/Navbar";
import CartItems from "./CartItems";
import classes from "./Cart.module.css";
import { useNavigate } from "react-router-dom";
import Error from "../UI/Error";

const Cart = (props) => {
  const navigate = useNavigate();

  let cartBody = <h5>No Items In Cart!</h5>;

  const moveToCheckOutPage = () => {
    navigate("/checkout");
    localStorage.setItem('isCheckOutBtnClicked', true);
  };

  if (props.isThereError) {
    cartBody = (
      <Error />
    );
  }

  if (props.items.length > 0 && !props.isThereError) {
    cartBody = (
      <>
        <CartItems items={props.items} />
        <button onClick={moveToCheckOutPage} className={classes.button}>
          Checkout
        </button>
      </>
    );
  }

  const expand = props.expand;
  return (
    <Navbar.Offcanvas
      id={`offcanvasNavbar-expand-${expand}`}
      aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
          Cart Items
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>{cartBody}</Offcanvas.Body>
    </Navbar.Offcanvas>
  );
};

export default Cart;
