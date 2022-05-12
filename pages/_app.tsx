import '../styles/github-markdown.css';
import '../styles/globals.css';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type {
    ReactElement,
    ReactNode,
} from 'react';

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function MyApp ({ Component, pageProps }: AppPropsWithLayout) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page) => page);

    return getLayout(<Component {...pageProps} />);
}
