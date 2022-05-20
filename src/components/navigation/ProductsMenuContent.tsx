import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';

interface Props {
    onClose: () => void;
}

export default function ProductsMenuContent (props: Props) {
    const { onClose } = props;

    const data = [
        {
            icon: <RemoveRedEyeOutlinedIcon />,
            label: `Overview`,
        },
        {
            icon: <AssignmentTurnedInOutlinedIcon />,
            label: `Features`,
        },
        {
            icon: <ArticleOutlinedIcon />,
            label: `Docs`,
        },
        {
            icon: <ManageAccountsOutlinedIcon />,
            label: `Manage`,
        },
    ];

    return (
        <Box sx={{
            display: `flex`,
        }}
        >
            <Paper
                sx={{
                    maxWidth: 256,
                }}
            >
                <List
                    disablePadding
                    component="nav"
                >
                    <Box
                        sx={{
                            pb: 2,
                        }}
                    >
                        <ListItemButton alignItems="flex-start">
                            <ListItemText
                                primary="STM"
                                primaryTypographyProps={{
                                    fontSize: 15,
                                    fontWeight: `medium`,
                                    lineHeight: `20px`,
                                    mb: `2px`,
                                }}
                                secondary="Student Teacher Module is a great product, with it you can do great things"
                                secondaryTypographyProps={{
                                    fontSize: 12,
                                }}
                            />
                        </ListItemButton>
                        { data.map((item) => (
                            <ListItemButton
                                key={item.label}
                                sx={{
                                    py: 0,
                                    minHeight: 32,
                                }}
                                onClick={onClose}
                            >
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.label}
                                    primaryTypographyProps={{
                                        fontSize: 14,
                                        fontWeight: `medium`,
                                    }}
                                />
                            </ListItemButton>
                        ))}
                    </Box>
                </List>
            </Paper>
        </Box>
    );
}
