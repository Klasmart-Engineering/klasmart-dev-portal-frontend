import {
    blue,
    teal,
} from "@mui/material/colors";
import {
    createTheme,
    PaletteOptions,
    responsiveFontSizes,
} from "@mui/material/styles";

export function useTheme () {

    const palette: PaletteOptions = {
        mode: `light`,
        primary: {
            main: blue[500],
        },
        secondary: {
            main: teal[500],
        },
    };

    const theme = createTheme({
        palette,
        typography: {
            button: {
                textTransform: `none`,
            },
        },
    });

    return responsiveFontSizes(theme);
}
