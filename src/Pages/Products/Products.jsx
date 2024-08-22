import * as st from "./ProductsStyles.js";
import { productListData } from "../../data/Products.js";
import { Button } from "../../components/UI/Button/Button.jsx";

export const Products = () => {
  return (
    <st.ProductsContainerStyled>
      <h2>Nuestros Productos</h2>
      <st.ProductCardContainerStyled>
        {productListData?.map((product) => (
          <st.ProductCardStyled key={product.id}>
            <img src={product.src} alt={product.name} />
            <st.ProductCardInfoStyled>
              <h3>{product.name}</h3>

              <st.ButtonContainerStyled>
                <Button>Ver más</Button>
              </st.ButtonContainerStyled>
            </st.ProductCardInfoStyled>
          </st.ProductCardStyled>
        ))}
      </st.ProductCardContainerStyled>
    </st.ProductsContainerStyled>
  );
};
