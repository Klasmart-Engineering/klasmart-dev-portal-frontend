import { ReactElement } from 'react';
import ResponsiveAppBar from 'src/components/navigation/ResponsiveAppBar';

export default function Landing () {
    return (
        <>
            <ResponsiveAppBar mode="dark" />
        </>
    );
}

Landing.getLayout = (page: ReactElement) => {
    return <>{page}</>;
};
