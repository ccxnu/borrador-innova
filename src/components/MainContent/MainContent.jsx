import { Box, Typography, Grid } from "@mui/material";

const MainContent = () => {
  return (
    <Box sx={{ backgroundColor: "#5DADE2 ", padding: "200px" }}>
      <Box sx={{ backgroundColor: "#2E4053", padding: "60px" }}>
        <Grid container justifyContent="center">
          <Typography variant="h4" gutterBottom>
            Bienvenido a Innova
          </Typography>
        </Grid>
        <Typography variant="body1" sx={{ marginBottom: "60px" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          quaerat ab nesciunt numquam. Illum, repellat. Itaque omnis sequi rem
          eaque excepturi est odio ratione sapiente iure atque eos, provident
          fugiat.
        </Typography>
        <Grid container spacing={9}>
          <Grid item xs={12} md={6}>
            <Box backgroundColor="#8E44AD">
              <Typography variant="h6">Sección 1</Typography>
              <Typography variant="body2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laborum numquam, voluptatibus et blanditiis velit delectus
                maiores obcaecati. Minus voluptate natus, consequatur temporibus
                dolor recusandae, aliquam in ex, eveniet vero deserunt!
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box backgroundColor="#DC7633">
              <Typography variant="h6">Sección 2</Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                totam magnam libero soluta reiciendis iste debitis. Eligendi
                itaque harum maxime reiciendis illum aspernatur. Voluptates illo
                vel aut. Debitis, harum porro.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box backgroundColor="#28B463">
              <Typography variant="h6">Sección 3</Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                quam earum cum. Assumenda non amet ipsam, nulla ab magni porro
                incidunt rerum alias magnam et vero beatae sequi. Quibusdam,
                harum.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box backgroundColor="#922B21">
              <Typography variant="h6">Sección 4</Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                quam earum cum. Assumenda non amet ipsam, nulla ab magni porro
                incidunt rerum alias magnam et vero beatae sequi. Quibusdam,
                harum.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MainContent;
