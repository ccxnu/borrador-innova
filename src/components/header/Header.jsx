import { AppBar, Toolbar, Typography, Button, Box, Grid, useTheme } from "@mui/material";
const Header = () => {
  const theme = useTheme();
  return (
    <AppBar position="relative" sx={{ backgroundImage: `linear-gradient(to right, ${theme.palette.third.main}, ${theme.palette.primary.main})`, padding:'15px'}}>
      <Toolbar>
        <Box>
        <img src="/static/Logo.png" width="230px" height="150px"  />
        </Box>
        <Box>
          <Typography variant="h6" color='primary' fontSize='30px'>
            INNOVA
          </Typography>
          <Typography variant="h6" color='secondary' fontSize='20px' textAlign='center'>
            C O O P
          </Typography>
        </Box>
        <Grid container sx={{ justifyContent: 'space-around',}}>
          <Box>
            <Button
              variant="text"
              color="fifth"
              sx={{fontSize: '23px',}}
            >
              INICIO
            </Button>
            <Button
              variant="text"
              color="fifth"
              sx={{fontSize: '23px'}}              
            >
              AFILICACIÓN
            </Button>
            <Button
              variant="text"
              color="fifth"
              sx={{fontSize: '23px'}}
            >
              SERVICIOS
            </Button>
            <Button
              variant="text"
              color="fifth"
              sx={{fontSize: '23px'}}
            >
              MONTEZACIÓN
            </Button>
            <Button
              variant="text"
              color="fifth"
              sx={{fontSize: '23px'}}
            >
              NOSOTROS
            </Button>
          </Box>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
