import Offcanvas from "react-bootstrap/Offcanvas";
import Navbar from "react-bootstrap/Navbar";
import CartItems from "./CartItems";
import classes from "./Cart.module.css";
import { useNavigate } from "react-router-dom";
import Fade from "@mui/material/Fade";

const Cart = (props) => {
  const navigate = useNavigate();

  const moveToCheckOutPage = () => {
    navigate("/checkout");
    localStorage.setItem("isCheckOutBtnClicked", true);
  };

  let animateCondition = props.items.length > 0;

  let cartBody = (
    <div>
      <CartItems items={props.items} />
      <button onClick={moveToCheckOutPage} className={classes.button}>
        Checkout
      </button>
    </div>
  );

  if (!animateCondition) {
    cartBody = <h5>No Items In Cart!</h5>;
    animateCondition = !animateCondition;
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
      <Offcanvas.Body>
        <Fade timeout={700} in={animateCondition}>
          {cartBody}
        </Fade>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  );
};

export default Cart;
