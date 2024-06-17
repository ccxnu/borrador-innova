import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Grid,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = useState(false);
  const [appBarHeight, setAppBarHeight] = useState(0);

  useEffect(() => {
    const appBarElement = document.getElementById("app-bar");
    if (appBarElement) {
      setAppBarHeight(appBarElement.offsetHeight);
    }
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
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
        behavior: "smooth",
      });
    }
    event.target.blur();
  };

  const MobileMenu = (
    <List sx={{ width: '80vw', maxWidth: 250 }}>
      <ListItem button onClick={handleMenuItemClick("#inicio")}  sx={{ padding: '20px 45px' }}>
        <ListItemText primary="INICIO" primaryTypographyProps={{ fontSize: '20px', fontWeight: 'bold' }} />
      </ListItem>
      <ListItem button onClick={handleMenuItemClick("#objetivos")} sx={{ padding: '20px 45px' }}>
        <ListItemText primary="OBJETIVOS" primaryTypographyProps={{ fontSize: '20px', fontWeight: 'bold' }} />
      </ListItem>
      <ListItem button onClick={handleMenuItemClick("#mision-vision")} sx={{ padding: '20px 45px' }}>
        <ListItemText primary="MISIÓN Y VISIÓN" primaryTypographyProps={{ fontSize: '20px', fontWeight: 'bold' }} />
      </ListItem>
      <ListItem button onClick={handleMenuItemClick("#politicas")} sx={{ padding: '20px 45px' }}>
        <ListItemText primary="POLÍTICAS" primaryTypographyProps={{ fontSize: '20px', fontWeight: 'bold' }} />
      </ListItem>
      <ListItem button onClick={handleMenuItemClick("#beneficios")} sx={{ padding: '20px 45px' }}>
        <ListItemText primary="BENEFICIOS" primaryTypographyProps={{ fontSize: '20px', fontWeight: 'bold' }} />
      </ListItem>
      <ListItem button onClick={handleMenuItemClick("#condiciones")} sx={{ padding: '20px 45px' }}>
        <ListItemText primary="AFILIACIÓN" primaryTypographyProps={{ fontSize: '20px', fontWeight: 'bold' }} />
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
          background: `linear-gradient(to right, ${theme.palette.third.main}, ${theme.palette.primary.main})`,
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="/static/Logo.png"
              width={isMd ? "200px" : "120px"}
              height={isMd ? "auto" : "auto"}
            />
            <img
              src="/static/Innova.png"
              width={isMd ? "200px" : "120px"}
              height={isMd ? "auto" : "auto"}
              alt="Innova"
              style={{ marginTop: isMd ? 0 : "10px" }}
            />
          </Box>
          {isMd ? (
            <Grid
              container
              sx={{ justifyContent:'right',paddingRight:'100px', gap:'10%' }}
            >
              <Grid item>
                <Button
                  variant="text"
                  color="fifth"
                  sx={{
                    fontSize: "20px",
                    "&:focus": {
                      outline: "none",
                    },
                  }}
                  onClick={handleMenuItemClick("#inicio")}
                >
                  <strong>INICIO</strong>
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="text"
                  color="fifth"
                  sx={{
                    fontSize: "20px",
                    "&:focus": {
                      outline: "none",
                    },
                  }}
                  onClick={handleMenuItemClick("#mision-vision")}
                >
                  <strong>MISIÓN Y VISIÓN</strong>
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="text"
                  color="fifth"
                  sx={{
                    fontSize: "20px",
                    "&:focus": {
                      outline: "none",
                    },
                  }}
                  onClick={handleMenuItemClick("#beneficios")}
                >
                  <strong>BENEFICIOS</strong>
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="text"
                  color="fifth"
                  sx={{
                    fontSize: "20px",
                    "&:focus": {
                      outline: "none",
                    },
                  }}
                  onClick={handleMenuItemClick("#condiciones")}
                >
                  <strong>AFILIACIÓN</strong>
                </Button>
              </Grid>
            </Grid>
          ) : (
            <IconButton
              sx={{
                "&:focus": {
                  outline: "none",
                },
              }}
              color="fifth"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon sx={{ fontSize: "50px" }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {MobileMenu}
      </Drawer>
    </>
  );
};

export default Header;
