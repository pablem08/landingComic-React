import styled from "styled-components";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

const LayoutContainerStyled = styled.div`
  min-height: 100vh;
  height: auto;
  width: 100%;
  margin: 0 auto;

  & p {
    text-align: center;
  }
`;

const ContentContainerStyled = styled.div`
  /* height: calc(100vh - 120px); */
  height: 100%;
`;

// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => {
  return (
    <LayoutContainerStyled>
      <Navbar />
      <ContentContainerStyled>{children}</ContentContainerStyled>
      <Footer />
    </LayoutContainerStyled>
  );
};
