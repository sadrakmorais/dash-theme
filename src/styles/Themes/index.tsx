import { DefaultTheme, CustomTheme } from 'styled-components';
import { dark } from './dark';
import { primary } from './primary';

const defaultTheme = {
  fontSizes: {
    small: '16px',
    medium: '18px',
    large: '20px',
  },
  fontFamily: {
    primary: 'Inter',
    secondary: 'Montserrat',
  },
  fontWeight: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
};

function combineTheme(theme: CustomTheme): DefaultTheme {
  return { ...defaultTheme, ...theme };
}

export { combineTheme, dark, primary };
