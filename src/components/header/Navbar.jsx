import { AppBar,Box, Grid, } from "@mui/material";
const Navbar = () => {
  return (
    <AppBar position="">
      <navbar >
        <Grid container justifyContent='space-between'>
        <span>Síguenos en: in</span>
        <Box backgroundColor=' #000c4a '>
        <span >Llamanos al ✆+593.......</span>
        </Box>
        </Grid> 
      </navbar>
    </AppBar>
  );
};

export default Navbar;
