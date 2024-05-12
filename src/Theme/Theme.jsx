import { createTheme } from '@mui/material/styles';

// Define los colores, tipografías, espaciados y otros estilos del tema.
const theme = createTheme({
  palette: {
    primary: {
      main: '#6200ea', // Color primario
    },
    secondary: {
      main: '#03dac6', // Color secundario
    },
    background: {
      default: '#ffffff', // Color de fondo por defecto
      paper: '#f5f5f5', // Color de fondo de papel
    },
    text: {
      primary: '#000000', // Color de texto primario
      secondary: '#757575', // Color de texto secundario
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Fuente predeterminada
    h1: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    body1: {
      fontSize: '1rem',
    },
    button: {
      textTransform: 'none', // No transformar texto a mayúsculas
    },
  },
  spacing: 8, // Valor base para el espaciado
  shape: {
    borderRadius: 4, // Redondeo de bordes
  },
});

// Exporta el tema para usarlo en tu aplicación.
export default theme;
