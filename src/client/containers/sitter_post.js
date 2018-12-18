import React from "react";
import PropTypes from "prop-types";
import { map } from "lodash";
import moment from "moment";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import styles from "./styles/sitter_postStyle";
import TextField from "@material-ui/core/TextField";


class SitterPost extends React.Component {
  state = { expanded: false };

  constructor(props) {
    super(props);
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes, posts } = this.props;
    return (
      <div>
        {map(posts, (post, key) => {
          return (
            <Card className={classes.card} key={post.sitterid}>
              <CardContent>
                <Grid container spacing={24}>
                  <Grid item xs={3}>
                    <img className={classes.bigAvatar}
                    src="https://gbgrr.org/wp-content/uploads/Home-page-donate.jpg"></img>
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      disabled
                      id="outlined-firstname-input"
                      label="Pet types:"
                      defaultValue={post.pet_type}
                      className={classes.textField}
                      margin="normal"
                    />
                </Grid>
                <Grid item xs={4}>
                  <h3  className={classes.content}>$ {post.hour_rate}/day</h3>
                </Grid>
              </Grid>
            </CardContent>
            <ExpansionPanel className={classes.expansionPanel}>
              <ExpansionPanelSummary
                className={classes.expansionPanelSummary}
                expandIcon={<ExpandMoreIcon />}
              >
                <h3>Show more</h3>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails
                className={classes.expansionPanelDetails}
              >
                <h3>Sitter Id: {post.sitterid}</h3>
                <h3>Description: {post.description}</h3>
                <h3>Availablity: </h3>
                <h3> {moment(post.avai_start_date).format("LL")} - </h3>
                <h3> {moment(post.avai_end_date).format("LL")}</h3>
                <Button
                  variant="outlined"
                  color="secondary"
                  fullWidth
                  className={classes.button}
                >
                  Contact
                </Button>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Card>
          );
        })}
      </div>
    );
  }
}

SitterPost.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SitterPost);
