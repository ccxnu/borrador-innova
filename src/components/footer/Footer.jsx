import { Typography, Box, Grid, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: "primary",
        padding: "20px",
        textAlign: "center",
        backgroundImage: `linear-gradient(to right, ${theme.palette.sixth.main}, ${theme.palette.septh.main})`
      }}
    >
      <Box>
        <Grid container justifyContent="space-around" >
          <Box>
            <Typography variant="body1" color={theme.palette.fifth.main} letterSpacing="50%">
              Links:
            </Typography>
            <Box>
              <Typography variant="body2" color={theme.palette.fifth.main} >Sobre Nosotros</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color={theme.palette.fifth.main}>Contáctenos</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color={theme.palette.fifth.main}>Nuestros Servicios</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color={theme.palette.fifth.main}>Productos</Typography>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
