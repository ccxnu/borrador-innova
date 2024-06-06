import { AppBar, Toolbar, Button, Box, Grid, useTheme } from "@mui/material";

const Header = () => {
  const theme = useTheme();
  return (
    <AppBar
      position="relative"
      sx={{
        backgroundImage: `linear-gradient(to right, ${theme.palette.third.main}, ${theme.palette.primary.main})`,
        padding: '20px'
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src="/static/Logo.png" width="190" height="150" alt="Logo" />
          <img src="/static/Innova.png" width="300" height="80" alt="Logo" />
        </Box>
        <Grid container sx={{ justifyContent: 'space-around', alignItems: 'center', flexGrow: 1 }}>
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
          <Grid item>
            <Button variant="text" color="fifth" sx={{ fontSize: '20px' }} href="#condiciones">
              CONDICIONES
            </Button>
          </Grid>
          <Grid item>
            <Button variant="text" color="fifth" sx={{ fontSize: '20px' }} href="#beneficios">
              BENEFICIOS
            </Button>
          </Grid>
          <Grid item>
            <Button variant="text" color="fifth" sx={{ fontSize: '20px' }} href="#servicios">
              SERVICIOS
            </Button>
          </Grid>
          <Grid item>
            <Button variant="text" color="fifth" sx={{ fontSize: '20px' }} href="#monetizacion">
              MONETIZACIÓN
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
