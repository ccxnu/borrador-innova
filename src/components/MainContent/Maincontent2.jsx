import { Box, Typography, Grid, useTheme } from "@mui/material";

const MainContent2 = () => {
  const theme = useTheme();
  return (
    <Box marginTop="150px" id="monetizacion">
      <Grid container spacing={6}>
        <Grid container justifyContent="center">
          <Box
            marginBottom="40px"
            sx={{
              bgcolor: theme.palette.primary.main,
              textAlign: "justify",
              padding: 1,
            }}
          >
            <Typography
              textAlign="center"
              variant="body1"
              fontSize="30px"
              color={theme.palette.fourth.main}
            >
              <strong>Monetización</strong>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            justifyContent={{ xs: "center", md: "space-between" }}
            px={4}
            spacing={2}
          >
            <Grid item xs={8} md={3}>
              <Box
                sx={{
                  display: "flex",
                  height: "auto", textAlign: "left"
                }}
                marginBottom="30px"

              >
                <img src="/static/Check.png" width="40px" height="40px" />
                <Box>
                  <Typography
                    variant="body1"
                    color={theme.palette.tenth.main}
                    fontSize="20px"

                  >
                    <strong>Suscripciones Premium</strong>
                  </Typography>
                  <Typography
                    variant="body2"
                    color={theme.palette.octh.main}
                    fontSize="18px"
                  >
                    Ofrecer una membresía premium a las cooperativas que deseen
                    acceso exclusivo a contenido adicional, como webinars
                    avanzados, informes de tendencias y casos de estudio.
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  height: "auto", textAlign: "left"
                }}
                marginBottom="30px"

              >
                <img src="/static/Check.png" width="40px" height="40px" />
                <Box>

                  <Typography
                    variant="body1"
                    color={theme.palette.tenth.main}
                    fontSize="20px"

                  >
                    <strong>Programas de Afiliados</strong>
                  </Typography>
                  <Typography
                    variant="body2"
                    color={theme.palette.octh.main}
                    fontSize="18px"
                  >
                    1. Establecer acuerdos de afiliados con proveedores de
                    tecnología
                  </Typography>
                  <Typography
                    variant="body2"
                    color={theme.palette.octh.main}
                    fontSize="18px"
                  >
                    2. Ganar comisiones por cada cliente referido que adquiera sus
                    productos o servicios.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={7} md={5}>
              <Box
                sx={{
                  backgroundImage: "url(/static/Monetizacion.png)",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "100%",
                }}
              ></Box>
            </Grid>
            <Grid item xs={8} md={3}>
              <Box
                sx={{
                  display: "flex",
                  height: "auto", textAlign: "left"
                }}
                marginBottom="30px"

              >
                <img src="/static/Check.png" width="40px" height="40px" />
                <Box>

                  <Typography
                    variant="body1"
                    color={theme.palette.tenth.main}
                    fontSize="20px"

                  >
                    <strong>Consultoría Personalizada:</strong>
                  </Typography>
                  <Typography
                    variant="body2"
                    color={theme.palette.octh.main}
                    fontSize="18px"
                  >
                    1. Ofrecer servicios de consultoría estratégica y tecnológica
                    a las cooperativas.
                  </Typography>
                  <Typography
                    variant="body2"
                    color={theme.palette.octh.main}
                    fontSize="18px"
                  >
                    2. Establecer tarifas por hora o por proyecto.
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  height: "auto", textAlign: "left"
                }}
                marginBottom="30px"

              >
                <img src="/static/Check.png" width="40px" height="40px" />
                <Box>

                  <Typography
                    variant="body1"
                    color={theme.palette.tenth.main}
                    fontSize="20px"

                  >
                    <strong>Venta de Datos Agregados:</strong>
                  </Typography>
                  <Typography
                    variant="body2"
                    color={theme.palette.octh.main}
                    fontSize="18px"
                  >
                    1. Anonimizar y agrupar datos relevantes de las cooperativas.
                  </Typography>
                  <Typography
                    variant="body2"
                    color={theme.palette.octh.main}
                    fontSize="18px"
                  >
                    2. Vender estos datos agregados a instituciones financieras o
                    investigadores interesados.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            justifyContent={{ xs: "center", md: "space-between" }}
            px={4}
            spacing={{ xs: 4, md: 2 }}
          >
            <Grid item xs={8} md={3}>
              <Box
                sx={{
                  display: "flex",
                  height: "auto", textAlign: "left"
                }}
                marginBottom="30px"

              >
                <img src="/static/Check.png" width="40px" height="40px" />
                <Box>

                  <Typography
                    variant="body1"
                    color={theme.palette.tenth.main}
                    fontSize="20px"

                  >
                    <strong>Marketplace de Soluciones Tecnológicas</strong>
                  </Typography>
                  <Typography
                    variant="body2"
                    color={theme.palette.octh.main}
                    fontSize="18px"
                  >
                    1. Crear un mercado en línea donde las cooperativas puedan
                    comprar soluciones tecnológicas específicas.
                  </Typography>
                  <Typography
                    variant="body2"
                    color={theme.palette.octh.main}
                    fontSize="18px"
                  >
                    2. Obtener una comisión por cada venta realizada a través del
                    Marketplace.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={8} md={3}>
              <Box
                sx={{
                  display: "flex",
                  height: "auto", textAlign: "left"
                }}
                marginBottom="30px"

              >
                <img src="/static/Check.png" width="40px" height="40px" />
                <Box>

                  <Typography
                    variant="body1"
                    color={theme.palette.tenth.main}
                    fontSize="20px"

                  >
                    <strong>Alianzas Estratégicas con Fintech:</strong>
                  </Typography>
                  <Typography
                    variant="body2"
                    color={theme.palette.octh.main}
                    fontSize="18px"
                  >
                    1. Colaborar con empresas Fintech para ofrecer soluciones
                    conjuntas.
                  </Typography>
                  <Typography
                    variant="body2"
                    color={theme.palette.octh.main}
                    fontSize="18px"
                  >
                    2. Establecer acuerdos de ingresos compartidos basados en el
                    éxito de la adopción de estas soluciones.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={8} md={3}>
              <Box
                sx={{
                  display: "flex",
                  height: "auto", textAlign: "left"
                }}
                marginBottom="30px"

              >
                <img src="/static/Check.png" width="40px" height="40px" />
                <Box>

                  <Typography
                    variant="body1"
                    color={theme.palette.tenth.main}
                    fontSize="20px"

                  >
                    <strong>Eventos Patrocinados:</strong>
                  </Typography>
                  <Typography
                    variant="body2"
                    color={theme.palette.octh.main}
                    fontSize="18px"
                  >
                    1. Organizar eventos (conferencias, talleres, hackatones) y
                    buscar patrocinadores.
                  </Typography>
                  <Typography
                    variant="body2"
                    color={theme.palette.octh.main}
                    fontSize="18px"
                  >
                    2. Las empresas tecnológicas y financieras pueden pagar por
                    ser patrocinadores y tener visibilidad ante las cooperativas.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid
            container
            justifyContent={{ xs: "center", md: "space-between" }}
            px={4}
            spacing={{ xs: 4, md: 2 }}
          >
            <Grid item xs={8} md={3}>
              <Box
                sx={{
                  display: "flex",
                  height: "auto", textAlign: "left"
                }}
                marginBottom="30px"

              >
                <img src="/static/Check.png" width="40px" height="40px" />
                <Box>

                  <Typography
                    variant="body1"
                    color={theme.palette.tenth.main}
                    fontSize="20px"

                  >
                    <strong>Programas de Certificación:</strong>
                  </Typography>
                  <Typography
                    variant="body2"
                    color={theme.palette.octh.main}
                    fontSize="18px"
                  >
                    1. Diseñar programas de certificación en áreas como
                    ciberseguridad, gestión de datos o transformación digital.
                  </Typography>
                  <Typography
                    variant="body2"
                    color={theme.palette.octh.main}
                    fontSize="18px"
                  >
                    2. Cobrar tarifas por la participación en estos programas.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={8} md={3}>
              <Box
                sx={{
                  display: "flex",
                  height: "auto", textAlign: "left"
                }}
                marginBottom="30px"

              >
                <img src="/static/Check.png" width="40px" height="40px" />
                <Box>

                  <Typography
                    variant="body1"
                    color={theme.palette.tenth.main}
                    fontSize="20px"

                  >
                    <strong>Crowdfunding para Proyectos Innovadores:</strong>
                  </Typography>
                  <Typography
                    variant="body2"
                    color={theme.palette.octh.main}
                    fontSize="18px"
                  >
                    1. Permitir que las cooperativas presenten proyectos innovadores en la plataforma.
                  </Typography>
                  <Typography
                    variant="body2"
                    color={theme.palette.octh.main}
                    fontSize="18px"
                  >
                    2. Los miembros del clúster pueden invertir en estos proyectos a través de crowdfunding.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={8} md={3}>
              <Box
                sx={{
                  display: "flex",
                  height: "auto", textAlign: "left"
                }}
                marginBottom="30px"

              >
                <img src="/static/Check.png" width="40px" height="40px" />
                <Box>

                  <Typography
                    variant="body1"
                    color={theme.palette.tenth.main}
                    fontSize="20px"

                  >
                    <strong>Publicidad en la Plataforma Digital</strong>
                  </Typography>
                  <Typography
                    variant="body2"
                    color={theme.palette.octh.main}
                    fontSize="18px"
                  >
                    1. Ofrecer espacios publicitarios en la plataforma.
                  </Typography>
                  <Typography
                    variant="body2"
                    color={theme.palette.octh.main}
                    fontSize="18px"
                  >
                    2. Las empresas interesadas pueden pagar por anuncios dirigidos a las cooperativas.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContent2;
