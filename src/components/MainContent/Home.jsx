import { Box, Typography, Grid, useTheme } from "@mui/material";

const Home = () => {
  const theme = useTheme();

  return (
    <Box marginTop="50px">
      <Box id="inicio" sx={{ boxShadow: "0px 6px 8px -3px rgba(0,0,0,0.1)" }}>
        <Grid item xs={12}>
          <Grid
            container
            justifyContent={{ xs: "center", md: "space-between" }}
            spacing={6}
          >
            <Grid item xs={11} md={7}>
              <Box
                sx={{
                  marginBottom: "40px",
                  padding: 1,
                  textAlign: "center",
                  bgcolor: theme.palette.primary.main,
                  borderRadius: "0px 10px 10px 0px",
                }}
              >
                <Typography
                  variant="body2"
                  fontSize="30px"
                  textAlign="right"
                  color={theme.palette.fourth.main}
                >
                  <strong>
                    Bienvenido a Clúster de Innovación Cooperativa
                  </strong>
                </Typography>
              </Box>
              <Box
                sx={{ height: "auto", textAlign: "left" }}
                marginBottom="30px"
              >
                <Typography
                  variant="body2"
                  color={theme.palette.octh.main}
                  fontSize="22px"
                  paddingInlineStart="50px"
                >
                  El Clúster de Innovación Cooperativo en Ecuador está diseñado
                  para fomentar el crecimiento, la innovación y la
                  sostenibilidad de las cooperativas en el país. Este clúster
                  ofrece un entorno en el que las cooperativas pueden colaborar,
                  compartir conocimientos y recursos, y aprovechar oportunidades
                  para impulsar el desarrollo económico y social.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={7} md={5}>
              <Box
                sx={{
                  backgroundImage: "url(/static/Logo2.png)",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "100%",
                  minHeight: "200px",
                }}
              ></Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Grid item xs={12} marginTop="100px" id="objetivos">
        <Grid container justifyContent={{ xs: "right" }}>
          <Grid item xs={10} md={5.5}>
            <Box
              sx={{
                padding: 1,
                bgcolor: theme.palette.primary.main,
                height: "auto",
                textAlign: "left",
                borderRadius: "10px 0px 0px 10px",
              }}
              marginBottom="30px"
            >
              <Typography
                variant="body2"
                color={theme.palette.fourth.main}
                fontSize="32px"
              >
                <strong>Nuestros Objetivos</strong>
              </Typography>
            </Box>
          </Grid>
        </Grid>
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
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%",
                minHeight: "200px",
              }}
            ></Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box sx={{ height: "auto", textAlign: "left" }} marginBottom="30px">
              <Typography
                variant="body2"
                color={theme.palette.octh.main}
                fontSize="20px"
                display="flex"
              >
                <img
                  src="/static/Check.png"
                  width="40px"
                  height="40px"
                  style={{ marginRight: "10px" }}
                />
                Fomentar la innovación y la transformación en las cooperativas
                de ahorro y crédito, mejorando su eficiencia operativa y su
                capacidad para servir a sus miembros.
              </Typography>
            </Box>

            <Box sx={{ height: "auto", textAlign: "left" }} marginBottom="30px">
              <Typography
                variant="body2"
                color={theme.palette.octh.main}
                fontSize="20px"
                display="flex"
              >
                <img
                  src="/static/Check.png"
                  width="40px"
                  height="40px"
                  style={{ marginRight: "10px" }}
                />
                Crear un ecosistema colaborativo donde las cooperativas
                compartan conocimientos, recursos y soluciones tecnológicas.
              </Typography>
            </Box>
            <Box sx={{ height: "auto", textAlign: "left" }} marginBottom="30px">
              <Typography
                variant="body2"
                color={theme.palette.octh.main}
                fontSize="20px"
                display="flex"
              >
                <img
                  src="/static/Check.png"
                  width="40px"
                  height="40px"
                  style={{ marginRight: "10px" }}
                />
                Facilitar la adopción de tecnologías emergentes, como la
                inteligencia artificial, la ciberseguridad y la automatización
                de procesos.
              </Typography>
            </Box>
            <Box sx={{ height: "auto", textAlign: "left" }} marginBottom="30px">
              <Typography
                variant="body2"
                color={theme.palette.octh.main}
                fontSize="20px"
                display="flex"
              >
                <img
                  src="/static/Check.png"
                  width="40px"
                  height="40px"
                  style={{ marginRight: "10px" }}
                />
                Capacitar a los miembros de las cooperativas en habilidades
                digitales y de gestión.
              </Typography>
            </Box>
            <Box sx={{ height: "auto", textAlign: "left" }}>
              <Typography
                variant="body2"
                color={theme.palette.octh.main}
                fontSize="20px"
                display="flex"
              >
                <img
                  src="/static/Check.png"
                  width="40px"
                  height="40px"
                  style={{ marginRight: "10px" }}
                />
                Fomentar la creación de productos y servicios financieros
                innovadores.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
