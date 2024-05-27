import { Box, Typography, Grid, useTheme } from "@mui/material";

const MainContent1 = () => {
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
            <strong>Beneficios de Pertenecer al Cluster</strong>
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
              <strong>Acceso a Recursos y Conocimientos:</strong>
            </Typography>
            <Typography variant="body2" color="third" fontSize="20px">
              Las cooperativas afiliadas tendrán acceso a una amplia gama de
              recursos y conocimientos, incluyendo programas de capacitación,
              herramientas de gestión, y asesoramiento experto en áreas clave
              como tecnología, procesos, marketing, y finanzas.
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
              <strong>Red de Colaboración:</strong>
            </Typography>
            <Typography variant="body2" color="third" fontSize="20px">
              Formar parte del cluster permitirá a las cooperativas conectarse
              con otras organizaciones similares, facilitando el intercambio de
              ideas, la colaboración en proyectos conjuntos y el establecimiento
              de alianzas estratégicas.
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
              <strong>Visibilidad y Promoción:</strong>
            </Typography>
            <Typography variant="body2" color="third" fontSize="20px">
              Ser parte del cluster aumentará la visibilidad de las cooperativas
              ante potenciales socios, clientes y financiadores, ayudando a
              fortalecer su marca y su posición en el mercado.
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
              <strong>Asesoramiento y Mentoring:</strong>
            </Typography>
            <Typography variant="body2" color="third" fontSize="20px">
              Se ofrecerá asesoramiento personalizado y mentoring a las
              cooperativas afiliadas, con el objetivo de apoyar su crecimiento y
              desarrollo a largo plazo.
            </Typography>
          </Box>
        </Grid>
        <Grid container justifyContent="center">
          <Typography
            textAlign="center"
            variant="body2"
            fontSize="50px"
            marginBottom="50px"
            color="secondary"
          >
            <strong>Condiciones de Afiliación</strong>
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
              Ser una Cooperativa Registrada: Para ser elegible para unirse al
              cluster, la organización debe estar legalmente constituida como
              una cooperativa en Ecuador.
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
              Compromiso con la Innovación y el Desarrollo: Las cooperativas
              interesadas en unirse al cluster deben demostrar un compromiso
              genuino con la innovación, el desarrollo empresarial y la mejora
              continua de sus operaciones.
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
              Participación Activa: Se espera que las cooperativas afiliadas
              participen activamente en las actividades y eventos del cluster,
              contribuyendo con sus ideas, experiencias y recursos para
              beneficio de la comunidad en su conjunto.
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
              Cumplimiento de Normas y Ética Empresarial: Todas las cooperativas
              afiliadas deberán cumplir con las normas éticas y empresariales
              establecidas por el cluster, incluyendo el respeto a los derechos
              laborales, ambientales y sociales.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          container
          justifyContent="center"
          sx={{ marginBottom: "100px" }}
        >
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
              La membresía es gratuita, pero las cooperativas pueden contribuir
              monetariamente para financiar proyectos conjuntos.
            </Typography>
          </Box>
        </Grid>
        <Grid item container justifyContent="center">
          <Typography
            textAlign="center"
            variant="body2"
            fontSize="50px"
            marginBottom="50px"
            color="secondary"
          >
            <strong>Servicios:</strong>
          </Typography>
        </Grid>
        <Grid container spacing={5}>
          <Grid item container xs={12} md={6} justifyContent="flex-end">
            <img src="/static/servicios.png" width="550px" height="400px" />
          </Grid>
          <Grid item xs={12} md={6} container justifyContent="flex-start">
            <Grid item container >
              <Box
                sx={{
                  borderRadius: 2,
                  width: 350,
                  height: 150,
                  marginBottom: "10px",
                }}
              >
                <Typography variant="body2" fontSize="20px">
                  <strong>Plataforma Digital Compartida:</strong>
                </Typography>
                <Typography variant="body2" fontSize="20px">
                  Crear una plataforma en línea
                  donde las cooperativas puedan acceder a herramientas, recursos
                  y soluciones tecnológicas.
                </Typography>
              </Box>
            </Grid>
            <Grid item container>
              <Box
                sx={{
                  borderRadius: 2,
                  width: 350,
                  height: 125,
                  marginBottom: "10px",
                }}
              >
                <Typography variant="body2" fontSize="20px">
                  <strong>Transparencia</strong>
                </Typography>
                <Typography variant="body2" fontSize="20px">
                  La información y los avances deben ser transparentes para
                  todos los miembros del cluster.
                </Typography>
              </Box>
            </Grid>
            <Grid item container>
              <Box
                sx={{
                  borderRadius: 2,
                  width: 350,
                  height: 125,
                  marginBottom: "200px" 
                }}
              >
                <Typography variant="body2" color="third" fontSize="20px">
                  <strong>Inclusión</strong>
                </Typography>
                <Typography variant="body2" color="third" fontSize="20px">
                  Todas las cooperativas, independientemente de su tamaño o
                  ubicación, pueden participar.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContent1;
