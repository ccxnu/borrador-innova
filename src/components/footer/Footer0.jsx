import { Typography, Box, Grid, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: "primary",
        padding: "20px",
        textAlign: "center",
        bgcolor: theme.palette.fourth.main,
      }}
    >
      <Box>
        <Grid container justifyContent="space-around" color="primary">
          <Box>
            <Typography variant="body1" color="primary">
              Nuestra Oficina:
            </Typography>
            <Typography variant="body2" color="primary">
              Mexico y curazaoo
            </Typography>
            <Typography variant="body2" color="primary">
              ✆+593..........
            </Typography>
            <Typography variant="body2" color="primary">
              ✉Info@INNOVA.coop
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" color="primary" letterSpacing="50%">
              Links:
            </Typography>
            <Box>
              <Typography variant="body2" color="primary" >Sobre Nosotros</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="primary">Contáctenos</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="primary">Nuestros Servicios</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="primary">Productos</Typography>
            </Box>
          </Box>
          <Box>
            <Typography variant="body2" color="primary" letterSpacing="50%">
              Horarios de Atención
            </Typography>
            <Typography variant="body2" color="primary" letterSpacing="50%">
              Lunes-Viernes
            </Typography>
            <Typography variant="body2" color="primary" letterSpacing="50%">
              08:00 - 18:00
            </Typography>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
