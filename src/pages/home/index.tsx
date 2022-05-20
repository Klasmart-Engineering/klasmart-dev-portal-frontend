import example from "../../assets/example.png";
import partners from "../../assets/partners.png";
import Background from "../../components/Background";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function Home () {
    const style = {
        container: {
            marginTop: `50px`,
            marginLeft: `auto`,
            marginRight: `auto`,
            width: `80%`,
            justifyContent: `space-between`,
        },
        heroContainer: {
            alignSelf: `center`,
            alignItems: `center`,
            display: `flex`,
            // flexWrap: `wrap` as `wrap`,
            justifyContent: `center`,
        },
        heroText: {
            width: `50%`,
            flexGrow: 1,
        },
        heroImages: {
            width: `50%`,
            flexGrow: 1,
        },
        partnerImages: {
            marginTop: `50px`,
        },
        sideKick: {
            alignSelf: `center`,
            alignItems: `center`,
            display: `flex`,
            marginTop: `50px`,
            marginLeft: `60px`,
            marginRight: `auto`,
            width: `40%`,
            height: `500px`,
            flexDirection: `column` as `column`,
        },
    };
    return (
        <Background>
            <Box
                sx={{
                    display: `grid`,
                    gridTemplateRows: `repeat(5, 1fr)`,
                }}
                style={style.container}
            >
                <Box
                    sx={{
                        display: `grid`,
                        gridTemplateColumns: `repeat(2, 1fr)`,
                    }}
                    style={style.heroContainer}
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
                </Box>
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
            </Box>
        </Background>
    );
}
