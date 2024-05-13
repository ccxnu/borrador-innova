import { Typography, Box, Grid } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#D7DBDD",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <Box>
        <Grid container justifyContent="space-between">
          <Typography
            variant="body2"
            color="#17202A"
            
          >
            Terms & Conditions.
          </Typography>
          <Typography
            variant="body2"
            color="#17202A"
            letterSpacing="50%"
            
          >
            PRIVACY POLICY
          </Typography>
          <Typography
            variant="body2"
            color="#17202A"
            
          >
            CONTACT US
          </Typography>
          <Typography
            variant="body2"
            color="#17202A"
            
          >
            POWERED BY INNOVA COOP
          </Typography>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
