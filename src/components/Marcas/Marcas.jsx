import * as s from "./MarcasStyles";
import Batman from "/public/img/Marcas/Batman2.png";
import CapAm from "/public/img/Marcas/CapAm.png";
import Superman from "/public/img/Marcas/Superman2.png";
import Spiderman from "/public/img/Marcas/Spiderman.png";

export const Marcas = () => {
  return (
    <s.HeroMarcaStyled>
      <s.HeroCardMarcaStyled>
        <img src={Batman} alt="Batman" />
      </s.HeroCardMarcaStyled>

      <s.HeroCardMarcaStyled>
        <img src={CapAm} alt="" />
      </s.HeroCardMarcaStyled>

      <s.HeroCardMarcaStyled>
        <img src={Superman} alt="" />
      </s.HeroCardMarcaStyled>

      <s.HeroCardMarcaStyled>
        <img src={Spiderman} alt="" />
      </s.HeroCardMarcaStyled>
    </s.HeroMarcaStyled>
  );
};
