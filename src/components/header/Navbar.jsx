import { AppBar, Box, Grid } from "@mui/material";
const Navbar = () => {
  return (
    <AppBar position="static">
      <navbar>
        <Grid container justifyContent="space-between" color="secondary" >
          <span>Síguenos en: <strong>in</strong></span>
          <Box backgroundColor=" default ">
            <span>Llamanos al ✆+593.......</span>
          </Box>
        </Grid>
      </navbar>
    </AppBar>
  );
};

export default Navbar;
