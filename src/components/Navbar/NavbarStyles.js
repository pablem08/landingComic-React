import styled from "styled-components";

export const NavHeaderStled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 90px;
  background: linear-gradient(to top, #0f58b8, #000000);

  img {
    margin-left: 40px;
    width: 100px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  list-style: none;

  a {
    color: #fff;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    text-decoration: none;
    list-style: none;
    overflow: hidden;
    transition: 0.2s;
  }
  a:hover {
    background: #fff;
    box-shadow: 0 0 10px #fff, 0 0 40px #fff, 0 0 80px #fff;
    transition-delay: 0.2s;
    border-radius: 10px;
    color: #000000;
  }
`;

export const NavbarItemsSteled = styled.div`
  font-size: 1.2rem;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;
