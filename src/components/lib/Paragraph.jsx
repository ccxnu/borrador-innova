import { Box, Typography, useTheme } from "@mui/material";

const Paragraph = ({ contenido }) => {
  const theme = useTheme();

  return (
    <Box paddingBottom={4} padding="2rem 1rem">
      <Typography
        color={theme.palette.octh.main}
        fontSize="22px"
        sx={{ wordBreak: "break-word" }}
      >
        {contenido}
      </Typography>
    </Box>
  );
};

export default Paragraph;
