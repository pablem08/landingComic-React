import * as s from "./NavbarStyles";
import logo from "/img/comicuniverse.png"
export const Navbar = () => {
  return (
    <s.NavHeaderStled>
      <img src={logo} alt="logo" />
      <s.NavbarContainer>
        {/* <label for="menu-toggle" class="menu-label">
        <img src="img/menu.png" alt="menu" class="menu-icon" />
        </label> */}
        {/* <input type="checkbox" id="menu-toggle" /> */}
        <s.NavbarItemsSteled>
            <a href="#about">Nosotros</a>
            <a href="#cards">Noticias</a>
        </s.NavbarItemsSteled>
      </s.NavbarContainer>
    </s.NavHeaderStled>
  );
};
