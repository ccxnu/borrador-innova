import { Typography, Box, Grid } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#4A235A",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <Box>
        <Grid container justifyContent="space-around">
          <Box>
            <Typography
              variant="body1"
              color="#FBFCFC"
              sx={{ fontFamily: "Inter" }}
            >
              Nuestra Oficina:
            </Typography>
            <Typography
              variant="body2"
              color="#FBFCFC"
              sx={{ fontFamily: "Inter" }}
            >
              Mexico y curazaoo
            </Typography>
            <Typography
              variant="body2"
              color="#FBFCFC"
              sx={{ fontFamily: "Inter" }}
            >
              ✆+593..........
            </Typography>
            <Typography
              variant="body2"
              color="#FBFCFC"
              sx={{ fontFamily: "Inter" }}
            >
              ✉Info@INNOVA.coop
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body1"
              color="#FBFCFC"
              letterSpacing="50%"
              sx={{ fontFamily: "Inter" }}
            >
              Links:
            </Typography>
            <Box>
              <span fontFamily="Inter">Sobre Nosotros</span>
            </Box>
            <Box>
              <span fontFamily="Inter">Contáctenos</span>
            </Box>
            <Box>
              <span fontFamily="Inter">Nuestros Servicios</span>
            </Box>
            <Box>
              <span fontFamily="Inter">Productos</span>
            </Box>
          </Box>
          <Box>
            <Typography
              variant="body1"
              color="#FBFCFC"
              letterSpacing="50%"
              sx={{ fontFamily: "Inter" }}
            >
              Horarios de Atención
            </Typography>
            <Typography
              variant="body2"
              color="#FBFCFC"
              letterSpacing="50%"
              sx={{ fontFamily: "Inter" }}
            >
              Lunes-Viernes
            </Typography>
            <Typography
              variant="body1"
              color="#FBFCFC"
              letterSpacing="50%"
              sx={{ fontFamily: "Inter" }}
            >
              08:00 - 18:00
            </Typography>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
