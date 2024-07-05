import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;

    h2{
        font-size: 2rem;
        color: #fff;
        margin-top: 2rem;
    }
`;

export const AboutContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 80%;
    /* max-width: 1200px; */
    margin: 0 auto;
    padding: 2rem;
    gap: 30px;
    /* background-color: #1c1c26; */
   

    p{
        max-width: 600px;
    }
`;

export const AboutImg = styled.img`
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
`;