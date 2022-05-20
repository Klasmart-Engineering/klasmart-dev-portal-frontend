import Box from "@mui/material/Box";
import styled from "styled-components";

export const Container = styled(Box)`
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
`;

export const HeroContainer = styled(Box)`
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
