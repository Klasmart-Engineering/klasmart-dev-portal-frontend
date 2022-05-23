import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';

interface Props {
    onClose: () => void;
}

export default function DevelopersMenuContent (props: Props) {
    const { onClose } = props;

    return (
        <Box sx={{
            display: `flex`,
        }}
        >
            <Paper
                elevation={0}
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
                        <ListItem alignItems="flex-start">
                            <ListItemIcon>
                                <ArticleOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Documentation"
                                primaryTypographyProps={{
                                    fontSize: 15,
                                    fontWeight: `medium`,
                                    lineHeight: `20px`,
                                    mb: `2px`,
                                }}
                                secondary="Start integrating Kidsloop products and tools"
                                secondaryTypographyProps={{
                                    fontSize: 12,
                                }}
                            />
                        </ListItem>
                        <Grid container>
                            <Grid
                                item
                                xs={6}
                            >
                                <Box
                                    display={`flex`}
                                    justifyContent={`center`}
                                >
                                qweqwe
                                </Box>

                            </Grid>
                            <Grid
                                item
                                xs={6}
                            >
                                <Box>
                                qweqwe
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </List>
            </Paper>
        </Box>
    );
}
