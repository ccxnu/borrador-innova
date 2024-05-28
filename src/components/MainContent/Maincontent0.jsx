import { Box, Typography, Grid, useTheme } from "@mui/material";

const MainContent0 = () => {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={6}>
        <Grid
          item
          container
          xs={12}
          md={6}
          justifyContent="center"
          sx={{ marginBottom: "200px" }}
        >
          <Box
            sx={{
              borderRadius: 2,
              width: 350,
              height: 230,
              textAlign: "justify",
              bgcolor: theme.palette.sixth.main,
              padding: 2,
            }}
          >
            <Typography variant="body2" color="third" fontSize="20px">
              <strong>Misión</strong>
            </Typography>
            <Typography variant="body2" color="third" fontSize="20px">
              Nuestra misión es impulsar la innovación y el crecimiento
              sostenible de las cooperativas en Ecuador, fortaleciendo su
              capacidad para enfrentar los desafíos del mercado y contribuir al
              bienestar de sus miembros y comunidades.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} container justifyContent="center">
          <Box
            sx={{
              borderRadius: 1,
              width: 350,
              height: 230,
              textAlign: "justify",
              bgcolor: theme.palette.sixth.main,
              padding: 2,
            }}
          >
            <Typography variant="body2" color="third" fontSize="20px">
              <strong>Visión</strong>
            </Typography>
            <Typography variant="body2" color="third" fontSize="20px">
              Queremos ser el principal motor de cambio e innovación para las
              cooperativas de ahorro y crédito en Ecuador, promoviendo una
              cultura de colaboración, aprendizaje continuo y excelencia
              empresarial.
            </Typography>
          </Box>
        </Grid>
        <Grid item container justifyContent="center" marginBottom="50px">
          <Box
            sx={{
              borderRadius: 2,
              bgcolor: theme.palette.primary.main,
              textAlign: "justify",
              width: "100%",
              maxWidth: "1250px",
              padding: 1,
            }}
          >
            <Typography
              textAlign="center"
              variant="body2"
              fontSize="30px"
              color="secondary"
            >
              <strong>Políticas:</strong>
            </Typography>
          </Box>
        </Grid>
        <Grid container>
          <Grid
            item
            xs={12}
            md={4}
            container
            justifyContent="center"
            textAlign="center"
            paddingInlineStart="100px"
          >
            <Box
              sx={{
                maxWidth: 350,
                padding: 2,
                boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
                paddingInline: "20px",
              }}
            >
              <Grid item container justifyContent="center">
                <img
                  src="/static/Colaboracion.png"
                  width="90px"
                  height="90px"
                />
              </Grid>
              <Typography variant="body2" fontSize="20px">
                <strong>Colaboración</strong>
              </Typography>
              <Typography variant="body2" fontSize="16px">
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
                maxWidth: 350,
                boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
                padding: 2,
              }}
            >
              <img src="/static/Transparencia.png" width="80px" height="80px" />
              <Typography variant="body2" fontSize="20px">
                <strong>Transparencia</strong>
              </Typography>
              <Typography variant="body2" fontSize="16px">
                La información y los avances deben ser transparentes para todos
                los miembros del cluster.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={3.5}
            container
            justifyContent="center"
            textAlign="center"
          >
            <Box
              sx={{
                paddingInlineEnd: "300px",
                maxWidth: 350,
                boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
                padding: 2,
              }}
            >
              <img src="/static/Inclusion.png" width="80px" height="80px" />
              <Typography variant="body2" color="third" fontSize="20px">
                <strong>Inclusión</strong>
              </Typography>
              <Typography variant="body2" color="third" fontSize="16px">
                Todas las cooperativas, independientemente de su tamaño o
                ubicación, pueden participar activamente.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContent0;
