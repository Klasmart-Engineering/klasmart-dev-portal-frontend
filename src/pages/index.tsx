import example from "../assets/example.png";
import partners from "../assets/partners.png";
import Background from "../components/Background";
import {
    Container,
    HeroContainer,
} from "./styles";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { ReactElement } from "react";

export default function Landing () {
    return (
        <Background>
            <Container>
                <HeroContainer>
                    <div>
                        <Typography variant={`h2`}>Education infrastructure for the internet</Typography>
                        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Typography>
                    </div>
                    <Image
                        src={example}
                        width={1600}
                        height={1000}
                    />
                </HeroContainer>
                <div>
                    <Image
                        src={partners}
                        width={802}
                        height={90}
                    />
                </div>
            </Container>
        </Background>
    );
}

Landing.getLayout = (page: ReactElement) => {
    return <>{page}</>;
};
