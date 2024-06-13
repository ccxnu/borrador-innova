import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import PoliciesCard from "../lib/PoliciesCard";
import TitleBox from "../lib/TitleBox";

const Policies = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box id="politicas" p={isMd ? "8rem 0rem" : "2rem 2rem"}>
      <Grid container justifyContent="center">
        <Grid item xs={10} md={10}>
          <TitleBox
            borderRadio="10px "
            textoAlineado="center"
            title="Políticas"
          />
        </Grid>
        <Grid container justifyContent="center" gap={8} pt={8}>
          <Grid item xs={12} md={4} lg={3}>
            <PoliciesCard
              title="Colaboración"
              url="/static/Colaboracion.png"
              contenido="Las cooperativas deben comprometerse a colaborar activamente, compartiendo buenas prácticas y experiencias."
            />
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <PoliciesCard
              title="Transparencia"
              url="/static/Transparencia.png"
              contenido="La información y los avances deben ser transparentes para todos los miembros del clúster."
            />
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <PoliciesCard
              title="Inclusion"
              url="/static/Inclusion.png"
              contenido="Todas las cooperativas, independientemente de su tamaño o ubicación, pueden participar."
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Policies;
