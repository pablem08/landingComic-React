import styled from "styled-components";

export const ProductsContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  gap: 30px;
`;

export const ProductCardContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-bottom: 40px;
`;

export const ProductCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  /* border: 1px solid red; */
  max-width: 350px;

  img {
    width: 350px;
    height: 420px;
    /* border-top-right-radius: 20px;
    border-top-left-radius: 20px; */
  }
`;

export const ProductCardInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 20px;
  background: linear-gradient(to top, #0f58b8, #000000);
  /* border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px; */
  width: 350px;
  height: 100px;

  h3 {
    font-size: 20px;
    text-align: center;
  }
  p {
    display: flex;
    justify-content: center;
    font-size: 20px;
  }
`;

export const ButtonContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;
