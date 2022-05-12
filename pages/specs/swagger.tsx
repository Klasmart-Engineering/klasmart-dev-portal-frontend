import 'swagger-ui-react/swagger-ui.css';
import Layout from 'components/Layout';
import dynamic from 'next/dynamic';
import { ReactElement } from 'react';

const SwaggerUI = dynamic(import(`swagger-ui-react`), {
    ssr: false,
});

export default function ApiSwagger () {

    return (
        <SwaggerUI url="https://swagger-ui.kidsloop.net/config/api.swagger.json" />
    );
}

ApiSwagger.getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>;
};
