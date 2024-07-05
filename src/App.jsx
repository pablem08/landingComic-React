import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero.jsx";
import { Marcas } from "./components/Marcas/Marcas.jsx";
import { Products } from "./components/Products/Products.jsx";
import { About } from "./components/About/About.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Marcas />
      <Products />
    </>
  );
}

export default App;
