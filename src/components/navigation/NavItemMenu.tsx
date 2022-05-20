import DevelopersMenuContent from './DevelopersMenuContent';
import ProductsMenuContent from './ProductsMenuContent';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import {
    MouseEvent,
    useState,
} from 'react';

interface Props {
    type: string;
    mode: `light` | `dark`;
}

export default function NavItemMenu (props: Props) {
    const { type, mode } = props;

    const [ anchorEl, setAnchorEl ] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button
                id="basic-button"
                sx={{
                    color: mode === `light` ? `white` : `black`,
                }}
                aria-controls={open ? `basic-menu` : undefined}
                aria-haspopup="true"
                aria-expanded={open ? `true` : undefined}
                onClick={handleClick}
            >
                {type}
            </Button>
            <Menu
                elevation={0}
                id="basic-menu"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: `bottom`,
                    horizontal: `center`,
                }}
                transformOrigin={{
                    vertical: `top`,
                    horizontal: `center`,
                }}
                open={open}
                MenuListProps={{
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    'aria-labelledby': `basic-button`,
                }}
                onClose={handleClose}
            >
                { type === `Products` &&
                <ProductsMenuContent onClose={handleClose} />
                }
                { type === `Developers` &&
                <DevelopersMenuContent onClose={handleClose} />
                }
            </Menu>
        </>
    );
}

NavItemMenu.defaultProps = {
    mode: `light`,
};
