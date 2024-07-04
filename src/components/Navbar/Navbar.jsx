import * as s from "./NavbarStyles";
export const Navbar = () => {
  return (
    <s.NavHeaderStled>
      <img src="#" alt="logo" />
      <s.NavbarStled>
        {/* <label for="menu-toggle" class="menu-label"> */}
        {/* <img src="img/menu.png" alt="menu" class="menu-icon" /> */}
        {/* </label> */}
        {/* <input type="checkbox" id="menu-toggle" /> */}
        <ul>
          <li>
            <a href="login.html">Login</a>
          </li>
          <li>
            <a href="registro.html">Registro</a>
          </li>
          <li>
            <a href="#about">Nosotros</a>
          </li>
          <li>
            <a href="#cards">Noticias</a>
          </li>
          <li>
            <a href="#contacto">Contactanos</a>
          </li>
        </ul>
      </s.NavbarStled>
    </s.NavHeaderStled>
  );
};
