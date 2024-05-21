import { Box, Typography, Grid, useTheme } from "@mui/material";

const MainContent2 = () => {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={6}>
        <Grid container justifyContent="center">
          <Typography
            textAlign="center"
            variant="body2"
            fontSize="50px"
            marginBottom="50px"
            color="secondary"
          >
            <strong>Monetización:</strong>
          </Typography>
        </Grid>
        <Grid container justifyContent="center">
          <Typography
            textAlign="center"
            variant="body2"
            fontSize="30px"
            marginBottom="50px"
          >
            El cluster puede generar ingresos a través de:
          </Typography>
        </Grid>
        <Grid item container xs={12} md={6} justifyContent="center">
          <Box
            sx={{
              borderRadius: 2,
              width: 350,
              height: 230,
              textAlign: "justify",
              bgcolor: theme.palette.sixth.main,
            }}
          >
            <Typography variant="body2" color="third" fontSize="20px">
              <strong>Suscripciones Premium:</strong>
            </Typography>
            <Typography variant="body2" color="third" fontSize="20px">
              Ofrece una membresía premium a las cooperativas que deseen acceso
              exclusivo a contenido adicional, como webinars avanzados, informes
              de tendencias y casos de estudio.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} container justifyContent="center">
          <Box
            sx={{
              borderRadius: 1,
              width: 350,
              height: 230,
              textAlign: "justify",
              bgcolor: theme.palette.sixth.main,
            }}
          >
            <Typography variant="body2" color="third" fontSize="20px">
              <strong>Marketplace de Soluciones Tecnológicas:</strong>
            </Typography>
            <Typography variant="body2" color="third" fontSize="20px">
              a Crea un mercado en línea donde las cooperativas puedan comprar
              soluciones tecnológicas específicas. 
              b Obtén una comisión por cada venta realizada a través del marketplace.
            </Typography>
          </Box>
        </Grid>
        <Grid item container xs={12} md={6} justifyContent="center">
          <Box
            sx={{
              borderRadius: 2,
              width: 350,
              height: 230,
              textAlign: "justify",
              bgcolor: theme.palette.sixth.main,
            }}
          >
            <Typography variant="body2" color="third" fontSize="20px">
              <strong>Consultoría Personalizada:</strong>
            </Typography>
            <Typography variant="body2" color="third" fontSize="20px">
              a Ofrece servicios de consultoría estratégica y tecnológica a las
              cooperativas. 
              b Establece tarifas por hora o por proyecto.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} container justifyContent="center">
          <Box
            sx={{
              borderRadius: 1,
              width: 350,
              height: 230,
              textAlign: "justify",
              bgcolor: theme.palette.sixth.main,
            }}
          >
            <Typography variant="body2" color="third" fontSize="20px">
              <strong>Eventos Patrocinados:</strong>
            </Typography>
            <Typography variant="body2" color="third" fontSize="20px">
              a Organiza eventos (conferencias, talleres, hackathons) y busca
              patrocinadores. 
              b Las empresas tecnológicas y financieras pueden pagar por ser patrocinadores y tener visibilidad ante las
              cooperativas.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} container justifyContent="center">
          <Box
            sx={{
              borderRadius: 1,
              width: 350,
              height: 230,
              textAlign: "justify",
              bgcolor: theme.palette.sixth.main,
            }}
          >
            <Typography variant="body2" color="third" fontSize="20px">
              <strong>Alianzas Estratégicas con Fintechs:</strong>
            </Typography>
            <Typography variant="body2" color="third" fontSize="20px">
              a Colabora con empresas fintech para ofrecer soluciones conjuntas.
              b Establece acuerdos de ingresos compartidos basados en el éxito
              de la adopción de estas soluciones.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} container justifyContent="center">
          <Box
            sx={{
              borderRadius: 1,
              width: 350,
              height: 230,
              textAlign: "justify",
              bgcolor: theme.palette.sixth.main,
            }}
          >
            <Typography variant="body2" color="third" fontSize="20px">
              <strong>Programas de Certificación:</strong>
            </Typography>
            <Typography variant="body2" color="third" fontSize="20px">
              a Diseña programas de certificación en áreas como ciberseguridad,
              gestión de datos o transformación digital. 
              b Cobra tarifas por la participación en estos programas.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} container justifyContent="center">
          <Box
            sx={{
              borderRadius: 1,
              width: 350,
              height: 230,
              textAlign: "justify",
              bgcolor: theme.palette.sixth.main,
            }}
          >
            <Typography variant="body2" color="third" fontSize="20px">
              <strong>Venta de Datos Agregados:</strong>
            </Typography>
            <Typography variant="body2" color="third" fontSize="20px">
              a Anonimiza y agrupa datos relevantes de las cooperativas. 
              b Vende estos datos agregados a instituciones financieras o investigadores
              interesados.patrocinadores y tener visibilidad ante las
              cooperativas.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} container justifyContent="center">
          <Box
            sx={{
              borderRadius: 1,
              width: 350,
              height: 230,
              textAlign: "justify",
              bgcolor: theme.palette.sixth.main,
            }}
          >
            <Typography variant="body2" color="third" fontSize="20px">
              <strong>Crowdfunding para Proyectos Innovadores:</strong>
            </Typography>
            <Typography variant="body2" color="third" fontSize="20px">
              a Permite que las cooperativas presenten proyectos innovadores en
              la plataforma. 
              b Los miembros del cluster pueden invertir en estos
              proyectos a través de crowdfunding.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} container justifyContent="center">
          <Box
            sx={{
              borderRadius: 1,
              width: 350,
              height: 230,
              textAlign: "justify",
              bgcolor: theme.palette.sixth.main,
            }}
          >
            <Typography variant="body2" color="third" fontSize="20px">
              <strong>Programas de Afiliados:</strong>
            </Typography>
            <Typography variant="body2" color="third" fontSize="20px">
              a Establece acuerdos de afiliados con proveedores de tecnología. 
              b Gana comisiones por cada cliente referido que adquiera sus
              productos o servicios.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} container justifyContent="center">
          <Box
            sx={{
              borderRadius: 1,
              width: 350,
              height: 230,
              textAlign: "justify",
              bgcolor: theme.palette.sixth.main,
              marginBottom: "200px" 
            }}
          >
            <Typography variant="body2" color="third" fontSize="20px">
              <strong>Publicidad en la Plataforma Digital:</strong>
            </Typography>
            <Typography variant="body2" color="third" fontSize="20px">
              a Ofrece espacios publicitarios en la plataforma. 
              b Las empresas interesadas pueden pagar por anuncios dirigidos a las cooperativas
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContent2;
