import { Roboto } from 'next/font/google';
import { Inter} from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});
const inter = Inter({ subsets: ['latin'] })

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: "light",
    customGreen: {
      main: '#44b50c',
      dark: '#188920',
    },
    customTransparent:{
      gray: 'rgba(29, 29, 29, .48)',
      hovergray: 'rgba(29, 29, 29, .8)',
    },
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    button: {
      fontFamily: inter.style.fontFamily, 
    },
  },
  
});


theme.components = {
  MuiButton: {
    styleOverrides: {
      root: {
        fontFamily: inter.style.fontFamily, 
        boxShadow: 'none', 
        borderRadius: '0px',
          '&:hover': {
            boxShadow: 'none', 
            backgroundColor: "rgba(29, 29, 29, .8)",
          },
          '&:active' :{
            boxShadow: 'none',
          }
      },
    },
  },
};
export default theme;