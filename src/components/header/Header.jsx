import { AppBar, Toolbar, Typography, Button, Box, Grid, } from "@mui/material";
const Header = () => {
  return (
    <AppBar position="">
      <Toolbar sx={{ backgroundColor: "#3498DB", width: "98%" }}>
        <Box>
          <Typography variant="h6">INNOVA</Typography>
          <Typography variant="h6">COOP</Typography>
        </Box>
        <Grid container justifyContent="end">
          <Box>
            <Button variant="contained" color="secondary">
              Inicio
            </Button>
            <Button variant="contained" color="success">
              Productos
            </Button>
            <Button variant="contained" color="warning">
              Servicios
            </Button>
          </Box>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
