import { Box, Grid, useTheme, useMediaQuery } from "@mui/material";
import TitleBox from "../lib/TitleBox";
import Paragraph from "../lib/Paragraph";

const Home = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      id="inicio"
      p={isMd ? "3rem 0rem" : "2rem 1rem"}
      sx={{ boxShadow: "0px 6px 8px -3px rgba(0,0,0,0.1)" }}
    >
      <Grid container>
        <Grid item xs={12} md={8}>
          <Grid container>
            <Grid item xs={isMd ? 8 : 12}>
              <TitleBox
                borderRadio={isMd ? "0px 10px 10px 0px" : "10px"}
                textoAlineado={isMd ? "right" : "center"}
                title="Bienvenido a Clúster de Innovación Cooperativa"
              />
            </Grid>
            <Grid item xs={12}>
              <Paragraph contenido="El Clúster de Innovación Cooperativo en Ecuador está diseñado para fomentar el crecimiento, la innovación y la sostenibilidad de las cooperativas en el país. Este clúster ofrece un entorno en el que las cooperativas pueden colaborar, compartir conocimientos y recursos, y aprovechar oportunidades para impulsar el desarrollo económico y social." />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box
            sx={{
              backgroundImage: "url(/static/Logo2.png)",
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
    </Box>
  );
};

export default Home;
