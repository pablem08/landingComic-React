import * as s from "./HomeStyles";
import HomeImg from "/public/img/Marcas/FondoHero.jpeg";

export const Home = () => {
  return (
    <s.HomeContainer>
      <s.HomeContainerImg>
        <h1>Tu universo de cómics en un solo lugar</h1>
        <img src={HomeImg} alt="FondoHero" />
      </s.HomeContainerImg>
    </s.HomeContainer>
  );
};
