import * as s from "./HeroStyles";
import HeroImg from "/public/img/Marcas/FondoHero.jpeg";
import logoBat from "/public/img/Marcas/Batman2.png";
// import logoWW from "/public/img/Marcas/WW.png";
import logoSuper from "/public/img/Marcas/Superman2.png";
// import logoFlash from "/public/img/Marcas/Flash.png";
import logoCapAm from "/public/img/Marcas/CapAm.png";
import logoSpiderman from "/public/img/Marcas/Spiderman.png";

export const Hero = () => {
  return (
    <s.HeroContainer>
      <s.HeroContainerImg>
        <h1>Tu universo de cómics en un solo lugar</h1>
        <img src={HeroImg} alt="FondoHero" />
      </s.HeroContainerImg>

      <s.HeroMarcaStyled>
        <s.HeroCardMarcaStyled>
          <img src={logoBat} alt="" />
        </s.HeroCardMarcaStyled>

        <s.HeroCardMarcaStyled>
          <img src={logoCapAm} alt="" />
        </s.HeroCardMarcaStyled>

        <s.HeroCardMarcaStyled>
          <img src={logoSuper} alt="" />
        </s.HeroCardMarcaStyled>

        <s.HeroCardMarcaStyled>
          <img src={logoSpiderman} alt="" />
        </s.HeroCardMarcaStyled>
      </s.HeroMarcaStyled>
    </s.HeroContainer>
  );
};
