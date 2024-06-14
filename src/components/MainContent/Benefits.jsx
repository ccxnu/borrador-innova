import { Box, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import ItemListaVariante from "../lib/ItemListaVariante";
import TitleBox from "../lib/TitleBox";

const Benefits = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box id="beneficios" pt={isMd ? "4rem" : "2rem"}>
      <Grid container justifyContent="left">
        <Grid item xs={9} md={6}>
          <TitleBox
            borderRadio="0px 10px 10px 0px"
            textoAlineado="right"
            title="Beneficios de Pertenecer al Clúster"
          />
        </Grid>
        <Grid container>
          <Grid item xs={12} md={6} p={isMd ? "2rem" : "2rem 2rem"}>
            <ItemListaVariante
              title="Acceso a Recursos y Conocimientos"
              descripcion="Las cooperativas afiliadas tendrán acceso a una amplia gama de recursos y conocimientos, incluyendo programas de capacitación, herramientas de gestión y asesoramiento experto en áreas clave como tecnología, procesos, marketing y finanzas."
            />
            <ItemListaVariante
              title="Red de Colaboración"
              descripcion="Formar parte del clúster permitirá a las cooperativas conectarse con otras organizaciones similares, facilitando el intercambio de ideas, la colaboración en proyectos conjuntos y el establecimiento de alianzas."
            />
            <ItemListaVariante
              title="Visibilidad y Promoción"
              descripcion="Ser parte del clúster aumentará la visibilidad de las cooperativas ante potenciales socios, clientes y financiadores, ayudando a fortalecer su marca y su posición en el mercado."
            />
            <ItemListaVariante
              title="Asesoramiento y Mentoring"
              descripcion="Se ofrecerá asesoramiento personalizado y mentoring a las cooperativas afiliadas, con el objetivo de apoyar su crecimiento y desarrollo a largo plazo."
            />
          </Grid>
          <Grid item xs={12} md={6} px={4}>
            <Box
              sx={{
                backgroundImage: "url(/static/Beneficios.png)",
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%",
                minHeight: "250px",
              }}
            ></Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Benefits;
