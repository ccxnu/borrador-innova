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
            sx={{ fontFamily: "Inter" }}
          >
            Terms & Conditions.
          </Typography>
          <Typography
            variant="body2"
            color="#17202A"
            letterSpacing="50%"
            sx={{ fontFamily: "Inter" }}
          >
            PRIVACY POLICY
          </Typography>
          <Typography
            variant="body2"
            color="#17202A"
            sx={{ fontFamily: "FJALA-ONE" }}
          >
            CONTACT US
          </Typography>
          <Typography
            variant="body2"
            color="#17202A"
            sx={{ fontFamily: "fjala-one" }}
          >
            POWERED BY INNOVA COOP
          </Typography>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
