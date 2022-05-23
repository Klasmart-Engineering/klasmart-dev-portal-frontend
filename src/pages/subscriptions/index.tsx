import { ReactElement } from 'react';
import Layout from 'src/components/Layout';

export default function SubscriptionsPage () {
    return (
        <p>I have so much great content</p>
    );
}

SubscriptionsPage.getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>;
};
