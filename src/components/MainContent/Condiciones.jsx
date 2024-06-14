import { Box, Grid, useTheme, useMediaQuery } from "@mui/material";
import TitleBox from "../lib/TitleBox";
import ItemListaVariante from "../lib/ItemListaVariante";

const Condiciones = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box id="condiciones" pt={isMd ? "8rem" : "2rem"}>
      <Grid container>
        <Grid item md={12}>
          <TitleBox
            borderRadio="0px"
            textoAlineado="center"
            title="Condiciones de Afiliación"
          />
        </Grid>

        <Grid container justifyContent="center" pt={8}>
          <Grid item xs={12} md={4} px={4}>
            <ItemListaVariante
              title="Ser Una Cooperativa Registrada"
              descripcion="Para ser elegible para unirse al clúster, la organización debe estar legalmente constituida como una cooperativa en Ecuador."
            />

            <ItemListaVariante
              title="Participación Activa"
              descripcion="Se espera que las cooperativas afiliadas participen activamente en las actividades y eventos del clúster, contribuyendo con sus ideas, experiencias y recursos para beneficio de la comunidad en su conjunto."
            />
          </Grid>

          <Grid item xs={12} md={4} pb={4}>
            <Box
              sx={{
                backgroundImage: "url(/static/Condiciones.png)",
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%",
                minHeight: "250px",
              }}
            ></Box>
          </Grid>

          <Grid item xs={12} md={4} px={4}>
            <ItemListaVariante
              title="Compromiso con la Innovación y el Desarrollo"
              descripcion="Las cooperativas interesadas en unirse al clúster deben demostrar un compromiso genuino con la innovación, el desarrollo empresarial y la mejora continua de sus operaciones."
            />

            <ItemListaVariante
              title="Cumplimiento de Normas y Ética Empresarial"
              descripcion="Todas las cooperativas afiliadas deberán cumplir con las normas éticas y empresariales establecidas por el clúster, incluyendo el respeto a los derechos laborales, ambientales y sociales."
            />
          </Grid>

          <Grid item xs={12} md={4} p={4}>
            <ItemListaVariante
              title="Tipo de Membresia"
              descripcion="La membresía es gratuita, pero las cooperativas pueden contribuir monetariamente para financiar proyectos conjuntos."
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Condiciones;
