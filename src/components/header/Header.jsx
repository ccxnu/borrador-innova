import { AppBar, Toolbar, Button, Box, Grid, useTheme } from "@mui/material";

const Header = () => {
  const theme = useTheme();
  return (
    <AppBar 
      position="relative" 
      sx={{ 
        backgroundImage: `linear-gradient(to right, ${theme.palette.third.main}, ${theme.palette.primary.main})`, 
        padding: '10px 30px' 
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src="/static/Logo.png" width="190" height="150" alt="Logo" />
          <img src="/static/Innova.png" width="210" height="80" alt="Logo" />
        </Box>
        <Grid container sx={{ justifyContent: 'space-around', alignItems: 'center', flexGrow: 1 }}>
          <Grid item>
            <Button variant="text" color="fifth" sx={{ fontSize: '20px' }}>
              INICIO
            </Button>
          </Grid>
          <Grid item>
            <Button variant="text" color="fifth" sx={{ fontSize: '20px' }}>
              OBJETIVOS
            </Button>
          </Grid>
          <Grid item>
            <Button variant="text" color="fifth" sx={{ fontSize: '20px' }}>
              MISIÓN/VISIÓN
            </Button>
          </Grid>
          <Grid item>
            <Button variant="text" color="fifth" sx={{ fontSize: '20px' }}>
              POLÍTICAS
            </Button>
          </Grid>
          <Grid item>
            <Button variant="text" color="fifth" sx={{ fontSize: '20px' }}>
              BENEFICIOS
            </Button>
          </Grid>
          <Grid item>
            <Button variant="text" color="fifth" sx={{ fontSize: '20px' }}>
              MONETIZACIÓN
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
