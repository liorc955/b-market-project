import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import CartButton from "./cart/CartButton";
import { useCallback, useEffect, useState } from "react";
import classes from "./MainNavigation.module.css";
import { NavLink, useLoaderData } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { removeToken } from "../auth";
import Offcanvas from "react-bootstrap/Offcanvas";

const MainNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isTokenExists = useLoaderData();

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    if (scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);

  const expand = false;

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
      <Navbar key={expand} bg="light" expand={expand}>
        <Container fluid>
          <Offcanvas.Header>
            <NavLink to="/" className={classes.brand + " " + classes.link}>
              B-Market
            </NavLink>
          </Offcanvas.Header>
          <Offcanvas.Body />
          <div className="px-3">
            {!isTokenExists ? (
              <NavLink className={classes.link} to="/login">
                <LoginIcon /> Login
              </NavLink>
            ) : (
              <NavLink onClick={removeToken} className={classes.link}>
                <LogoutIcon /> Logout
              </NavLink>
            )}
          </div>
          <CartButton expand={expand} />
        </Container>
      </Navbar>
    </div>
  );
};

export default MainNavigation;
