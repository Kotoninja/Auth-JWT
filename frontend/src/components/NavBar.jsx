import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function NavBar() {
    return (
        <AppBar position="static" sx={{ mb: 2 }}>
            <Container>

                <Toolbar>
                    <Stack direction={'row'}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="logo"

                            sx={{ mr: 2 }}
                        >
                            <HomeIcon sx={{ fontSize: 25 }} />
                        </IconButton>

                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="logo"

                            sx={{ mr: 2 }}
                        >
                            <AccountCircleIcon sx={{ fontSize: 25 }} />
                        </IconButton>
                    </Stack>
                    <Typography sx={{ flexGrow: 1 }}></Typography>
                    <Stack direction="row" spacing={2}>
                        <Button
                            color="inherit"
                        >
                            <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
                                Login
                            </Typography>
                        </Button>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;