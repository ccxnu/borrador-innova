import { AppBar, Toolbar, Typography, Button, Box, Grid } from "@mui/material";
const Header = () => {
  return (
    <AppBar position="">
      <Toolbar sx={{ backgroundColor: "#4a5dff" }}>
        <img src="/static/Logo.png" width="55px" height="40px" />
        <Box>
          <Typography variant="h6" sx={{ fontFamily: "Inter" }}>
            INNOVA
          </Typography>
          <Typography variant="h6" sx={{ fontFamily: "Inter" }}>
            COOP
          </Typography>
        </Box>
        <Grid container justifyContent="end">
          <Box>
            <Button
              variant="outlined"
              color="inherit"
              sx={{ fontFamily: "Inter" }}
            >
              Inicio
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              sx={{ fontFamily: "Inter" }}
            >
              Afiliación
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              sx={{ fontFamily: "Inter" }}
            >
              Servicios
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              sx={{ fontFamily: "Inter" }}
            >
              Monetización
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              sx={{ fontFamily: "Inter" }}
            >
              Nosotros
            </Button>
          </Box>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
