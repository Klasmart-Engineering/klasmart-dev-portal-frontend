import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

export default function Landing () {

    const router = useRouter();

    const handleClick = () => {
        router.push(`/subscriptions`, undefined, {
            shallow: true,
        });
    };

    return (
        <>
            <Head>
                <title>App Landing</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link
                    rel="icon"
                    href="/favicon.ico"
                />
            </Head>
            <Box
                component="header"
                padding={2}
                position="absolute"
                width="100%"
            >
                <p>Imagine this page as the sign in page - this page might not even exist</p>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                >
                     Click to sign in
                </Button>
            </Box>
        </>
    );
}

Landing.getLayout = (page: ReactElement) => {
    return <>{page}</>;
};
