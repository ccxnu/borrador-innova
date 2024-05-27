import { Box, Typography, Grid, useTheme } from "@mui/material";

const MainContent = () => {
  const theme = useTheme();

  return (
    <Box marginTop="50px">
      <Box sx={{ boxShadow: "0px 6px 8px -3px rgba(0,0,0,0.1)" }}>
        <Grid container justifyContent="left" alignItems="center">
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                borderRadius: 2,
                padding: 2,
                bgcolor: theme.palette.primary.main,
                textAlign: "justify",
                paddingInlineStart: "30px",
                marginBottom: "20px",
              }}
            >
               <Typography
                variant="h2"
                fontWeight="700"
                fontSize="30px"
                color={theme.palette.secondary.main}
              >
                Bienvenido a Clúster de Innovación Cooperativa
              </Typography>
            </Box>
            <Typography
              variant="body1"
              fontSize="20px"
              paddingInlineStart="30px"
              color={theme.palette.text.secondary}
              textAlign="left"
              sx={{ marginBottom: "50px" }}
            >
              El Clúster de Innovación Cooperativo en Ecuador está diseñado para
              fomentar el crecimiento, la innovación y la sostenibilidad de las
              cooperativas en el país. Este clúster ofrece un entorno en el que
              las cooperativas pueden colaborar, compartir conocimientos y
              recursos, y aprovechar oportunidades para impulsar el desarrollo
              económico y social.
            </Typography>
          </Grid>
          <Grid item xs={12} md={1}>
            <Box
            sx={{marginInlineStart:'140px'}}>
            <img
              src="/static/Logo2.png"
              width="250px"
              height="250px"
              style={{ display: "block", marginBottom: "60px" }} 
            />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ marginTop: "50px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} container justifyContent="center" >
            <img
              src="/static/objetivos.png"
              width="600px"
              height="350px"
            />
          </Grid>
          <Grid item xs={12} md={6} container textAlign="left" justifyContent='center'>
            <Grid item xs={12} container>
              <Box
                sx={{
                  borderRadius: 2,
                  bgcolor: theme.palette.primary.main,
                  textAlign: "justify",
                  width: "100%",
                  maxWidth: "800px", 
                }}
              >
                <Typography
                  variant="h3"
                  fontSize="30px"
                  padding='10px'
                  color={theme.palette.secondary.main}
                  fontWeight="700"
                >
                  <strong>Nuestros Objetivos</strong>
                </Typography>
              </Box>
            </Grid>
            <Grid item container alignItems="center" mb={2}>
              <Typography
                variant="body2"
                fontSize="20px"
                color={theme.palette.text.primary}
              >
                Crear un ecosistema colaborativo donde las cooperativas compartan
                conocimientos, recursos y soluciones tecnológicas.
              </Typography>
            </Grid>
            <Grid item container alignItems="right" mb={2}>
              <Typography
                variant="body2"
                fontSize="20px"
                color={theme.palette.text.primary}
              >
                Facilitar la adopción de tecnologías emergentes, como la
                inteligencia artificial, la ciberseguridad y la automatización de
                procesos.
              </Typography>
            </Grid>
            <Grid item container mb={3}>
              <Typography
                variant="body2"
                fontSize="20px"
                color={theme.palette.text.primary}
              >
                Capacitar a los miembros de las cooperativas en habilidades
                digitales y de gestión.
              </Typography>
            </Grid>
            <Grid item container >
              <Typography
                variant="body2"
                fontSize="20px"
                color={theme.palette.text.primary}
              >
                Fomentar la creación de productos y servicios financieros
                innovadores.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MainContent;
