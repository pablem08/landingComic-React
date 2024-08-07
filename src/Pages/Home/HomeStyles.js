import styled from "styled-components";

export const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

export const HomeContainerImg = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  img {
    width: 100%;
    padding-bottom: 75px;

    @media (max-width: 768px) {
      margin-top: 20px;
      margin-bottom: 90px;
    }
  }

  h1 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    font-size: 60px;
    max-width: 950px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 160px;
    color: #ffe527;
    text-shadow: 3px 3px 1px #f79d14;
    /* border: 1px solid red; */
    @media (max-width: 768px) {
      margin-top: 120px;
      font-size: 20px;
    }
  }
`;
