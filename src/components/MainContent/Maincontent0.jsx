import { Box, Typography, Grid } from "@mui/material";
const MainContent0 = () => {
  return (
    <Box
      sx={{
        fontFamily: "Inter",
        padding: "100px",
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ marginBottom: "150px" }}
      >
        <Grid item xs={4}>
          <img src="/static/ejemplo1.png" width="100%" alt="Imagen 1" />
        </Grid>

        <Grid item xs={4}>
          <img src="/static/ejemplo2.png" width="100%" alt="Imagen 2" />
        </Grid>

        <Grid item xs={4}>
          <img src="/static/ejemplo3.png" width="100%" alt="Imagen 3" />
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        <Grid
          item
          xs={12}
          md={6}
          container
          justifyContent="center"
          sx={{ marginBottom: "300px" }}
        >
          <Box
            sx={{
              borderRadius: 2,
              width: 350,
              height: 110,
              bgcolor: "",
            }}
          >
            <Typography variant="body2" color="third" fontSize="20px">
              Misión
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
              height: 150,
              bgcolor: "",
            }}
          >
            <Typography variant="body2" color="third" fontSize="20px">
              Visión
            </Typography>
            <Typography variant="body2" color="third" fontSize="20px">
              Queremos ser el principal motor de cambio e innovación para las
              cooperativas de ahorro y crédito en Ecuador, promoviendo una
              cultura de colaboración, aprendizaje continuo y excelencia
              empresarial.
            </Typography>
          </Box>
        </Grid>
        <Grid container justifyContent="center">
          <Typography
            textAlign="center"
            variant="body1"
            fontSize="50px"
            marginBottom="50px"
            color="secondary"
          >
            <strong>Politicas:</strong>
          </Typography>
        </Grid>
        <Grid container spacing={6}>
            
          <Grid item container xs={12} md={6} justifyContent='flex-end' >
            <img src="/static/politicas.jpg" width="500px" height="500px" />
          </Grid>
          <Grid item xs={12} md={6} container direction="column" spacing={2}>
            <Grid item>
              <Box
                sx={{
                  borderRadius: 2,
                  width: 350,
                  height: 150,
                  bgcolor: "#388191",
                }}
              >
                <Typography variant="body2" color="third" fontSize="20px">
                  Colaboración
                </Typography>
                <Typography variant="body2" color="third" fontSize="20px">
                  Las cooperativas deben comprometerse a colaborar activamente,
                  compartiendo buenas prácticas y experiencias.
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  borderRadius: 2,
                  width: 350,
                  height: 125,
                  bgcolor: "#388191",
                }}
              >
                <Typography variant="body2" color="third" fontSize="20px">
                  Transparencia
                </Typography>
                <Typography variant="body2" color="third" fontSize="20px">
                  La información y los avances deben ser transparentes para
                  todos los miembros del cluster.
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  borderRadius: 2,
                  width: 350,
                  height: 125,
                  bgcolor: "#388191",
                }}
              >
                <Typography variant="body2" color="third" fontSize="20px">
                  Inclusión
                </Typography>
                <Typography variant="body2" color="third" fontSize="20px">
                  Todas las cooperativas, independientemente de su tamaño o
                  ubicación, pueden participar.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContent0;
