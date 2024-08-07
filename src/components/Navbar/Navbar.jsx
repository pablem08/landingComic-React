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
          <NavLink to="/About">Nosotros</NavLink>
          <NavLink to="/Products">Productos</NavLink>
          <NavLink to="/Contact">Contacto</NavLink>
        </s.NavbarItemsSteled>
      </s.NavbarContainer>
    </s.NavHeaderStled>
  );
};
