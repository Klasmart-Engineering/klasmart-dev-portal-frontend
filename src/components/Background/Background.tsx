import {
    BottomBackground,
    Children,
    TopBackground,
    Wrapper,
} from "./styles";

type Props = {
    children: JSX.Element;
};

export default function Background (props: Props) {
    const { children } = props;
    return (
        <>
            <TopBackground />
            <Wrapper>
                <BottomBackground />
                <Children>{children}</Children>
            </Wrapper>
        </>
    );
}
