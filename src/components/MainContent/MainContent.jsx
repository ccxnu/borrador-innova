import { Box, Typography, Grid } from '@mui/material';

const MainContent = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Bienvenido a Innova
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        Esto es una aplicación de ejemplo con React, Vite y MUI.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Sección 1</Typography>
          <Typography variant="body2">
            Descripción de la sección 1.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Sección 2</Typography>
          <Typography variant="body2">
            Descripción de la sección 2.
          </Typography>
        </Grid>
      </Grid>

      {/* Agrega más contenido según lo necesites */}
    </Box>
  );
};

export default MainContent;
