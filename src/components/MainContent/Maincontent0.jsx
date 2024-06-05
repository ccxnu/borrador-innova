import { Box, Typography, Grid, useTheme } from "@mui/material";

const MainContent0 = () => {
  const theme = useTheme();
  return (
    <Box marginTop='80px'>
      <Grid container spacing={6}>
        <Grid item container xs={12} md={6} justifyContent="left">
          <Box
            sx={{
              padding: 2,
              bgcolor: theme.palette.primary.main,
              textAlign: "right",
              borderRadius: 2,
              marginBottom: "20px",
              width: "88%",
              margin: "2 auto",
              borderTopLeftRadius: "0px",
              borderBottomLeftRadius: "0px",
            }}
          >
            <Typography
              variant="body2"
              fontSize="30px"
              color={theme.palette.fourth.main}
            >
              <strong>Misión</strong>
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: 2,
              width: 710,
              height: 230,
              textAlign: "justify",
              padding: 2,
            }}
          >
            <Typography variant="body2" color={theme.palette.octh.main} fontSize="20px">
            <img src="/static/Check.png" width="40px" height="40px" />
            Nuestra misión es impulsar la innovación y el crecimiento sostenible de las cooperativas en Ecuador, fortaleciendo su capacidad para enfrentar los desafíos del mercado y contribuir al bienestar de sus miembros y comunidades.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} container justifyContent="right">
          <Box
            sx={{
              padding: 2,
              bgcolor: theme.palette.primary.main,
              textAlign: "left",
              borderRadius: 2,
              marginBottom: "20px",
              width: "88%",
              margin: "2 auto",
              borderTopRightRadius: "0px",
              borderBottomRightRadius: "0px",
            }}
          >
            <Typography
              variant="body2"
              fontSize="30px"
              color={theme.palette.fourth.main}
            >
              <strong>Visión</strong>
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: 2,
              width: 720,
              height: 230,
              textAlign: "justify",
              padding: 2,
            }}
          >
            <Typography variant="body2" color={theme.palette.octh.main} fontSize="20px">
            <img src="/static/Check.png" width="40px" height="40px" />
            Queremos ser el principal motor de cambio e innovación para las cooperativas de ahorro y crédito en Ecuador, promoviendo una cultura de colaboración, aprendizaje continuo y excelencia empresarial.
            </Typography>
          </Box>
        </Grid>
        <Grid item container justifyContent="center" marginBottom="50px">
          <Box
            sx={{
              borderRadius: 2,
              bgcolor: theme.palette.primary.main,
              width: "120%",
              maxWidth: "1500px",
              padding: 1,
            }}
          >
            <Typography
              textAlign="center"
              variant="body2"
              fontSize="30px"
              color={theme.palette.fourth.main}
            >
              <strong>Políticas:</strong>
            </Typography>
          </Box>
        </Grid>
        <Grid container px={12}>
          <Grid
            item
            xs={12}
            md={4}
            container
            justifyContent="center"
            textAlign="center"
          >
            <Box
              sx={{
                maxWidth: 350,
                boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
                padding: 2,
              }}
            >
              <Grid item container justifyContent="center">
                <img
                  src="/static/Colaboracion.png"
                  width="90px"
                  height="90px"
                />
              </Grid>
              <Typography variant="body1" color={theme.palette.eleventh.main} fontSize="30px">
                <strong>Colaboración</strong>
              </Typography>
              <Typography variant="body2" fontSize="16px" color={theme.palette.nineth.main}>
              Las cooperativas deben comprometerse a colaborar activamente, compartiendo buenas prácticas y experiencias.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            container
            justifyContent="center"
            textAlign="center"
            paddingInlineStart="50px"
          >
            <Box
              sx={{
                maxWidth: 350,
                boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
                padding: 2,
              }}
            >
              <img src="/static/Transparencia.png" width="80px" height="80px" />
              <Typography variant="body2" color={theme.palette.eleventh.main} fontSize="30px">
                <strong>Transparencia</strong>
              </Typography>
              <Typography variant="body2" fontSize="16px" color={theme.palette.nineth.main}>
              La información y los avances deben ser transparentes para todos los miembros del clúster.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            container
            justifyContent="center"
            textAlign="center"
          >
            <Box
              sx={{
                maxWidth: 350,
                boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
                padding: 2,
              }}
            >
              <img src="/static/Inclusion.png" width="80px" height="80px" />
              <Typography variant="body2" color={theme.palette.eleventh.main} fontSize="30px">
                <strong>Inclusión</strong>
              </Typography>
              <Typography variant="body2" fontSize="16px" color={theme.palette.nineth.main}>
              Todas las cooperativas, independientemente de su tamaño o ubicación, pueden participar.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContent0;
