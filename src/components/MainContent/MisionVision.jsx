import { Box, Grid, useTheme, useMediaQuery } from "@mui/material";
import TitleBox from "../lib/TitleBox";
import OpcionesLista from "../lib/OpcionesLista";

const MisionVision = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box id="mision-vision" pt={isMd ? 8 : 4}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Grid container>
            <Grid item xs={7} md={10}>
              <TitleBox
                borderRadio="0px 10px 10px 0px"
                textoAlineado="right"
                title="Misión"
              />
            </Grid>
            <Grid item xs={12} md={10} p={4}>
              <OpcionesLista
                contenido="
                  Nuestra misión es impulsar la innovación y el crecimiento
                  sostenible de las cooperativas en Ecuador, fortaleciendo su
                  capacidad para enfrentar los desafíos del mercado y contribuir
                  al bienestar de sus miembros y comunidades."
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container justifyContent="right">
            <Grid item xs={7} md={10}>
              <TitleBox
                borderRadio="10px 0px 0px 10px"
                textoAlineado="left"
                title="Visión"
              />
            </Grid>
            <Grid item xs={12} md={10} p={4}>
              <OpcionesLista
                contenido="Queremos ser el principal motor de cambio e innovación para
                  las cooperativas de ahorro y crédito en Ecuador, promoviendo
                  una cultura de colaboración, aprendizaje continuo y excelencia
                  empresarial."
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MisionVision;
