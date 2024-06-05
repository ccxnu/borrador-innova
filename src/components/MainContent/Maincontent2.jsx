import { Box, Typography, Grid, useTheme } from "@mui/material";

const MainContent2 = () => {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={6}>
        <Grid container justifyContent="center">
          <Box
            marginBottom="40px"
            sx={{
              borderRadius: 0,
              bgcolor: theme.palette.primary.main,
              textAlign: "justify",
              width: "100%",
              maxWidth: "2000px",
              padding: 1,
            }}
          >
            <Typography
              textAlign="center"
              variant="body1"
              fontSize="30px"
              color={theme.palette.fourth.main}
            >
              <strong>Monetización:</strong>
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
                sx={{ width: "100%", height: "auto", textAlign: "left" }}
                marginBottom="30px"
              >
                <img src="/static/Check.png" width="40px" height="40px" />
                <Typography variant="body1" color={theme.palette.tenth.main} fontSize="20px">
                  <strong>Suscripciones Premium</strong>
                </Typography>
                <Typography variant="body2" color={theme.palette.octh.main} fontSize="18px">
                  Ofrece una membresía premium a las cooperativas que deseen
                  acceso exclusivo a contenido adicional, como webinars
                  avanzados, informes de tendencias y casos de estudio.
                </Typography>
              </Box>
              <Box sx={{ width: "100%", height: "auto", textAlign: "left" }}>
              <img src="/static/Check.png" width="40px" height="40px" />
                <Typography variant="body1" color={theme.palette.tenth.main} fontSize="20px">
                  <strong>Programas de Afiliados</strong>
                </Typography>
                <Typography variant="body2" color={theme.palette.octh.main} fontSize="18px">
                  Establece acuerdos de afiliados con proveedores de tecnología.
                  Gana comisiones por cada cliente referido que adquiera sus
                  productos o servicios.
                </Typography>
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
                sx={{ width: "100%", height: "auto", textAlign: "left" }}
                marginBottom="30px"
              >
                <img src="/static/Check.png" width="40px" height="40px" />
                <Typography variant="body1" color={theme.palette.tenth.main} fontSize="20px">
                  <strong>Consultoría Personalizada:</strong>
                </Typography>
                <Typography variant="body2" color={theme.palette.octh.main} fontSize="18px">
                  Ofrece servicios de consultoría estratégica y tecnológica a
                  las cooperativas. Establece tarifas por hora o por proyecto.
                </Typography>
              </Box>
              <Box sx={{ width: "100%", height: "auto", textAlign: "left" }}>
              <img src="/static/Check.png" width="40px" height="40px" />
                <Typography variant="body1" color={theme.palette.tenth.main} fontSize="20px">
                  <strong>Venta de Datos Agregados:</strong>
                </Typography>
                <Typography variant="body2" color={theme.palette.octh.main} fontSize="18px">
                  Anonimiza y agrupa datos relevantes. Venta de estos datos
                  agregados a instituciones financieras o investigadores
                  interesados.
                </Typography>
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
              <Box sx={{ width: "100%", height: "auto", textAlign: "left" }}>
              <img src="/static/Check.png" width="40px" height="40px" />
                <Typography variant="body1" color={theme.palette.tenth.main} fontSize="20px">
                  <strong>Marketplace de Soluciones Tecnológicas</strong>
                </Typography>
                <Typography variant="body2" color={theme.palette.octh.main} fontSize="18px">
                  Crea un mercado en línea donde las cooperativas puedan comprar
                  soluciones tecnológicas específicas. Obtén una comisión por
                  cada venta realizada a través del Marketplace.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={8} md={3}>
              <Box sx={{ width: "100%", height: "auto", textAlign: "left" }}>
              <img src="/static/Check.png" width="40px" height="40px" />
                <Typography variant="body1" color={theme.palette.tenth.main} fontSize="20px">
                  <strong>Alianzas Estratégicas con Fintech:</strong>
                </Typography>
                <Typography variant="body2" color={theme.palette.octh.main} fontSize="18px">
                  Colaborar con empresas Fintech para ofrecer soluciones
                  conjuntas. Establecer acuerdos de ingresos compartidos basados
                  en el éxito de la adopción de estas soluciones.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={8} md={3}>
              <Box sx={{ width: "100%", height: "auto", textAlign: "left" }}>
              <img src="/static/Check.png" width="40px" height="40px" />
                <Typography variant="body1" color={theme.palette.tenth.main} fontSize="20px">
                  <strong>Eventos Patrocinados:</strong>
                </Typography>
                <Typography variant="body2" color={theme.palette.octh.main} fontSize="18px">
                  Organizar eventos (conferencias, talleres, hackathons) y busca
                  patrocinadores. Las empresas tecnológicas y financieras pueden
                  pagar por ser patrocinadores y tener visibilidad ante las
                  cooperativas.
                </Typography>
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
              <Box sx={{ width: "100%", height: "auto", textAlign: "left" }}>
              <img src="/static/Check.png" width="40px" height="40px" />
                <Typography variant="body1" color={theme.palette.tenth.main} fontSize="20px">
                  <strong>Programas de Certificación:</strong>
                </Typography>
                <Typography variant="body2" color={theme.palette.octh.main} fontSize="18px">
                  Organizar eventos (conferencias, talleres, hackathons) y busca
                  patrocinadores. Las empresas tecnológicas y financieras pueden
                  pagar por ser patrocinadores y tener visibilidad ante las
                  cooperativas.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={8} md={3}>
              <Box sx={{ width: "100%", height: "auto", textAlign: "left" }}>
              <img src="/static/Check.png" width="40px" height="40px" />
                <Typography variant="body1" color={theme.palette.tenth.main} fontSize="20px">
                  <strong>Crowdfunding para Proyectos Innovadores:</strong>
                </Typography>
                <Typography variant="body2" color={theme.palette.octh.main} fontSize="18px">
                  Permite que las cooperativas presenten proyectos innovadores
                  en la plataforma. Los miembros del cluster pueden invertir en
                  estos proyectos a través de crowdfunding.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={8} md={3}>
              <Box sx={{ width: "100%", height: "auto", textAlign: "left" }}>
              <img src="/static/Check.png" width="40px" height="40px" />
                <Typography variant="body1" color={theme.palette.tenth.main} fontSize="20px">
                  <strong>Publicidad en la Plataforma Digital</strong>
                </Typography>
                <Typography variant="body2" color={theme.palette.octh.main} fontSize="18px">
                  Ofrece espacios publicitarios en la plataforma. Las empresas
                  interesadas pueden pagar por anuncios dirigidos a las
                  cooperativas.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContent2;
