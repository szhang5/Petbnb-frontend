const styles = theme => ({
  card: {
    maxWidth: 400,
    margin: 15
  },
  cardHeader: {
    display: "block"
  },
  avatar: {
    marginRight: 0
  },

  bigAvatar: {
    margin: "auto",

    width: 60,
    height: 60
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
  }
});
export default styles;
