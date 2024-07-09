import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero.jsx";
import { Marcas } from "./components/Marcas/Marcas.jsx";
import { Products } from "./components/Products/Products.jsx";
import { About } from "./components/About/About.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Marcas />
      <Products />
      <Footer />
    </>
  );
}

export default App;
