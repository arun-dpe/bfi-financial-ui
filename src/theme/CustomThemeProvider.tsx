import { createTheme, ThemeProvider } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#004db2',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#002f6c',
      contrastText: '#F3F4F6',
    },
    success: {
      main: '#BBFCC5',
      contrastText: '#D1D1D1',
    },
    info: {
      main: '#FFF',
      contrastText: '#000',
    },
  },
  neutral: {
    main: '#004db2',
  },
  shape: {
    borderRadius: 22,
  },
  spacing: 8,
  typography: {
    fontSize: 12,
    fontFamily: [
      'Montserrat',
    ].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#fff',
          height: 36,
          minWidth: 100,
        },
      },
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            border: '1px solid #004DB2',
            background: 'transparent',
            color: '#004DB2',
          },
        },
      ],
    },
  }
});

export default function CustomThemeProvider({ children }: any) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
