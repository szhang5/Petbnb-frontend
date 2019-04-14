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
  button: {
    margin: theme.spacing.unit,
    width: '96%'
  },
  input: {
    display: "none"
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
   bigAvatar: {
    margin: 20,
    width: 100,
    height: 100,
  },
  img: {
    height: 300,
    marginTop: 20
  },
  fab:{
    display:"block",
    margin:"auto",
    marginTop: 30,
    marginBottom: 30,
  },
  card: {
    maxWidth: 400,
  },
  media: {
    height: 150,
  },
  cardContainer: {
    marginBottom: 10,
  },
  checkBox: {
    marginLeft: 10,
  },
  petType:{
    marginLeft: 15,
    color: "gray",
    fontSize: 16,
  },
  foot:{
    height:100,
  },
  balance:{
    fontSize:20,
    color:"#f06292",
    textAlign: "center"
  }
});

export default styles;
