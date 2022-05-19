type Props = {
    children: JSX.Element;
};

export default function Background (props: Props) {
    const { children } = props;
    const style = {
        topBackground: {
            position: `fixed` as `fixed`,
            background: `url(background.png) no-repeat;`,
            backgroundSize: `100% auto`,
            width: `100vw`,
            height: `100vh`,
        },
        bottomBackground: {
            position: `absolute` as `absolute`,
            top: 800,
            background: `url(background_3.png) no-repeat;`,
            backgroundSize: `100% auto`,
            width: `100vw`,
            height: `100%`,
        },
        wrapper: {
            overflow: `hidden`,
            position: `relative` as `relative`,
        },
    };
    return (
        <>
            <div style={style.topBackground} />
            <div style={style.wrapper}>
                {children}
                <div style={style.bottomBackground} />
            </div>
        </>
    );
}
