import { Box, Typography, Grid, useTheme } from "@mui/material";

const MainContent2 = () => {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={6}>
        <Grid container justifyContent="center">
          <Box
          marginBottom='40px'
            sx={{
              borderRadius: 0,
              bgcolor: theme.palette.primary.main,
              textAlign: "justify",
              width: "100%",
              maxWidth: "1800px",
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
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item container xs={12} md={3} direction="column" spacing={2}>
            <Grid item>
              <Box sx={{ width: "100%", height: "auto", textAlign: "left" }}>
                <Typography variant="body1" fontSize="20px">
                  <strong>Suscripciones Premium</strong>
                </Typography>
                <Typography variant="body2" fontSize="18px">
                  Ofrece una membresía premium a las cooperativas que deseen
                  acceso exclusivo a contenido adicional, como webinars
                  avanzados, informes de tendencias y casos de estudio.
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ width: "100%", height: "auto", textAlign: "left" }}>
                <Typography variant="body1" fontSize="20px">
                  <strong>Programas de Afiliados</strong>
                </Typography>
                <Typography variant="body2" fontSize="18px">
                  Establece acuerdos de afiliados con proveedores de tecnología.
                  Gana comisiones por cada cliente referido que adquiera sus
                  productos o servicios.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid item container xs={12} md={4} justifyContent="center">
            <Box>
              <img
                src="/static/Monetizacion.png"
                width="500px"
                height="200px"
              />
            </Box>
          </Grid>
          <Grid item container xs={12} md={3} direction="column" spacing={2}>
            <Grid item>
              <Box sx={{ width: "100%", height: "auto", textAlign: "left" }}>
                <Typography variant="body1" fontSize="20px">
                  <strong>Consultoría Personalizada:</strong>
                </Typography>
                <Typography variant="body2" fontSize="18px">
                  Ofrece servicios de consultoría estratégica y tecnológica a
                  las cooperativas. Establece tarifas por hora o por proyecto.
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ width: "100%", height: "auto", textAlign: "left" }}>
                <Typography variant="body1" fontSize="20px">
                  <strong>Venta de Datos Agregados:</strong>
                </Typography>
                <Typography variant="body2" fontSize="18px">
                  Anonimiza y agrupa datos relevantes. Venta de estos datos
                  agregados a instituciones financieras o investigadores
                  interesados.
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={12}
            md={9}
            spacing={2}
          >
            <Grid item xs={12} md={4}>
              <Box sx={{ width: "100%", height: "auto", textAlign: "left" }}>
                <Typography variant="body1" fontSize="20px">
                  <strong>Alianzas Estratégicas con Fintech:</strong>
                </Typography>
                <Typography variant="body2" fontSize="18px">
                  Colaborar con empresas Fintech para ofrecer soluciones
                  conjuntas. Establecer acuerdos de ingresos compartidos basados
                  en el éxito de la adopción de estas soluciones.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box sx={{ width: "100%", height: "auto", textAlign: "left" }}>
                <Typography variant="body1" fontSize="20px">
                  <strong>Eventos Patrocinados:</strong>
                </Typography>
                <Typography variant="body2" fontSize="18px">
                  Organizar eventos (conferencias, talleres, hackathons) y busca
                  patrocinadores. Las empresas tecnológicas y financieras pueden
                  pagar por ser patrocinadores y tener visibilidad ante las
                  cooperativas.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ width: "100%", height: "auto", textAlign: "left" }}>
                <Typography variant="body1" fontSize="20px">
                  <strong>Programas de Certificación:</strong>
                </Typography>
                <Typography variant="body2" fontSize="18px">
                  Organizar eventos (conferencias, talleres, hackathons) y busca
                  patrocinadores. Las empresas tecnológicas y financieras pueden
                  pagar por ser patrocinadores y tener visibilidad ante las
                  cooperativas.
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={12}
            spacing={20}
            md={9}
          >
            <Grid item xs={12} md={4}>
              <Box sx={{ width: "100%", height: "auto", textAlign: "left" }}>
                <Typography variant="body1" fontSize="20px">
                  <strong>Crowdfunding para Proyectos Innovadores:</strong>
                </Typography>
                <Typography variant="body2" fontSize="18px">
                  Permite que las cooperativas presenten proyectos innovadores
                  en la plataforma. Los miembros del cluster pueden invertir en
                  estos proyectos a través de crowdfunding.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ width: "100%", height: "auto", textAlign: "left" }}>
                <Typography variant="body1" fontSize="20px">
                  <strong>Marketplace de Soluciones Tecnológicas</strong>
                </Typography>
                <Typography variant="body2" fontSize="18px">
                  Crea un mercado en línea donde las cooperativas puedan comprar
                  soluciones tecnológicas específicas. Obtén una comisión por
                  cada venta realizada a través del Marketplace.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ width: "100%", height: "auto", textAlign: "left" }}>
                <Typography variant="body1" fontSize="20px">
                  <strong>Publicidad en la Plataforma Digital:</strong>
                </Typography>
                <Typography variant="body2" fontSize="18px">
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
