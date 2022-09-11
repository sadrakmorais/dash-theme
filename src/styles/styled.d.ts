import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secundary: string;

      background: string;
      text: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
    fontFamily: {
      primary: string;
      secondary: string;
    };
    fontWeight: {
      thin: number;
      light: number;
      regular: number;
      medium: number;
      semiBold: number;
      bold: number;
    };
  }

  export interface CustomTheme {
    title: string;
    colors: {
      primary: string;
      secundary: string;

      background: string;
      text: string;
    };
  }
}
