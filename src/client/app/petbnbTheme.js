import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f06292',
    },
    secondary: {
      main: '#f9a7a7',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

export default theme;
