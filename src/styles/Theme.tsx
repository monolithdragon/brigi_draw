import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

const theme: DefaultTheme = {
    palette: {
        common: {
          dark: '#6F6F6F',
          white: '#ffffff'
        },
        primary: {
          main: '#E2D297',
          contrastText: '#FCFBFF'
        },
        secondary: {
          main: '#E98331',
          contrastText: '#FCFBFF'
        },
        accent: {
          main: '#C2AE71',
          contrastText: '#FCFBFF'
        }
      },

    fonts: {    
        family: "'Roboto', sans-serif",
        size: {
            small: '1em',
            medium: '2em',
            large: '3em'
        },
        weight: {
            small: 300,
            normal: 400,
            medium: 600,
            bold: 900
        }
    },  
    breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1536px',
    }
};

interface DefaultThemeProps {
  children: React.ReactNode;
};

const Theme = ({children}: DefaultThemeProps) => {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
};

export default Theme;
