import { Box, Typography, Grid, useTheme } from "@mui/material";

const MainContent0 = () => {
  const theme = useTheme();
  return (
    <Box marginTop="10px">
      <Grid container spacing={6}>
        <Grid item xs={12} marginTop="100px" id="mision-vision">
          <Grid
            container
            justifyContent={{ xs: "center", md: "space-between" }}
            spacing={2}
          >
            <Grid item xs={11} md={5}>
              <Box
                sx={{
                  padding: 1,
                  bgcolor: theme.palette.primary.main,
                  height: "auto",
                  textAlign: "left",
                  borderRadius:'0px 10px 10px 0px'
                }}
                marginBottom="40px"
              >
                <Typography
                  variant="body2"
                  fontSize="32px"
                  textAlign="right"
                  color={theme.palette.fourth.main}
                >
                  <strong>Misión</strong>
                </Typography>
              </Box>
              <Box
                sx={{ height: "auto", textAlign: "left" }}
                marginInlineStart='50px'
                marginBottom="30px"
              >
                <Typography
                  variant="body2"
                  color={theme.palette.octh.main}
                  fontSize="20px"
                  display='flex'
                >
                  <img src="/static/Check.png" width="40px" height="40px" style={{ marginRight: "10px" }} />
                  Nuestra misión es impulsar la innovación y el crecimiento
                  sostenible de las cooperativas en Ecuador, fortaleciendo su
                  capacidad para enfrentar los desafíos del mercado y contribuir
                  al bienestar de sus miembros y comunidades.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={11} md={5}>
              <Box
                sx={{
                  padding: 1,
                  bgcolor: theme.palette.primary.main,
                  height: "auto",
                  textAlign: "left",
                  borderRadius:'10px 0px 0px 10px'
                }}
                marginBottom="40px"
              >
                <Typography
                  variant="body2"
                  color={theme.palette.fourth.main}
                  fontSize="32px"
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
                  <img src="/static/Check.png" width="40px" height="40px" style={{ marginRight: "10px" }} />
                  Queremos ser el principal motor de cambio e innovación para
                  las cooperativas de ahorro y crédito en Ecuador, promoviendo
                  una cultura de colaboración, aprendizaje continuo y excelencia
                  empresarial.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container justifyContent="center" marginTop='50px' marginBottom="40px" id="politicas" marginInline='50px'>
          <Box
            sx={{
              bgcolor: theme.palette.primary.main,
              padding: 1,
              flex: 1,
              borderRadius:'10px 10px 10px 10px'
            }}
          >
            <Typography
              textAlign="center"
              variant="body2"
              fontSize="32px"
              color={theme.palette.fourth.main}
            >
              <strong>Políticas</strong>
            </Typography>
          </Box>
        </Grid>
        <Grid container px={12} spacing={7} justifyContent="center">
          <Grid
            item
            xs={12}
            md={3}
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
                <strong>Colaboración</strong>
              </Typography>
              <Typography
                variant="body2"
                fontSize="16px"
                color={theme.palette.nineth.main}
              >
                Las cooperativas deben comprometerse a colaborar activamente, compartiendo buenas prácticas y experiencias.

              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
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
            md={3}
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