type Props = {
    children: JSX.Element;
};

export default function Background (props: Props) {
    const { children } = props;
    const style = {
        topBackground: {
            position: `fixed` as `fixed`,
            background: `url(background_top.png) no-repeat;`,
            backgroundSize: `100% auto`,
            width: `100vw`,
            height: `100vh`,
            zIndex: -2,
        },
        bottomBackground: {
            position: `absolute` as `absolute`,
            top: 800,
            background: `url(background_bottom.png) no-repeat;`,
            backgroundSize: `100% auto`,
            width: `100vw`,
            height: `100%`,
            zIndex: -1,
        },
        wrapper: {
            overflow: `hidden`,
            position: `relative` as `relative`,
        },
        children: {
            zIndex: 1,
        },
    };
    return (
        <>
            <div style={style.topBackground} />
            <div style={style.wrapper}>
                <div style={style.bottomBackground} />
                <div style={style.children}>{children}</div>
            </div>
        </>
    );
}
