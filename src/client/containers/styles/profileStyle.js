const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  bigAvatar: {
    margin: "auto",
    marginTop: 20,

    width: 80,
    height: 80
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

export default styles;
