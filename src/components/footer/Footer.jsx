import { Typography, Box, Grid, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: "primary",
        padding: "20px",
        textAlign: "center",
        backgroundImage: `linear-gradient(to right, ${theme.palette.sixth.main}, ${theme.palette.septh.main})`
      }}
    >
      <Box>
        <Grid container justifyContent="center" >
          <Box>
            <Typography variant="body1" color={theme.palette.fifth.main} fontSize='25px'>
              <strong>2024 INNOVA COOP</strong>
            </Typography>
            <Box>
              <Typography variant="body2" color={theme.palette.fifth.main} >Nuestra Oficina: Calle Mexico y Curazao | Tefl: 07 2200 259 Ext:110</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color={theme.palette.fifth.main}>Email: innovacoop@outlook.com | Facebook: Innova Coop</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color={theme.palette.fifth.main}>Ecuador | Loja</Typography>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
