import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Box, Grid, useTheme, useMediaQuery, Drawer, List, ListItem, ListItemText, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = useState(false);
  const [appBarHeight, setAppBarHeight] = useState(0);

  useEffect(() => {
    // Calcula la altura del AppBar dinámicamente
    const appBarElement = document.getElementById('app-bar');
    if (appBarElement) {
      setAppBarHeight(appBarElement.offsetHeight);
    }
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const handleMenuItemClick = (href) => (event) => {
    setOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetPosition = targetElement.offsetTop - appBarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const MobileMenu = (
    <List>
      <ListItem button onClick={handleMenuItemClick("#inicio")}>
        <ListItemText primary="INICIO" />
      </ListItem>
      <ListItem button onClick={handleMenuItemClick("#objetivos")}>
        <ListItemText primary="OBJETIVOS" />
      </ListItem>
      <ListItem button onClick={handleMenuItemClick("#mision-vision")}>
        <ListItemText primary="MISIÓN/VISIÓN" />
      </ListItem>
      <ListItem button onClick={handleMenuItemClick("#politicas")}>
        <ListItemText primary="POLÍTICAS" />
      </ListItem>
      <ListItem button onClick={handleMenuItemClick("#beneficios")}>
        <ListItemText primary="BENEFICIOS" />
      </ListItem>
      <ListItem button onClick={handleMenuItemClick("#condiciones")}>
        <ListItemText primary="CONDICIONES" />
      </ListItem>
      <ListItem button onClick={handleMenuItemClick("#servicios")}>
        <ListItemText primary="SERVICIOS" />
      </ListItem>
      <ListItem button onClick={handleMenuItemClick("#monetizacion")}>
        <ListItemText primary="MONETIZACIÓN" />
      </ListItem>
    </List>
  );

  return (
    <>
      <AppBar
        id="app-bar"
        position="sticky"
        sx={{
          top: 0,
          backgroundImage: `linear-gradient(to right, ${theme.palette.third.main}, ${theme.palette.primary.main})`,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: isMd ? 'row' : 'column',
              alignItems: 'center',
            }}
          >
            <img 
              src="/static/Logo.png" 
              width={isMd ? '200px' : '150px'} 
              height={isMd ? 'auto' : 'auto'} 
              alt="Logo" 
            />
            <img 
              src="/static/Innova.png" 
              width={isMd ? '200px' : '150px'} 
              height={isMd ? 'auto' : 'auto'} 
              alt="Innova" 
              style={{ marginTop: isMd ? 0 : '10px' }} 
            />
          </Box>
          {isMd ? (
            <Grid container sx={{ justifyContent: 'space-around', alignItems: 'center' }}>
              <Grid item>
                <Button variant="text" color="fifth" sx={{ fontSize: '20px' }} onClick={handleMenuItemClick("#inicio")}>
                  <strong>INICIO</strong>
                </Button>
              </Grid>
              <Grid item>
                <Button variant="text" color="fifth" sx={{ fontSize: '20px' }} onClick={handleMenuItemClick("#objetivos")}>
                <strong>OBJETIVOS</strong>
                </Button>
              </Grid>
              <Grid item>
                <Button variant="text" color="fifth" sx={{ fontSize: '20px' }} onClick={handleMenuItemClick("#mision-vision")}>
                <strong>MISIÓN/VISIÓN</strong>
                </Button>
              </Grid>
              <Grid item>
                <Button variant="text" color="fifth" sx={{ fontSize: '20px' }} onClick={handleMenuItemClick("#politicas")}>
                <strong>POLÍTICAS</strong>
                </Button>
              </Grid>
            </Grid>
          ) : (
            <IconButton
              color="fifth"
              onClick={toggleDrawer(true)}
              sx={{ fontSize: '50px' }}
            >
              <MenuIcon sx={{ fontSize: '50px' }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {MobileMenu}
      </Drawer>
    </>
  );
};

export default Header;
