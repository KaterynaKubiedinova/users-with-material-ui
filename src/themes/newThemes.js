import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#b7a0dd',
      darker: '#703fba',
			contrastText: '#3d1f94',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});