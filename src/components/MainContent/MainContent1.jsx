import { Box, Typography, Grid, useTheme } from "@mui/material";

const MainContent1 = () => {
  const theme = useTheme();
  return (
    <Box >
      <Grid container spacing={6} >
      <Grid container justifyContent="center" >
          <Typography
            textAlign="center"
            variant="body2"
            fontSize="50px"
            marginBottom="50px"
            color="secondary"
            
          >
            <strong>Beneficios de pertenecer a</strong>
          </Typography>
        </Grid>
        <Grid item container xs={12} md={6} justifyContent="center"   >
          <Box
            sx={{
              borderRadius: 2,
              width: 350,
              height: 230,
              textAlign: 'justify',
              bgcolor: theme.palette.sixth.main,
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
              textAlign: 'justify',
              bgcolor: theme.palette.sixth.main,
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
        <Grid item container xs={12} md={6} justifyContent="center" >
          <Box
            sx={{
              borderRadius: 2,
              width: 350,
              height: 230,
              textAlign: 'justify',
              bgcolor: theme.palette.sixth.main,
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
              textAlign: 'justify',
              bgcolor: theme.palette.sixth.main,
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
        
        <Grid item xs={12} md={6} container justifyContent="center">
          <Box
            sx={{
              borderRadius: 1,
              width: 350,
              height: 230,
              textAlign: 'justify',
              bgcolor: theme.palette.sixth.main,
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
        <Grid item xs={12} md={6} container justifyContent="center" sx={{ marginBottom: "300px" }}>
          <Box
            sx={{
              borderRadius: 1,
              width: 350,
              height: 230,
              textAlign: 'justify',
              bgcolor: theme.palette.sixth.main,
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
        
        <Grid container justifyContent="center" >
          <Typography
            textAlign="center"
            variant="body2"
            fontSize="50px"
            marginBottom="50px"
            color="secondary"
          >
            <strong>Servicios:</strong>
          </Typography>
        </Grid>
        <Grid container spacing={12} >
          <Grid item container xs={12} md={6} justifyContent="flex-end"  >
            <img src="/static/servicios.jpg" width="500px" height="500px" />
          </Grid>
          <Grid item xs={12} md={6} container justifyContent='flex-start' >
            <Grid item container justifyContent='center'>
              <Box
                sx={{
                  borderRadius: 2,
                  width: 350,
                  height: 150,
                  bgcolor: theme.palette.sixth.main,
                }}
              >
                <Typography variant="body2" fontSize="20px">
                  <strong>Colaboración</strong>
                </Typography>
                <Typography variant="body2" fontSize="20px">
                  Las cooperativas deben comprometerse a colaborar activamente,
                  compartiendo buenas prácticas y experiencias.
                </Typography>
              </Box>
            </Grid>
            <Grid item container justifyContent='center'>
              <Box
                sx={{
                  borderRadius: 2,
                  width: 350,
                  height: 125,
                  bgcolor: theme.palette.sixth.main,
                }}
              >
                <Typography variant="body2" fontSize="20px">
                  <strong>Transparencia</strong>
                </Typography>
                <Typography variant="body2" fontSize="20px">
                  La información y los avances deben ser transparentes para
                  todos los miembros del cluster.
                </Typography>
              </Box>
            </Grid>
            <Grid item container justifyContent='center'>
              <Box
                sx={{
                  borderRadius: 2,
                  width: 350,
                  height: 125,
                  bgcolor: theme.palette.sixth.main,
                }}
              >
                <Typography variant="body2" color="third" fontSize="20px">
                  <strong>Inclusión</strong>
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

export default MainContent1;
