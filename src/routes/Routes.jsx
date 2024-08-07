import {
  BrowserRouter,
  Routes as ReactDomRoutes,
  Route,
} from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Home } from "../Pages/Home/Home";
import { About } from "../Pages/About/About";
import { Products } from "../Pages/Products/Products";
import { Contact } from "../Pages/Contact/Contact";
function Routes() {
  return (
    <BrowserRouter>
      <Layout>
        <ReactDomRoutes>
          {/* Ruta por defecto */}
          <Route path="/" element={<Home />} />

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
