import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, Grid, useTheme, useMediaQuery, Drawer, List, ListItem, ListItemText, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const MobileMenu = (
    <List>
      <ListItem button component="a" href="#inicio">
        <ListItemText primary="INICIO" />
      </ListItem>
      <ListItem button component="a" href="#objetivos">
        <ListItemText primary="OBJETIVOS" />
      </ListItem>
      <ListItem button component="a" href="#mision-vision">
        <ListItemText primary="MISIÓN/VISIÓN" />
      </ListItem>
      <ListItem button component="a" href="#politicas">
        <ListItemText primary="POLÍTICAS" />
      </ListItem>
    </List>
  );

  return (
    <>
      <AppBar
        position="relative"
        sx={{
          backgroundImage: `linear-gradient(to right, ${theme.palette.third.main}, ${theme.palette.primary.main})`,
          padding: '20px',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: isMd ? 'row' : 'column',
              alignItems: 'center',
              width: isMd ? 'auto' : '5px', // Adjust the width for mobile screens
              overflow: 'hidden' // Ensure content does not overflow the box
            }}
          >
            <img src="/static/Logo.png" width="190px" height="150px" alt="Logo" />
            <img src="/static/Innova.png" width="300px" height="80" alt="Innova" style={{ marginTop: isMd ? 0 : '10px' }} />
          </Box>
          {isMd ? (
            <Grid container sx={{ justifyContent: 'space-around', alignItems: 'center' }}>
              <Grid item>
                <Button variant="text" color="fifth" sx={{ fontSize: '20px' }} href="#inicio">
                  INICIO
                </Button>
              </Grid>
              <Grid item>
                <Button variant="text" color="fifth" sx={{ fontSize: '20px' }} href="#objetivos">
                  OBJETIVOS
                </Button>
              </Grid>
              <Grid item>
                <Button variant="text" color="fifth" sx={{ fontSize: '20px' }} href="#mision-vision">
                  MISIÓN/VISIÓN
                </Button>
              </Grid>
              <Grid item>
                <Button variant="text" color="fifth" sx={{ fontSize: '20px' }} href="#politicas">
                  POLÍTICAS
                </Button>
              </Grid>
            </Grid>
          ) : (
            <IconButton
              color="fifth"
              onClick={toggleDrawer(true)}
              sx={{ fontSize: '50px' }} // 
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
