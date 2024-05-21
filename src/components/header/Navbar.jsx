import { AppBar, Box, Grid, Typography } from "@mui/material";
const Navbar = () => {
  return (
    <AppBar position="relative" color='fourth'>
      <navbar>
        <Grid container justifyContent="space-between">
          <Typography variant="body2" color="primary" fontSize="20px">Síguenos en: <strong>in</strong></Typography>
          <Box>
            <Typography variant="body2" color="primary" fontSize="20px">Llamanos al ✆+593.......</Typography>
          </Box>
        </Grid>
      </navbar>
    </AppBar>
  );
};

export default Navbar;
