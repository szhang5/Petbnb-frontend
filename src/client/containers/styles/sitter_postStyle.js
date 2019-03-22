const styles = theme => ({
  card: {
    maxWidth: 400,
    margin: 15
  },
  content:{
    display:"inline-block"
  },
  cardHeader: {
   // width:"30%"
    display: "inline-block"
  },
  avatar: {
    marginRight: 0
  },

  bigAvatar: {
    margin: "auto",

    width: 80,
    height: 80
  },
  expansionPanel: { position: "inherit" },
  expansionPanelSummary: {
    display: "inline-block"
  },
  expansionPanelDetails: {
    display: "block"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  }, 
  price:{
    color:'#f06292',
    marginTop: 0,
    marginLeft: -14,
  },
  content:{
    marginTop: 0,
    paddingLeft:7
  },
  address:{
    fontSize: 16,
    marginLeft: 90,
    marginTop: -53,
    marginBottom: 30
  },
  tit:{
    marginTop: 10,
    marginBottom: 10
  },
  con:{
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,

  }

});
export default styles;
