import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  /* h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    margin-top: 100px;
  } */
`;

export const HeroContainerImg = styled.div`
  width: 100%;
  img {
    width: 100%;
    padding-bottom: 75px;
  }

  h1 {
    position: absolute;
    justify-content: center;
    text-align: center;
    font-size: 72px;
    width: 900px;
    margin-top: 230px;
    margin-left: 500px;
    color: #ffe527;
    /* background: linear-gradient(to bottom, #000000, #0f58b8);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text; */
    text-shadow: 3px 3px 1px #f79d14;
    /* border: 1px solid red; */
  }
`;
