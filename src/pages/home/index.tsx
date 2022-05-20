import example from "../../assets/example.png";
import partners from "../../assets/partners.png";
import Background from "../../components/Background";
import {
    Container,
    HeroContainer,
} from "./styles";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function Home () {
    return (
        <Background>
            <Container
                sx={{
                    display: `grid`,
                    gridTemplateRows: `repeat(5, 1fr)`,
                }}
            >
                <HeroContainer
                    sx={{
                        display: `grid`,
                        gridTemplateColumns: `repeat(2, 1fr)`,
                    }}
                >
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
                <div>
                    <Typography variant={`h3`}>
                    A fully integrated suite of education products
                    </Typography>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                </div>
                <div>
                    <Typography variant={`h3`}>
                    A fully integrated suite of education products
                    </Typography>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                </div>
                <div>
                    <Typography variant={`h3`}>
                    A fully integrated suite of education products
                    </Typography>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                </div>
            </Container>
        </Background>
    );
}
