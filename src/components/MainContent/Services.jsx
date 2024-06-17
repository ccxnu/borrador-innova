import { Box, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";

const Services= () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box id="servicios" pt={isMd ? "8rem" : "2rem"}>
      <Grid item container>
        <Box
          sx={{
            marginTop: "20px",
            padding: 1,
            paddingInlineStart: 15,
            textAlign: "center",
            bgcolor: theme.palette.primary.main,
            borderRadius: "0px 10px 10px 0px",
          }}
        >
          <Typography
            variant="body2"
            fontSize="32px"
            color={theme.palette.fourth.main}
          >
            <strong>Servicios</strong>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} marginTop="40px">
        <Grid
          container
          justifyContent={{ xs: "center", md: "space-arround" }}
          px={4}
          spacing={7}
        >
          <Grid item xs={12} sm={7} md={6}>
            <Box
              sx={{
                backgroundImage: "url(/static/Servicios.png)",
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%",
                minHeight: "200px",
              }}
            ></Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                height: "auto",
                textAlign: "left",
              }}
              marginBottom="30px"
            >
              <img
                src="/static/Check.png"
                width="40px"
                height="40px"
                style={{ marginRight: "10px" }}
              />
              <Box>
                <Typography
                  variant="body1"
                  color={theme.palette.tenth.main}
                  fontSize="26px"
                >
                  <strong>Plataforma Digital Compartida</strong>
                </Typography>
                <Typography
                  variant="body2"
                  color={theme.palette.octh.main}
                  fontSize="18px"
                >
                  Crear una plataforma en línea donde las cooperativas puedan
                  acceder a herramientas, recursos y soluciones tecnológicas.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                height: "auto",
                textAlign: "left",
              }}
              marginBottom="30px"
            >
              <img
                src="/static/Check.png"
                width="40px"
                height="40px"
                style={{ marginRight: "10px" }}
              />
              <Box>
                <Typography
                  variant="body1"
                  color={theme.palette.tenth.main}
                  fontSize="26px"
                >
                  <strong>Capacitación y Talleres</strong>
                </Typography>
                <Typography
                  variant="body2"
                  color={theme.palette.octh.main}
                  fontSize="18px"
                >
                  Ofrecer programas de formación continua en nuevas tecnologías
                  emergentes, innovación, gestión, liderazgo, etc.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                height: "auto",
                textAlign: "left",
              }}
              marginBottom="30px"
            >
              <img
                src="/static/Check.png"
                width="40px"
                height="40px"
                style={{ marginRight: "10px" }}
              />
              <Box>
                <Typography
                  variant="body1"
                  color={theme.palette.tenth.main}
                  fontSize="26px"
                >
                  <strong>Asesoría Personalizada</strong>
                </Typography>
                <Typography
                  variant="body2"
                  color={theme.palette.octh.main}
                  fontSize="18px"
                >
                  Proporcionar asesoramiento específico para cada cooperativa en
                  su camino hacia la innovación.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services;
