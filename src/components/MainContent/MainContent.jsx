import { Box, Typography, Grid } from "@mui/material";

const MainContent = () => {
  return (
    <Box
      sx={{
        fontFamily: "Inter",
        backgroundColor: " #ffffff  ",
        padding: "150px",
      }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <img src="/static/Logo2.png" width="350px" height="350px" />
      </Grid>
      <Grid container justifyContent="center" color=" #000000">
        <Typography variant="h2" sx={{ fontFamily: "Inter" }} gutterBottom>
          Bienvenido a INNOVA COOOP
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontFamily: "Inter", marginBottom: "60px" }}
        >
          El Cluster de Innovación Cooperativo en Ecuador está diseñado para
          fomentar el crecimiento, la innovación y la sostenibilidad de las
          cooperativas en el país. Este cluster ofrece un entorno en el que las
          cooperativas pueden colaborar, compartir conocimientos y recursos, y
          aprovechar oportunidades para impulsar el desarrollo económico y
          social.
        </Typography>
      </Grid>
      <Grid container spacing={9}>
        <Grid item xs={12} md={6} container justifyContent="center" >
          <Box
            sx={{
              
              borderRadius: 1,
              width: 350,
              height: 150,
              bgcolor: " #8102b5 ",
            }}
          >
            <Typography variant="h6" sx={{ fontFamily: "Inter" }}>
              Sección 1
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "Inter" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
              numquam, voluptatibus et blanditiis velit delectus maiores
              obcaecati. Minus voluptate natus, consequatur temporibus dolor
              recusandae, aliquam in ex, eveniet vero deserunt!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} container justifyContent="center">
          <Box
            sx={{
              borderRadius: 1,
              width: 350,
              height: 150,
              bgcolor: "#7aae5b",
            }}
          >
            <Typography variant="h6" sx={{ fontFamily: "Inter" }}>
              Sección 2
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "Inter" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              totam magnam libero soluta reiciendis iste debitis. Eligendi
              itaque harum maxime reiciendis illum aspernatur. Voluptates illo
              vel aut. Debitis, harum porro.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} container justifyContent="center" >
          <Box
            sx={{
              borderRadius: 1,
              width: 350,
              height: 150,
              bgcolor: "#cb8f05",
            }}
          >
            <Typography variant="h6" sx={{ fontFamily: "Inter" }}>
              Sección 3
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "Inter" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quam earum cum. Assumenda non amet ipsam, nulla ab magni porro
              incidunt rerum alias magnam et vero beatae sequi. Quibusdam,
              harum.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} container justifyContent="center">
          <Box
            sx={{
              borderRadius: 1,
              width: 350,
              height: 150,
              bgcolor: "#0021c8",
            }}
          >
            <Typography variant="h6" sx={{ fontFamily: "Inter" }}>
              Sección 4
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "Inter" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quam earum cum. Assumenda non amet ipsam, nulla ab magni porro
              incidunt rerum alias magnam et vero beatae sequi. Quibusdam,
              harum.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContent;
