import { Typography, Box, Grid } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#D7DBDD",
        padding: "20px",
        textAlign: "center",
      }}>
      <Box>
        <Grid container justifyContent="space-between">
          <Typography variant="body2" color="#17202A">
            ©INNOVA COOP, All Right Reserved.
          </Typography>
          <Typography variant="body2" color="#17202A" letterSpacing="50%">
            Designed by INNOVA COOP 2024
          </Typography>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
