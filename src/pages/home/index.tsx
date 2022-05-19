import example from "../../assets/example.png";
import partners from "../../assets/partners.png";
import Background from "../../components/Background";
import Image from "next/image";

export default function Home () {
    const style = {
        container: {
            display: `flex`,
            marginTop: `50px`,
            marginLeft: `auto`,
            marginRight: `auto`,
            width: `80%`,
            flexDirection: `column` as `column`,
            justifyContent: `space-between`,
        },
        heroContainer: {
            alignSelf: `center`,
            alignItems: `center`,
            display: `flex`,
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
        heroHeader: {
            fontSize: `4em`,
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
            <div style={style.container}>
                <div style={style.heroContainer}>
                    <div style={style.heroText}>
                        <h1 style={style.heroHeader}>Education infrastructure for the internet</h1>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
                    </div>
                    <Image
                        style={style.heroImages}
                        src={example}
                        width={1600}
                        height={1000}
                    />
                </div>
                <div style={style.partnerImages}>
                    <Image
                        src={partners}
                        width={802}
                        height={90}
                    />
                </div>
                <div style={style.sideKick}>
                    <h1>
                    A fully integrated suite of education products
                    </h1>
                    <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </div>
                <div style={style.sideKick}>
                    <h1>
                    A fully integrated suite of education products
                    </h1>
                    <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </div>
                <div style={style.sideKick}>
                    <h1>
                    A fully integrated suite of education products
                    </h1>
                    <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </div>
            </div>
        </Background>
    );
}
