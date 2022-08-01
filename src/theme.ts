import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: '#EC3798',
    },
    secondary: {
      main: '#37ec8b',
    },
    error: {
      main: '#ec373d',
    },
    warning: {
      main: '#ec8b37',
    },
  },
});


export default theme;
