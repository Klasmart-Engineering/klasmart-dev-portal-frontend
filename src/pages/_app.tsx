import '../styles/globals.css';
import { ThemeProvider } from '@mui/material/styles';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { NextIntlProvider } from 'next-intl';
import type {
    ReactElement,
    ReactNode,
} from 'react';
import ResponsiveAppBar from 'src/components/navigation/ResponsiveAppBar';
import { useTheme } from 'src/utils/theme';

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

    return getLayout((
        <NextIntlProvider messages={pageProps.messages}>
            <ThemeProvider theme={useTheme()}>
                <ResponsiveAppBar mode="dark" />
                <Component {...pageProps} />
            </ThemeProvider>
        </NextIntlProvider>
    ));
}
