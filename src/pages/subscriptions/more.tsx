import { ReactElement } from 'react';
import Layout from 'src/components/Layout';

export default function MorePage () {
    return (
        <p>I have so much more content</p>
    );
}

MorePage.getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>;
};
