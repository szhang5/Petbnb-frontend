import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f06292',
    },
    secondary: {
      main: '#ad1457',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

export default theme;
