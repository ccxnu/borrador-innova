import { Box, Typography, Grid } from "@mui/material";
const MainContent1 = () => {
  return (
    <Box >
      <Grid>
        <Typography
          textAlign="center"
          variant="body1"
          fontSize="50px"
          marginBottom="50px"
          color="secondary"
        >
          <strong>Beneficios de Pertenecer al Cluster:</strong>
        </Typography>
      </Grid>
      <Grid container spacing={6}>
        <Grid item xs={9} md={6} container justifyContent="center">
          <Box
            sx={{
              borderRadius: 2,

              width: 350,
              height: 260,
              bgcolor: "#1d3d",
            }}
          >
            <Typography variant="body2" color="third" fontSize="20px">
              Acceso a Recursos y Conocimientos
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
              borderRadius: 2,
              width: 350,
              height: 240,
              bgcolor: "#1d3",
            }}
          >
            <Typography variant="body2" color="third" fontSize="20px">
              Red de Colaboración
            </Typography>
            <Typography variant="body2" color="third" fontSize="20px">
              Formar parte del cluster permitirá a las cooperativas conectarse
              con otras organizaciones similares, facilitando el intercambio de
              ideas, la colaboración en proyectos conjuntos y el establecimiento
              de alianzas estratégicas.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} container justifyContent="center">
          <Box
            sx={{
              borderRadius: 2,
              width: 350,
              height: 180,
              bgcolor: "#1d3d",
            }}
          >
            <Typography variant="body2" color="third" fontSize="20px">
              Visibilidad y Promoción
            </Typography>
            <Typography variant="body2" color="third" fontSize="20px">
              Ser parte del cluster aumentará la visibilidad de las cooperativas
              ante potenciales socios, clientes y financiadores, ayudando a
              fortalecer su marca y su posición en el mercado.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          container
          justifyContent="center"
          sx={{ marginBottom: "200px" }}
        >
          <Box
            sx={{
              borderRadius: 2,
              width: 350,
              height: 180,
              bgcolor: "#1d3d",
            }}
          >
            <Typography variant="body2" color="third" fontSize="20px">
              Asesoramiento y Mentoring
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
            variant="body1"
            fontSize="50px"
            marginBottom="50px"
            color="secondary"
          >
            <strong>Servicios:</strong>
          </Typography>
        </Grid>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} container direction="column" spacing={2} alignContent='center'>
            <Grid item>
              <Box
                sx={{
                  borderRadius: 2,
                  width: 350,
                  height: 150,
                  bgcolor: "#388191",
                }}
              >
                <Typography variant="body2" color="third" fontSize="20px">
                  Colaboración
                </Typography>
                <Typography variant="body2" color="third" fontSize="20px">
                  Las cooperativas deben comprometerse a colaborar activamente,
                  compartiendo buenas prácticas y experiencias.
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  borderRadius: 2,
                  width: 350,
                  height: 125,
                  bgcolor: "#388191",
                }}
              >
                <Typography variant="body2" color="third" fontSize="20px">
                  Transparencia
                </Typography>
                <Typography variant="body2" color="third" fontSize="20px">
                  La información y los avances deben ser transparentes para
                  todos los miembros del cluster.
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  borderRadius: 2,
                  width: 350,
                  height: 125,
                  bgcolor: "#388191",
                }}
              >
                <Typography variant="body2" color="third" fontSize="20px">
                  Inclusión
                </Typography>
                <Typography variant="body2" color="third" fontSize="20px">
                  Todas las cooperativas, independientemente de su tamaño o
                  ubicación, pueden participar.
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} container justifyContent="flex-start">
            <img src="/static/servicios.jpg" width="500px" height="500px" />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContent1;
