import { Box, Grid, useTheme, useMediaQuery } from "@mui/material";
import TitleBox from "../lib/TitleBox";
import OpcionesLista from "../lib/OpcionesLista";

const Objetivos = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box id="objetivos" pt={isMd ? "8rem" : "2rem"}>
      <Grid container justifyContent="right">
        <Grid item xs={9} md={6}>
          <TitleBox
            borderRadio="10px 0px 0px 10px"
            textoAlineado="left"
            title="Nuestros Objetivos"
          />
        </Grid>
        <Grid container>
          <Grid item xs={12} md={6} p={4}>
            <Box
              sx={{
                backgroundImage: "url(/static/Objetivos.png)",
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%",
                minHeight: "250px",
              }}
            ></Box>
          </Grid>

          <Grid item xs={12} md={6} p={isMd ? "2rem" : "0rem 2rem"}>
            <OpcionesLista contenido="Fomentar la innovación y la transformación en las cooperativas de ahorro y crédito, mejorando su eficiencia operativa y su capacidad para servir a sus miembros." />

            <OpcionesLista contenido="Crear un ecosistema colaborativo donde las cooperativas compartan conocimientos, recursos y soluciones tecnológicas." />

            <OpcionesLista contenido="Facilitar la adopción de tecnologías emergentes, como la inteligencia artificial, la ciberseguridad y la automatización de procesos." />

            <OpcionesLista contenido="Capacitar a los miembros de las cooperativas en habilidades digitales y de gestión." />

            <OpcionesLista contenido="Fomentar la creación de productos y servicios financieros innovadores." />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Objetivos;
