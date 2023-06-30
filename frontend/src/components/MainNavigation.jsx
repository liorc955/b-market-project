import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import CartButton from "./cart/CartButton";
import { useCallback, useEffect, useState } from "react";
import classes from './MainNavigation.module.css';
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    if (scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className={`position-fixed top-0 start-0 end-0 ${classes.header} ${
        isScrolled ? "shadow" : ""
      }`}
    >
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand}>
          <Container fluid>
            <NavLink to='/' className={classes.brand}>B-Market</NavLink>
            <CartButton expand={expand} />
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default MainNavigation;
