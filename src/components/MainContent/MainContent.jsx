import { Box, Typography, Grid } from "@mui/material";
import '@fontsource-variable/aleo';
const MainContent = () => {
  return (
    <Box 
      sx={{
        fontFamily: "Inter",
        backgroundColor: " #ffffff  ",
        padding: "100px",
      }}
    >
      <Grid
        container
        direction="row"
        alignItems="right"
        justifyContent="right"
      >
        <img src="/static/Logo2.png" width="400px" height="400px" />
      </Grid>
      <Grid container justifyContent="left">
        <Typography variant="h2" fontWeight='700' color='primary' sx={{ fontFamily: "Aleo Variable",}} gutterBottom>
          BIENVENIDO
        </Typography>
      </Grid>
      <Grid container text-align='initial' color="#0285f1" xs={12} md={6}>
        <Typography
          variant="body1"
          sx={{ fontFamily: "lexend", marginBottom: "50px" }}
        >
          El Cluster de Innovación Cooperativo en Ecuador está diseñado para
          fomentar el crecimiento, la innovación y la sostenibilidad de las
          cooperativas en el país. Este cluster ofrece un entorno en el que las
          cooperativas pueden colaborar, compartir conocimientos y recursos, y
          aprovechar oportunidades para impulsar el desarrollo económico y
          social.
        </Typography>
      </Grid>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6} container justifyContent="center">
          <Box
            sx={{
              borderRadius: 2,
              width: 350,
              height: 110,
              bgcolor: " #ffff ",
            }}
          >
            <Typography variant="h4" color=' #000000 ' fontSize='33px' text=''  sx={{ fontFamily: "Aleo Variable"}}>
            Algunas razones por las que nuestros clientes nos prefieren
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "Aleo Variable" }}>
              Fomentar la innovación y la transformación en las cooperativas de
              ahorro y crédito, mejorando su eficiencia operativa y su capacidad
              para servir a sus miembros.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} container justifyContent="center">
          <Box
            sx={{
              borderRadius: 1,
              width: 350,
              height: 150,
              bgcolor: "#7aae5b",
            }}
          >
            <Typography variant="h6" sx={{ fontFamily: "Aleo Variable" }}>
              Misión
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "Aleo Variable" }}>
        ◦ Crear un ecosistema colaborativo donde las cooperativas compartan conocimientos, recursos y soluciones tecnológicas.
        ◦ Facilitar la adopción de tecnologías emergentes, como la inteligencia artificial, la ciberseguridad y la automatización de procesos.
        ◦ Capacitar a los miembros de las cooperativas en habilidades digitales y de gestión.
        ◦ Fomentar la creación de productos y servicios financieros innovadores.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} container justifyContent="center">
          <Box
            sx={{
              borderRadius: 1,
              width: 350,
              height: 150,
              bgcolor: "#cb8f05",
            }}
          >
            <Typography variant="h6" sx={{ fontFamily: "Aleo Variable" }}>
              Visión
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "Aleo Variable" }}>
              Queremos ser el principal motor de cambio e innovación para las
              cooperativas de ahorro y crédito en Ecuador, promoviendo una
              cultura de colaboración, aprendizaje continuo y excelencia
              empresarial.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} container justifyContent="center">
          <Box
            sx={{
              borderRadius: 1,
              width: 350,
              height: 150,
              bgcolor: "#0021c8",
            }}
          >
            <Typography variant="h6" sx={{ fontFamily: "Aleo Variable" }}>
              Sección 4
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "Aleo Variable" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quam earum cum. Assumenda non amet ipsam, nulla ab magni porro
              incidunt rerum alias magnam et vero beatae sequi. Quibusdam,
              harum.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContent;
