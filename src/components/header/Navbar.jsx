import { AppBar, Box, Grid } from "@mui/material";
const Navbar = () => {
  return (
    <AppBar position="">
      <navbar>
        <Grid container justifyContent="space-between" fontFamily="Inter" backgroundColor=' #35ddff '>
          <span>Síguenos en: <strong>in</strong></span>
          <Box backgroundColor=" #000c4a ">
            <span>Llamanos al ✆+593.......</span>
          </Box>
        </Grid>
      </navbar>
    </AppBar>
  );
};

export default Navbar;
