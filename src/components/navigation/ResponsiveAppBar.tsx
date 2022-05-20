import NavItemMenu from './NavItemMenu';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import LogoDark from 'public/kidsloop-dark.svg';
import LogoLight from 'public/kidsloop-light.svg';
import { useState } from 'react';

const pages = [
    `Products`,
    `Developers`,
    `Pricing`,
];

interface Props {
    mode: `light` | `dark`;
}

export default function ResponsiveAppBar (props: Props) {
    const { mode } = props;
    const [ anchorNavMenu, setAnchorNavMenu ] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorNavMenu(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorNavMenu(null);
    };

    return (
        <AppBar
            position="absolute"
            color="transparent"
            elevation={0}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    { mode === `light` ?
                        <LogoLight
                            style={{
                                width: 120,
                                height: 25,
                            }}
                        />
                        :
                        <LogoDark
                            style={{
                                width: 120,
                                height: 25,
                            }}
                        />}
                    <Image
                        src="/kidsloop.svg"
                        width={120}
                        height={25}
                    />

                    <Box sx={{
                        flexGrow: 1,
                        justifyContent: `end`,
                        display: {
                            xs: `flex`,
                            md: `none`,
                        },
                    }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            sx={{
                                color: mode === `light` ? `white` : `black`,
                            }}
                            onClick={handleOpenNavMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            keepMounted
                            id="menu-appbar"
                            anchorEl={anchorNavMenu}
                            anchorOrigin={{
                                vertical: `bottom`,
                                horizontal: `left`,
                            }}
                            transformOrigin={{
                                vertical: `top`,
                                horizontal: `left`,
                            }}
                            open={Boolean(anchorNavMenu)}
                            sx={{
                                display: {
                                    xs: `block`,
                                    md: `none`,
                                },
                            }}
                            onClose={handleCloseNavMenu}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{
                        flexGrow: 1,
                        justifyContent: `center`,
                        display: {
                            xs: `none`,
                            md: `flex`,

                        },
                    }}
                    >
                        <List style={{
                            display: `flex`,
                            flexDirection: `row`,
                            padding: 0,
                        }}
                        >
                            { pages.map((page: string) => (
                                page === `Products` || page === `Developers` ?
                                    <ListItem key={page}>
                                        <NavItemMenu
                                            type={page}
                                            mode={mode}
                                        />
                                    </ListItem>
                                    :
                                    <ListItem key={page}>
                                        <Button
                                            sx={{
                                                my: 2,
                                                color: mode === `light` ? `white` : `black`,
                                                display: `block`,
                                            }}
                                            onClick={handleCloseNavMenu}
                                        >
                                            {page}
                                        </Button>
                                    </ListItem>
                            ))}
                        </List>

                    </Box>
                    <Button
                        variant="outlined"
                        sx={{
                            color: mode === `light` ? `white` : `black`,
                            borderColor: mode === `light` ? `white` : `black`,
                            display: {
                                xs: `none`,
                                md: `flex`,
                            },
                        }}
                    >
                        Sign in
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

ResponsiveAppBar.defaultProps = {
    mode: `light`,
};
