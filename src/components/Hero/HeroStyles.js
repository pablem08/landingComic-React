import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    margin-top: 100px;
  }
`;

export const HeroContainerImg = styled.div`
  width: 100%;
  img {
    width: 100%;
    padding-bottom: 75px;
  }
`;

export const HeroMarcaStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const HeroCardMarcaStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 200px;

  img {
    width: 100%;
  }
`;
