import { Box, Typography, useTheme } from "@mui/material";

const TitleBox = ({ title, borderRadio, textoAlineado }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: theme.palette.primary.main,
        borderRadius: borderRadio,
      }}
    >
      <Typography
        fontSize="30px"
        padding="0.5rem 2rem"
        textAlign={textoAlineado}
        color={theme.palette.fourth.main}
        sx={{ fontWeight: "bold" }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default TitleBox;
