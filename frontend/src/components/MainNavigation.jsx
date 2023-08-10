import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import CartButton from "./cart/CartButton";
import { useCallback, useEffect, useState } from "react";
import classes from "./MainNavigation.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { getTokenExpiration, logOut, removeTokenExpiration } from "../auth";
import Offcanvas from "react-bootstrap/Offcanvas";
import Person2Icon from "@mui/icons-material/Person2";

const MainNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const tokenExpiration = getTokenExpiration();
  const navigate = useNavigate();

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    if (scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);

  const expand = false;

  const handleLogOutClick = async () => {
    removeTokenExpiration();
    await logOut();
    navigate("/");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className={`position-fixed top-0 start-0 end-0 ${classes.header}${
        isScrolled ? " shadow" : ""
      }`}
    >
      <Navbar key={expand} bg="light" expand={expand}>
        <Container fluid className={classes.links}>
          <Offcanvas.Header>
            <NavLink to="/" className={classes.brand}>
              B-Market
            </NavLink>
          </Offcanvas.Header>
          <Offcanvas.Body />
          <div className="px-3 mb-1">
            {!tokenExpiration ? (
              <NavLink to="/login">
                <LoginIcon />
                <span>Login</span>
              </NavLink>
            ) : (
              <>
                <NavLink to="/personal-area">
                  <Person2Icon />
                  <span>Personal Area</span>
                </NavLink>
                <NavLink onClick={handleLogOutClick}>
                  <LogoutIcon />
                  <span>Logout</span>
                </NavLink>
              </>
            )}
          </div>
          <CartButton expand={expand} />
        </Container>
      </Navbar>
    </div>
  );
};

export default MainNavigation;
