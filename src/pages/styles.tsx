import { styled } from "@mui/material/styles";

export const Container = styled(`div`)`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
`;

export const HeroContainer = styled(`div`)`
    align-self: center;
    align-items: center;
    display: flex;
    padding: 30px;
    justify-content: center;
    margin-bottom: 150px;
    @media (max-width: 768px) {
        flex-wrap: wrap;
      }
`;
