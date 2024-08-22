import styled from "styled-components";

export const ProductsContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  gap: 30px;
  h2 {
    font-size: 3rem;
    color: #ffe527;
    text-shadow: 3px 3px 1px #f79d14;
    margin-top: 8rem;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
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
  max-width: 350px;
  box-shadow: 0 0 10px #0f58b8, 0 0 40px #0f58b8;
  overflow: hidden;
  transition: transform 0.5s ease-in-out; /* Aplica la transición en el estado normal */
  

  &:hover {
    -webkit-transform: scale(1.6);
    transform: scale(1.1);
    /* La transición ya está definida en el estado normal */
  }

  img {
    width: 350px;
    height: 420px;
  }

  @media (max-width: 768px) {
    pointer-events: none;
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
  

  @media (max-width: 768px) {
    pointer-events: none;
  }
`;
