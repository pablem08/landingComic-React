import * as s from "./HeroStyles";
import HeroImg from "/public/img/Marcas/FondoHero.jpeg";

export const Hero = () => {
  return (
    <s.HeroContainer>
      <s.HeroContainerImg>
        <h1>Tu universo de cómics en un solo lugar</h1>
        <img src={HeroImg} alt="FondoHero" />
      </s.HeroContainerImg>
    </s.HeroContainer>
  );
};
