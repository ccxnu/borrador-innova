import { Box, Typography, Grid, useTheme } from "@mui/material";

const MainContent0 = () => {
  const theme = useTheme();
  return (
    <Box marginTop="80px">
      <Grid container spacing={6}>
        <Grid item xs={12} marginTop="100px" id="mision-vision">
          <Grid
            container
            justifyContent={{ xs: "center", md: "space-between" }}
            spacing={2}
          >
            <Grid item xs={8} md={5}>
              <Box
                sx={{
                  padding: 1,
                  bgcolor: theme.palette.primary.main,
                  height: "auto",
                  textAlign: "left",
                }}
                marginBottom="30px"
              >
                <Typography
                  variant="body2"
                  fontSize="30px"
                  textAlign="right"
                  color={theme.palette.fourth.main}
                >
                  <strong>Misión</strong>
                </Typography>
              </Box>
              <Box
                sx={{  height: "auto", textAlign: "left" }}
                marginBottom="30px"
              >
                <Typography
                  variant="body2"
                  color={theme.palette.octh.main}
                  fontSize="20px"
                  display='flex'
                >
                  <img src="/static/Check.png" width="40px" height="40px" />
                  Nuestra misión es impulsar la innovación y el crecimiento
                  sostenible de las cooperativas en Ecuador, fortaleciendo su
                  capacidad para enfrentar los desafíos del mercado y contribuir
                  al bienestar de sus miembros y comunidades.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={8} md={5}>
              <Box
                sx={{
                  padding: 1,
                  bgcolor: theme.palette.primary.main,
                  height: "auto",
                  textAlign: "left",
                }}
                marginBottom="30px"
              >
                <Typography
                  variant="body2"
                  color={theme.palette.fourth.main}
                  fontSize="30px"
                >
                  <strong>Visión</strong>
                </Typography>
              </Box>
              <Box
                sx={{ height: "auto", textAlign: "left" }}
                marginBottom="30px"
              >
                <Typography
                  variant="body2"
                  color={theme.palette.octh.main}
                  fontSize="20px"
                  display='flex'
                >
                  <img src="/static/Check.png" width="40px" height="40px" />
                  Queremos ser el principal motor de cambio e innovación para
                  las cooperativas de ahorro y crédito en Ecuador, promoviendo
                  una cultura de colaboración, aprendizaje continuo y excelencia
                  empresarial.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container justifyContent="center" marginTop='100px' marginBottom="50px" id="politicas">
          <Box
            sx={{
              bgcolor: theme.palette.primary.main,
              padding: 1,
            }}
          >
            <Typography
              textAlign="center"
              variant="body2"
              fontSize="30px"
              color={theme.palette.fourth.main}
            >
              <strong>Políticas</strong>
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
                boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
                
              }}
            >
              <Grid item container justifyContent="center">
                <img
                  src="/static/Colaboracion.png"
                  width="90px"
                  height="90px"
                />
              </Grid>
              <Typography
                variant="body1"
                color={theme.palette.eleventh.main}
                fontSize="30px"
              >
                <strong>Colaboración</strong>
              </Typography>
              <Typography
                variant="body2"
                fontSize="16px"
                color={theme.palette.nineth.main}
              >
                Las cooperativas deben comprometerse a colaborar activamente,
                compartiendo buenas prácticas y experiencias.
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
                boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
                
              }}
            >
              <img src="/static/Transparencia.png" width="80px" height="80px" />
              <Typography
                variant="body2"
                color={theme.palette.eleventh.main}
                fontSize="30px"
              >
                <strong>Transparencia</strong>
              </Typography>
              <Typography
                variant="body2"
                fontSize="16px"
                color={theme.palette.nineth.main}
              >
                La información y los avances deben ser transparentes para todos
                los miembros del clúster.
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
                boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
                
              }}
            >
              <img src="/static/Inclusion.png" width="80px" height="80px" />
              <Typography
                variant="body2"
                color={theme.palette.eleventh.main}
                fontSize="30px"
              >
                <strong>Inclusión</strong>
              </Typography>
              <Typography
                variant="body2"
                fontSize="16px"
                color={theme.palette.nineth.main}
              >
                Todas las cooperativas, independientemente de su tamaño o
                ubicación, pueden participar.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContent0;
