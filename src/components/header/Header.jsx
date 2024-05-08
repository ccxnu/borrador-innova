import { AppBar, Toolbar, Typography, Button, Box, Grid } from "@mui/material";
const Header = () => {
  return (
    <AppBar position="">
      <Toolbar sx={{ backgroundColor: "#4a5dff" }}>
        <img src="/static/Logo.png" width="50px" height="50px" />
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
              variant="contained"
              color="secondary"
              sx={{ fontFamily: "Inter" }}
            >
              Inicio
            </Button>
            <Button
              variant="contained"
              color="success"
              sx={{ fontFamily: "Inter" }}
            >
              Afiliación
            </Button>
            <Button
              variant="contained"
              color="warning"
              sx={{ fontFamily: "Inter" }}
            >
              Servicios
            </Button>
            <Button
              variant="contained"
              color="error"
              sx={{ fontFamily: "Inter" }}
            >
              Monetización
            </Button>
            <Button
              variant="contained"
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
