import styled from "styled-components";
export const ContactCajaStyler = styled.div`
  display: flex;
  margin-top: 0px;
`;
export const ContactContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 9rem auto;
  padding: 30px 50px 50px 50px;
  background-color: #ffffff13;
  filter: drop-shadow(1px 1px 1px #6b6b6b);
  color: white;
  border-radius: 10px;

  h2 {
    font-size: 2rem;
    color: #ffe527;
    text-shadow: 3px 3px 1px #f79d14;
    text-align: center;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 5rem;
  }
`;

export const ContactFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 450px;
  margin: auto;

  input[type="text"],
  input[type="password"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 8px;
    margin: 10px 0px 15px 0;
    box-sizing: border-box;
    border-radius: 8px;
    background-color: #ffffff1c;
    color: #fff;
    border: none;
  }

  @media (max-width: 768px) {
    width: 350px;
  }
`;

export const ContactButtonStyled = styled.button`
  width: 100%;
  background-color: #3b768d;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 30px;
  /* margin-bottom: 30px; */
  border-radius: 8px;
`;
