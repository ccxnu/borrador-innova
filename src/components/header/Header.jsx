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
          <img src="/static/Logo.png" width="100" height="50" alt="Logo" />
          <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
            <Box component="span" sx={{ color: theme.palette.primary.main, fontSize: '30px', fontWeight: 'bold' }}>
              INNOVA
            </Box>
            <Box component="span" sx={{ color: theme.palette.secondary.main, fontSize: '20px', textAlign: 'center' }}>
              COOP
            </Box>
          </Box>
        </Box>
        <Grid container sx={{ justifyContent: 'space-around', alignItems: 'center', flexGrow: 1 }}>
          <Grid item>
            <Button variant="text" color="fifth" sx={{ fontSize: '20px' }}>
              INICIO
            </Button>
          </Grid>
          <Grid item>
            <Button variant="text" color="fifth" sx={{ fontSize: '20px' }}>
              AFILIACIÓN
            </Button>
          </Grid>
          <Grid item>
            <Button variant="text" color="fifth" sx={{ fontSize: '20px' }}>
              SERVICIOS
            </Button>
          </Grid>
          <Grid item>
            <Button variant="text" color="fifth" sx={{ fontSize: '20px' }}>
              MONETIZACIÓN
            </Button>
          </Grid>
          <Grid item>
            <Button variant="text" color="fifth" sx={{ fontSize: '20px' }}>
              NOSOTROS
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
