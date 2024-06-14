import { Box, Typography, useTheme } from "@mui/material";

const ItemListaVariante = ({ title, descripcion }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        height: "auto",
        textAlign: "left",
      }}
      marginBottom="30px"
    >
      <img
        src="/static/Check.png"
        width="40px"
        height="40px"
        style={{ marginRight: "10px" }}
      />
      <Box>
        <Typography
          variant="body1"
          color={theme.palette.tenth.main}
          fontSize="20px"
          sx={{ fontWeight: "bold" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color={theme.palette.octh.main}
          fontSize="20px"
        >
          {descripcion}
        </Typography>
      </Box>
    </Box>
  );
};

export default ItemListaVariante;
