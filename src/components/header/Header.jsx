import { AppBar, Toolbar, Typography, Button, Box, Grid } from "@mui/material";
const Header = () => {
  return (
    <AppBar position="relative" color="third">
      <Toolbar>
        <img src="/static/Logo.png" width="55px" height="40px" />
        <Box>
          <Typography variant="h6" color='primary'>
            INNOVA
          </Typography>
          <Typography variant="h6" color='secondary'>
            COOP
          </Typography>
        </Box>
        <Grid container justifyContent="end">
          <Box>
            <Button
              variant="outlined"
              color="fifth"
              
            >
              Inicio
            </Button>
            <Button
              variant="outlined"
              color="fifth"
              
            >
              Afiliación
            </Button>
            <Button
              variant="outlined"
              color="fifth"
              
            >
              Servicios
            </Button>
            <Button
              variant="outlined"
              color="fifth"
              
            >
              Monetización
            </Button>
            <Button
              variant="outlined"
              color="fifth"
              
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
