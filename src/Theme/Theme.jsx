import { createTheme } from '@mui/material/styles';
import "@fontsource-variable/aleo";

// Define los colores, tipografías, espaciados y otros estilos del tema.
const theme = createTheme({
  palette: {
    primary: {
      main: '#67fbfd', // Color primario
    },
    secondary: {
      main: '#5481ed', // Color secundario
    },
    third: {
      main: '#000000', // Color secundario
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
    fontFamily: 'Aleo Variable', // Fuente predeterminada
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
