import { Box, Typography, useTheme } from "@mui/material";

const PoliciesCard = ({ title, url, contenido }) => {
  const theme = useTheme();
  return (
    <Box
      p={4}
      justifyContent="center"
      textAlign="center"
      minWidth="300px"
      minHeight="360px"
      sx={{
        boxShadow: "5px 5px 12px -4px rgba(0,0,0,0.1)",
      }}
    >
      <img src={url} width="80px" />
      <Typography
        color={theme.palette.eleventh.main}
        fontSize="32px"
        sx={{ fontWeight: "bold" }}
        pt={1}
      >
        {title}
      </Typography>
      <Typography fontSize="20px" color={theme.palette.nineth.main} pt={1}>
        {contenido}
      </Typography>
    </Box>
  );
};

export default PoliciesCard;
