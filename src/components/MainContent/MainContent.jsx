import { Box, Typography, Grid } from "@mui/material";

const MainContent = () => {
  return (
    <Box sx={{ backgroundColor: " #ffffff  ", padding: "200px" }}>
      <img src='/static/Logo.png' width='250px' height='200px'/>
        <Grid container justifyContent="center" color=" #000000">
          <Typography variant="h2" gutterBottom>
            Bienvenido a INNOVA COOOP
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "60px" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            quaerat ab nesciunt numquam. Illum, repellat. Itaque omnis sequi rem
            eaque excepturi est odio ratione sapiente iure atque eos, provident
            fugiat.
          </Typography>
        </Grid>
        <Grid container spacing={9}>
          <Grid item xs={12} md={6}>
            <Box sx={{borderRadius:1,  width: 350, height: 150,bgcolor:' #8102b5 ', }}>
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
            <Box sx={{borderRadius:1,  width: 350, height: 150,bgcolor:'#7aae5b', }}>
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
            <Box sx={{borderRadius:1,  width: 350, height: 150,bgcolor:'#cb8f05', }}>
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
            <Box sx={{borderRadius:1,  width: 350, height: 150,bgcolor:'#0021c8', }}>
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
  );
};

export default MainContent;
