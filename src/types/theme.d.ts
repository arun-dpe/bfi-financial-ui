import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {
    neutral: {
      main: string;
    };
  }
  // allow configuration using `createTheme`
  interface CustomThemeOptions extends ThemeOptions {
    neutral?: {
      main?: string;
    };
  }
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}