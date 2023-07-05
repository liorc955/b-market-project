import Navbar from "react-bootstrap/Navbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Cart from "./Cart";
import classes from "./CartButton.module.css";
import { useEffect, useState } from "react";
import useCartState from "../../hooks/useCartState";

const CartButton = (props) => {
  const [classAnimate, setClassAnimate] = useState(
    `${classes["cart-counter"]}`
  );
  const items = useCartState();
  const expand = props.exapnd;
  const itemsInCart = items.reduce((total, product) => total + product.quantity, 0);

  useEffect(() => {
    setClassAnimate(
      (prevState) => prevState + ` ${classes.animated} ${classes.bounce}`
    );
    const timer = setTimeout(() => {
      setClassAnimate(`${classes["cart-counter"]}`);
    }, 800);
    return () => {
      clearTimeout(timer);
    };
  }, [itemsInCart]);

  return (
    <>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}>
        <ShoppingCartIcon />
        <span className={classAnimate}>{itemsInCart}</span>
      </Navbar.Toggle>
      <Cart items={items} />
    </>
  );
};

export default CartButton;
