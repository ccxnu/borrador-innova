import { Box, Typography, Grid, useTheme } from "@mui/material";

const MainContent2 = () => {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={6} >
        <Grid container justifyContent="center" >
          <Box
            sx={{
              borderRadius: 0,
              bgcolor: theme.palette.primary.main,
              textAlign: "justify",
              width: "100%",
              maxWidth: "1400px",
              padding: 1,
            }}>
            <Typography
              textAlign="center"
              variant="body1"
              fontSize="26px"
              color="secondary"
            >
              <strong>Monetización:</strong>
            </Typography>
          </Box>
        </Grid>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item container xs={12} md={5} direction="column" spacing={2}>
            <Grid item>
              <Box sx={{ width: "100%", height: "auto", textAlign: "left" }}>
                <Typography variant="body1" fontSize="20px">
                  <strong>Suscripciones Premium:</strong>
                </Typography>
                <Typography variant="body2" fontSize="18px">
                  Ofrece una membresía premium a las cooperativas que deseen acceso exclusivo a contenido adicional, como webinars avanzados, informes de tendencias y casos de estudio.
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ width: "100%", height: "auto", textAlign: "left" }}>
                <Typography variant="body1" fontSize="20px">
                  <strong>Programas de Afiliados:</strong>
                </Typography>
                <Typography variant="body2" fontSize="18px">
                  Establece acuerdos afiliados con proveedores tecnológicos. Gana comisiones por cada cliente referido que adquiera sus productos o servicios.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid item container xs={12} md={2} justifyContent="center">
            <Box>
              <img src="/static/Monetizacion.png" width="200px" height="200px" />
            </Box>
          </Grid>

          <Grid item container xs={12} md={5} direction="column" spacing={2}>
            <Grid item>
              <Box sx={{ width: "100%", height: "auto", textAlign: "left" }}>
                <Typography variant="body1" fontSize="20px">
                  <strong>Consultoría Personalizada:</strong>
                </Typography>
                <Typography variant="body2" fontSize="18px">
                  Ofrece servicios de consultoría estratégica y tecnológica a las cooperativas. Establece tarifas por hora o por proyecto.
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ width: "100%", height: "auto", textAlign: "left" }}>
                <Typography variant="body1" fontSize="20px">
                  <strong>Venta de Datos Agregados:</strong>
                </Typography>
                <Typography variant="body2" fontSize="18px">
                  Anonimiza y agrupa datos relevantes. Venta de estos datos agregados a instituciones financieras o investigadores interesados.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Fila inferior con cuatro textos alineados horizontalmente */}
          <Grid item container xs={12} spacing={2} justifyContent="space-between">
            <Grid item xs={12} md={3}>
              <Box sx={{ width: "100%", height: "auto", textAlign: "left" }}>
                <Typography variant="body1" fontSize="20px">
                  <strong>Alianzas Estratégicas con Fintech:</strong>
                </Typography>
                <Typography variant="body2" fontSize="18px">
                  Colaborar con empresas Fintech para ofrecer soluciones conjuntas. Establecer acuerdos de ingresos compartidos basados en el éxito de la adopción de estas soluciones.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ width: "100%", height: "auto", textAlign: "left" }}>
                <Typography variant="body1" fontSize="20px">
                  <strong>Eventos Patrocinados:</strong>
                </Typography>
                <Typography variant="body2" fontSize="18px">
                  Organizar eventos (conferencias, talleres, hackathons) y busca patrocinadores. Las empresas tecnológicas y financieras pueden pagar por ser patrocinadores y tener visibilidad ante las cooperativas.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ width: "100%", height: "auto", textAlign: "left" }}>
                <Typography variant="body1" fontSize="20px">
                  <strong>Programas de Certificación:</strong>
                </Typography>
                <Typography variant="body2" fontSize="18px">
                  Organizar eventos (conferencias, talleres, hackathons) y busca patrocinadores. Las empresas tecnológicas y financieras pueden pagar por ser patrocinadores y tener visibilidad ante las cooperativas.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Fila final con los textos restantes alineados horizontalmente */}
          <Grid item container xs={12} spacing={2} justifyContent="space-between">
            <Grid item xs={12} md={3}>
              <Box sx={{ width: "100%", height: "auto", textAlign: "left" }}>
                <Typography variant="body1" fontSize="20px">
                  <strong>Crowdfunding para Proyectos Innovadores:</strong>
                </Typography>
                <Typography variant="body2" fontSize="18px">
                  Permite que las cooperativas presenten proyectos innovadores en la plataforma. Los miembros del cluster pueden invertir en estos proyectos a través de crowdfunding.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ width: "100%", height: "auto", textAlign: "left" }}>
                <Typography variant="body1" fontSize="20px">
                  <strong>Publicidad en la Plataforma Digital:</strong>
                </Typography>
                <Typography variant="body2" fontSize="18px">
                  Ofrece espacios publicitarios en la plataforma. Las empresas interesadas pueden pagar por anuncios dirigidos a las cooperativas.
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
