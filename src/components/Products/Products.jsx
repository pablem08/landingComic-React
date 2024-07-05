import * as st from "./ProductsStyles.js";
import comicBatman from "/img/Marcas/comicBatman.jpeg";
import comicSpidy from "/img/Marcas/comicSpidy.jpeg";
import comicSuperman from "/img/Marcas/comicSuperman.jpeg";
import { Button } from "../UI/Button/Button.jsx";

export const Products = () => {
  return (
    <st.ProductsContainerStyled>
      <st.ProductCardContainerStyled>
        <st.ProductCardStyled>
          <img src={comicBatman} alt="" />
          <st.ProductCardInfoStyled>
            <h3>Batman n°9</h3>

            <st.ButtonContainerStyled>
              <Button radius={10}>Ver más</Button>
            </st.ButtonContainerStyled>
          </st.ProductCardInfoStyled>
        </st.ProductCardStyled>

        <st.ProductCardStyled>
          <img src={comicSpidy} alt="" />
          <st.ProductCardInfoStyled>
            <h3>Spiderman n°15</h3>

            <st.ButtonContainerStyled>
              <Button radius={10}>Ver más</Button>
            </st.ButtonContainerStyled>
          </st.ProductCardInfoStyled>
        </st.ProductCardStyled>

        <st.ProductCardStyled>
          <img src={comicSuperman} alt="" />
          <st.ProductCardInfoStyled>
            <h3>Superman n°1</h3>

            <st.ButtonContainerStyled>
              <Button radius={10}>Ver más</Button>
            </st.ButtonContainerStyled>
          </st.ProductCardInfoStyled>
        </st.ProductCardStyled>
      </st.ProductCardContainerStyled>
    </st.ProductsContainerStyled>
  );
};
