import { NavLink } from "react-router-dom";
import * as s from "./NavbarStyles";
import logo from "/img/comicuniverse_3.png";
export const Navbar = () => {
  return (
    <s.NavHeaderStled>
      <img src={logo} alt="logo" />
      <s.NavbarContainer>
        <s.NavbarItemsSteled>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Products">Products</NavLink>
        </s.NavbarItemsSteled>
      </s.NavbarContainer>
    </s.NavHeaderStled>
  );
};
