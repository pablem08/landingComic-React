import {
  BrowserRouter,
  Routes as ReactDomRoutes,
  Route,
} from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Home } from "../pages/Home/Home.jsx";
import { About } from "../pages/About/About";
import { Products } from "../pages/Products/Products";
import { Contact } from "../pages/Contact/Contact";
function Routes() {
  return (
    <BrowserRouter>
      <Layout>
        <ReactDomRoutes>
          {/* Ruta por defecto */}
          <Route path="/" element={<Home/>} />

          {/* Ruta al About */}
          <Route path="/About" element={<About />} />

          {/* Ruta que va Productos */}
          <Route path="/Products" element={<Products />} />

          {/* Ruta que va Contacto */}
          <Route path="/Contact" element={<Contact />} />
        </ReactDomRoutes>
      </Layout>
    </BrowserRouter>
  );
}

export default Routes;
