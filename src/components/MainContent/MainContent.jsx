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
                padding: 2,
                bgcolor: theme.palette.primary.main,
                octhAlign: "justify",
                paddingInlineStart: "95px",
                marginBottom: "20px",
                width: "100%",
                margin: "2 auto",
              }}
            >
              <Typography
                variant="h2"
                fontWeight="700"
                fontSize="30px"
                color={theme.palette.fourth.main}
              >
                Bienvenido a Clúster de Innovación Cooperativa
              </Typography>
            </Box>
            <Typography
              variant="body1"
              fontSize="20px"
              paddingInlineStart="95px"
              color={theme.palette.octh.main}
              octhAlign="justify"
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
            <Box sx={{ marginInlineStart: "140px" }}>
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



      <Grid item xs={12} marginTop='80px'>
        <Grid
          container
          justifyContent={{ xs: "center", md: "space-arround" }}
          px={4}
          spacing={6}
        >
          <Grid item xs={12} sm={7} md={6}>
            <Box
              sx={{
                backgroundImage: "url(/static/Objetivos.png)",
                backgroundPosition: "left",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%",
              }}
            ></Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                padding: 1,
                borderRadius: 2,
                bgcolor: theme.palette.primary.main,
                width: "100%", height: "auto", textAlign: "left"
              }}
              marginBottom="30px"
            >
              <Typography variant="body2" color={theme.palette.fourth.main} fontSize="30px">
                <strong>Nuestros Objetivos</strong>
              </Typography>
            </Box>
            <Box
              sx={{ width: "100%", height: "auto", textAlign: "left" }}
              marginBottom="30px"
            >
              <Typography variant="body2" color={theme.palette.octh.main} fontSize="18px">
              <img src="/static/Check.png" width="40px" height="40px" />
                Fomentar la innovación y la transformación en las cooperativas de ahorro y crédito, mejorando su eficiencia operativa y su capacidad para servir a sus miembros.
              </Typography>
            </Box>
            <Box sx={{ width: "100%", height: "auto", textAlign: "left" }} marginBottom="30px">
              <Typography variant="body2" color={theme.palette.octh.main} fontSize="18px">
              <img src="/static/Check.png" width="40px" height="40px" />
                Crear un ecosistema colaborativo donde las cooperativas compartan conocimientos, recursos y soluciones tecnológicas.
              </Typography>
            </Box>
            <Box sx={{ width: "100%", height: "auto", textAlign: "left" }} marginBottom="30px">
              <Typography variant="body2" color={theme.palette.octh.main} fontSize="18px">
              <img src="/static/Check.png" width="40px" height="40px" />
                Facilitar la adopción de tecnologías emergentes, como la inteligencia artificial, la ciberseguridad y la automatización de procesos.
              </Typography>
            </Box>
            <Box sx={{ width: "100%", height: "auto", textAlign: "left" }} marginBottom="30px">
              <Typography variant="body2" color={theme.palette.octh.main} fontSize="18px">
              <img src="/static/Check.png" width="40px" height="40px" />
                Capacitar a los miembros de las cooperativas en habilidades digitales y de gestión.
              </Typography>
            </Box>
            <Box sx={{ width: "100%", height: "auto", textAlign: "left" }}>
              <Typography variant="body2" color={theme.palette.octh.main} fontSize="18px">
              <img src="/static/Check.png" width="40px" height="40px" />
                Fomentar la creación de productos y servicios financieros innovadores.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContent;
