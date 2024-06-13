import { Typography, Box, Grid, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  const currentYear=new Date().getFullYear() 
  return (
    <Box
      sx={{
        marginTop: "100px",
        backgroundColor: "primary",
        padding: "20px",
        textAlign: "center",
        backgroundImage: `linear-gradient(to right, ${theme.palette.sixth.main}, ${theme.palette.septh.main})`
      }}
    >
      <Box>
        <Grid container justifyContent="center" >
          <Box>
            <Typography variant="body1" color={theme.palette.fifth.main} fontSize='32px'>
              <strong>{currentYear} INNOVA COOP</strong>
            </Typography>
            <Box>
              <Typography variant="body2" color={theme.palette.fifth.main}fontSize='20px'>Ecuador | Loja</Typography>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
