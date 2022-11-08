import {} from 'styled-components';

interface IPalette {
    main: string;
    contrastText: string;
};

interface IFont {
    family: string;
    size: { small: string, medium: string, large: string};
    weight: {small: number, normal: number, medium: number, bold: number};
};
  
declare module 'styled-components' {
    export interface DefaultTheme {
      palette: {
        common: {
          dark: string
          white: string
        }
        primary: IPalette
        secondary: IPalette
        accent: IPalette
     },
     fonts: IFont, 
     breakpoints: {sm: string, md: string, lg: string, xl: string, xxl: string}   
  }
};