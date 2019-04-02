import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f06292"
    },
    secondary: {
      main: "#F9A7A7"
    }
  },
  typography: {
    useNextVariants: true
  }
});

export default theme;
