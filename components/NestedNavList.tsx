import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
    ReactNode,
    useState,
} from "react";
import { RouteParams } from 'utils/nav-routes';

export interface Props {
    categoryText: string;
    categoryIcon?: ReactNode;
    routeIcon?: ReactNode;
    routeParams: RouteParams[];
}

export default function NestedNavList (props: Props) {
    const { locale } = useRouter();
    const {
        categoryText,
        categoryIcon,
        routeIcon,
        routeParams,
    } = props;

    const [ open, setOpen ] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List component="nav">
            <ListItemButton onClick={handleClick}>
                {categoryIcon &&
                    <ListItemIcon>
                        {categoryIcon}
                    </ListItemIcon>
                }
                <ListItemText primary={categoryText} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse
                unmountOnExit
                in={open}
                timeout="auto"
            >
                <List color="primary">
                    {routeParams.filter(({ locale: routeLocale }) => routeLocale === locale)
                        .map((route) => (
                            <Link
                                key={route.id}
                                passHref
                                href={route.path}
                                locale={route.locale}
                            >
                                <ListItem
                                    button
                                    component="a"
                                >
                                    {routeIcon &&
                                <ListItemIcon>
                                    {routeIcon}
                                </ListItemIcon>
                                    }
                                    <ListItemText primary={route.displayName} />
                                </ListItem>
                            </Link>
                        ))}
                </List>
            </Collapse>
        </List>
    );
}
