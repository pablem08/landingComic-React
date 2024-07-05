import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero.jsx";
import { Marcas } from "./components/Marcas/Marcas.jsx";
import { Products } from "./components/Products/Products.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marcas />
      <Products />
    </>
  );
}

export default App;
