import { Box, Typography, Grid, Divider, useTheme } from "@mui/material";

const MainContent = () => {
  const theme = useTheme();

  return (
    <Box sx={{ padding: '20px' }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={10}>
          <Box
            sx={{
              borderRadius: 2,
              padding: 2,
              bgcolor: theme.palette.primary.main,
              textAlign: 'center',
              marginBottom: '20px'
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
            color={theme.palette.text.secondary}
            textAlign="center"
            sx={{ marginBottom: '30px' }}
          >
            El Clúster de Innovación Cooperativo en Ecuador está diseñado para
            fomentar el crecimiento, la innovación y la sostenibilidad de las
            cooperativas en el país. Este clúster ofrece un entorno en el que
            las cooperativas pueden colaborar, compartir conocimientos y
            recursos, y aprovechar oportunidades para impulsar el desarrollo
            económico y social.
          </Typography>
          <Divider sx={{ marginY: 2 }} />
        </Grid>
        <Grid item xs={12} md={2}>
          <img src="/static/Logo2.png" width="200px" height="200px" alt="Logo" style={{ display: 'block', margin: '0 auto' }} />
        </Grid>
      </Grid>
      <Divider sx={{ marginY: 4 }} />
      <Grid container justifyContent="center" sx={{ marginTop: '40px', marginBottom: '40px' }}>
        <Typography
          variant="h3"
          fontSize="25px"
          color={theme.palette.secondary.main}
          fontWeight="700"
        >
          <strong>Nuestros Objetivos</strong>
        </Typography>
      </Grid>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={4} container justifyContent="center" alignItems="center">
          <img src="/static/Logo2.png" width="350px" height="350px" alt="Objetivos" style={{ display: 'block', margin: '0 auto' }} />
        </Grid>
        <Grid item xs={12} md={8} container direction="column" spacing={3}>
          <Grid item>
            <Box
              sx={{
                borderRadius: 2,
                padding: 3,
                bgcolor: theme.palette.sixth.main,
                textAlign: 'justify'
              }}
            >
              <Typography variant="body2" fontSize="20px" color={theme.palette.text.primary}>
                Crear un ecosistema colaborativo donde las cooperativas compartan
                conocimientos, recursos y soluciones tecnológicas.
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                borderRadius: 2,
                padding: 3,
                bgcolor: theme.palette.sixth.main,
                textAlign: 'justify'
              }}
            >
              <Typography variant="body2" fontSize="20px" color={theme.palette.text.primary}>
                Facilitar la adopción de tecnologías emergentes, como la
                inteligencia artificial, la ciberseguridad y la automatización de
                procesos.
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                borderRadius: 2,
                padding: 3,
                bgcolor: theme.palette.sixth.main,
                textAlign: 'justify'
              }}
            >
              <Typography variant="body2" fontSize="20px" color={theme.palette.text.primary}>
                Capacitar a los miembros de las cooperativas en habilidades
                digitales y de gestión.
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                borderRadius: 2,
                padding: 3,
                bgcolor: theme.palette.sixth.main,
                textAlign: 'justify'
              }}
            >
              <Typography variant="body2" fontSize="20px" color={theme.palette.text.primary}>
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

export default MainContent;
