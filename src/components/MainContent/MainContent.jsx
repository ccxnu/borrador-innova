import { Box, Typography, Grid } from "@mui/material";
const MainContent = () => {
  return (
    <Box
      sx={{padding: "100px"}}
    >
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography
            textAlign="center"
            variant="h2"
            fontWeight="700"
            fontSize="60px"
            color="primary"
            justifyContent="left"
            sx={{ marginTop: "50px" }}
            gutterBottom
          >
            BIENVENIDO A CLUSTER DE INNOVACIÓN COOPERATIVO
          </Typography>
          <Typography
            variant="body1"
            fontSize="20px"
            marginBottom="50px"
            color="secondary"
            paddingInline={22}
          >
            El Cluster de Innovación Cooperativo en Ecuador está diseñado para
            fomentar el crecimiento, la innovación y la sostenibilidad de las
            cooperativas en el país. Este cluster ofrece un entorno en el que
            las cooperativas pueden colaborar, compartir conocimientos y
            recursos, y aprovechar oportunidades para impulsar el desarrollo
            económico y social.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="/static/Logo2.png" width="750px" height="750px" />
        </Grid>
      </Grid>
      <Grid>
        <Typography
          textAlign="center"
          variant="body1"
          fontSize="50px"
          marginBottom="50px"
          color="secondary"
        >
          <strong>Nuestros Objetivos:</strong>
        </Typography>
        <Typography
          textAlign="justify"
          variant="body2"
          fontSize="25px"
          marginBottom="50px"
          color="third"
          paddingInline={22}
        >
          Fomentar la innovación y la transformación en las cooperativas de
          ahorro y crédito, mejorando su eficiencia operativa y su capacidad
          para servir a sus miembros.
        </Typography>
      </Grid>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6} container justifyContent="center">
          <Box
            sx={{
              borderRadius: 2,
              width: 350,
              height: 110,
              bgcolor: "",
            }}
          >
            <Typography variant="body2" color="third" fontSize="20px">
              Crear un ecosistema colaborativo donde las cooperativas compartan
              conocimientos, recursos y soluciones tecnológicas.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} container justifyContent="center">
          <Box
            sx={{
              borderRadius: 1,
              width: 350,
              height: 150,
              bgcolor: "",
            }}
          >
            <Typography variant="body2" color="third" fontSize="20px">
              Facilitar la adopción de tecnologías emergentes, como la
              inteligencia artificial, la ciberseguridad y la automatización de
              procesos.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} container justifyContent="center">
          <Box
            sx={{
              borderRadius: 1,
              width: 350,
              height: 150,
              bgcolor: "",
            }}
          >
            <Typography variant="body2" color="third" fontSize="20px">
              Capacitar a los miembros de las cooperativas en habilidades
              digitales y de gestión.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} container justifyContent="center">
          <Box
            sx={{
              borderRadius: 1,
              width: 350,
              height: 150,
              bgcolor: "",
            }}
          >
            <Typography variant="body2" color="third" fontSize="20px">
              Fomentar la creación de productos y servicios financieros
              innovadores.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContent;
