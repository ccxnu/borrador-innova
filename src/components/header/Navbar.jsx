import { AppBar, Box, Grid } from "@mui/material";
const Navbar = () => {
  return (
    <AppBar position="relative" color='fourth'>
      <navbar>
        <Grid container justifyContent="space-between">
          <span>Síguenos en: <strong>in</strong></span>
          <Box>
            <span>Llamanos al ✆+593.......</span>
          </Box>
        </Grid>
      </navbar>
    </AppBar>
  );
};

export default Navbar;
