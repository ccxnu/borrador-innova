import React, { useState } from 'react';
import { Box, Grid, useTheme, useMediaQuery, Button, Dialog,} from "@mui/material";
import TitleBox from "../lib/TitleBox";
import ItemListaVariante from "../lib/ItemListaVariante";
import Information from '../Information/Information';

const Conditions = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const [openDialog, setOpenDialog] = useState(false); 

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

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

          <Grid item xs={12} md={4} p={4}
          sx={{
            ".MuiBox-root":{
              flexDirection:{
                xs:"row",
                md: "column",
              },
              
              alignItems:{
                xs:"flex-start",
                md: "center",
              }
            },
            ".MuiTypography-root":{
              textAlign:{
                xs:"left",
                md: "center",
              }
            }
          }}>
            <ItemListaVariante
              title="Tipo de Membresia"
              descripcion="La membresía es gratuita, pero las cooperativas pueden contribuir monetariamente para financiar proyectos conjuntos."
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid container sx={{ justifyContent: 'center', }}>
        <Button
          variant="contained"
          color='primary'
          onClick={handleOpenDialog}
          sx={{ fontSize: '24px', 
          color: theme.palette.fourth.main,
          borderRadius: "10px 10px 10px 10px",
         }}
        >
          <strong>Solicitar Información</strong>
        </Button>
      </Grid>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
          <Information /> 
      </Dialog>
    </Box>
  );
};

export default Conditions;
