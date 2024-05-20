import { Typography, Box, Grid } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "fifth",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <Box>
        <Grid container justifyContent="space-between">
          <Typography
            variant="body2"
            color="fifth"
            
          >
            Terms & Conditions.
          </Typography>
          <Typography
            variant="body2"
            color="fifth"
            letterSpacing="50%"
            
          >
            PRIVACY POLICY
          </Typography>
          <Typography
            variant="body2"
            color="fifth"
            
          >
            CONTACT US
          </Typography>
          <Typography
            variant="body2"
            color="#fith"
            
          >
            POWERED BY INNOVA COOP
          </Typography>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
