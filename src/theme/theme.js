"use client"
import { Inter} from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';


const inter = Inter({ subsets: ['latin'], display: 'swap', })

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: "light",
    customGreen: {
      main: '#44b50c',
      dark: '#188920',
    },
    customTransparent:{
      lightgray:"#f4f4f4",
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
    fontFamily: `${inter.style.fontFamily}, "Geeza Pro", sans-serif`,
    button: {
      fontFamily: `${inter.style.fontFamily}, "Geeza Pro", sans-serif`, 
    },
  },
  tabpanel: {
    background:"white"

  }
});


theme.components = {
  MuiButton: {
    styleOverrides: {
      root: {
       
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
  MuiCheckbox: {
    defaultProps: {
      disableRipple: true, // Disable ripple effect
    },
    styleOverrides: {
      root: {
        color: '#9c9c9c', // Default color
        '&.Mui-checked': {
          color: '#44b50c', // Checked color
        },
        transform: 'scale(1.2)', // Adjust size
        transition: "all 225ms cubic-bezier(.4,0,.2,1) 0ms",
        "&:hover":{
          background:"transparent"
        },
        "&.MuiTouchRipple-root":{
          display:"none"
        }

      },
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      root:{
        "& .MuiTouchRipple-root":{
          display:"none"
         }
      }
    },
  }
};
export default theme;