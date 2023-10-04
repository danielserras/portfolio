import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useSelector, useDispatch } from 'react-redux';
import { changeMode } from './colorModeSIice';
import { CssBaseline } from '@mui/material';

const pages = ['Percurso Académico', 'Experiência Profissional', 'Projetos', 'Prémios','Currículo','Contactos'];
const name = "Daniel Serras";

function NavBar (){

    const colorMode = useSelector((state) => state.colorMode.colorMode);
    const isDarkMode = colorMode === "light" ? false:true
    const dispatch = useDispatch()



    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
      

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const goFor = (event, id) => {
        event.preventDefault();
        const element = document.getElementById(id);
        const appBarHeight = document.getElementById('navbar').offsetHeight;
        const targetScrollPosition = element.offsetTop - appBarHeight;
        window.scrollTo({ top: targetScrollPosition, behavior: 'smooth' });
    } 

    return (
        <AppBar id="navbar" position="fixed">
            <Container maxWidth={false} sx={{m:0}}>
                <Toolbar disableGutters variant="dense">
                    <Typography
                        variant="h6"
                        onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById("start");
                            element.scrollIntoView({behavior: 'smooth' });
                            }}
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                        mr: 2,
                        ml:1,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        {name}
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'block', md: 'none' }, zIndex:1 }}>
                        <IconButton
                        size="large"
                        aria-label="menu"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'flex', md: 'none'},
                            
                            }}
                            >
                            {pages.map((page, index) => (
                                <MenuItem key={page} onClick={(event) => goFor(event, `page_${index}`)}>
                                    <Typography color="#000000" textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.2rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        {name}
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page, index) => (
                            <Button
                                key={page}
                                onClick={(event) => goFor(event, `page_${index}`)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    {/* <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 1,
                        }}
                        >
                        <IconButton sx={{ ml: 1 }} onClick={() => dispatch(changeMode())} color="inherit">
                            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                    </Box> */}
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;