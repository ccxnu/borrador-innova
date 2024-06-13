import { Box, Typography, useTheme } from "@mui/material";

const OpcionesLista = ({ contenido }) => {
  const theme = useTheme();

  return (
    <Box py="1rem">
      <Typography
        color={theme.palette.octh.main}
        fontSize="20px"
        display="flex"
      >
        <img
          src="/static/Check.png"
          width="40px"
          height="40px"
          style={{ marginRight: "10px" }}
        />
        {contenido}
      </Typography>
    </Box>
  );
};

export default OpcionesLista;
