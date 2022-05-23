import DrawerContent from './DrawerContent';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import {
    createTheme,
    ThemeProvider,
} from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const drawerWidth = 300;

interface Props {
    children: any;
}

const darkTheme = createTheme({
    palette: {
        mode: `dark`,
        primary: {
            main: `rgb(102, 157, 246)`,
        },
        background: {
            paper: `rgb(5, 30, 52)`,
        },
    },
});

export default function Layout (props: Props) {
    const { children } = props;
    const [ mobileOpen, setMobileOpen ] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = <DrawerContent />;

    return (
        <Box sx={{
            display: `flex`,
        }}
        >
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: {
                        sm: `calc(100% - ${drawerWidth}px)`,
                    },
                    ml: {
                        sm: `${drawerWidth}px`,
                    },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        sx={{
                            mr: 2,
                            display: {
                                sm: `none`,
                            },
                        }}
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        noWrap
                        variant="h6"
                        component="div"
                    >
                        Responsive drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{
                    width: {
                        sm: drawerWidth,
                    },
                    flexShrink: {
                        sm: 0,
                    },
                }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <ThemeProvider theme={darkTheme}>
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: {
                                xs: `block`,
                                sm: `none`,
                            },
                            // eslint-disable-next-line @typescript-eslint/naming-convention
                            '& .MuiDrawer-paper': {
                                boxSizing: `border-box`,
                                width: drawerWidth,
                            },
                        }}
                        onClose={handleDrawerToggle}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        open
                        variant="permanent"
                        sx={{
                            display: {
                                xs: `none`,
                                sm: `block`,
                            },
                            // eslint-disable-next-line @typescript-eslint/naming-convention
                            '& .MuiDrawer-paper': {
                                boxSizing: `border-box`,
                                width: drawerWidth,
                            },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </ThemeProvider>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: {
                        sm: `calc(100% - ${drawerWidth}px)`,
                    },
                }}
            >
                <Toolbar />
                <main>{children}</main>
            </Box>
        </Box>
    );
}
