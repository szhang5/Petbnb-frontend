import React from "react";
import PropTypes from "prop-types";
import { map } from "lodash";
import moment from "moment";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

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
              <CardHeader
                avatar={
                  <Avatar aria-label="Recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="Add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                }
                sitter_name="Emma" //need to join the user table to get name!!!
                pet_types={post.pet_types}
              />
                <CardContent>
                  <Typography paragraph>
                    Sitter Id: {post.sitterid}
                  </Typography>
                  <Typography paragraph>
                    Pet types: {post.pet_type}
                  </Typography>
                  <Typography paragraph>
                    Price: {post.hour_rate}
                  </Typography>
                  <Typography paragraph>
                    Availablity: <br/> 
                    {moment(post.avai_start_date).format('LL')} - {moment(post.avai_end_date).format('LL')}
                  </Typography>
                </CardContent>

              <CardActions className={classes.actions} disableActionSpacing>
                <IconButton
                  className={classnames(classes.expand, {
                    [classes.expandOpen]: this.state.expanded
                  })}
                  onClick={this.handleExpandClick}
                  aria-expanded={this.state.expanded}
                  aria-label="Show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    Description: {post.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="outlined"
                    color="secondary"
                    className={classes.button}
                  >
                    Contact
                  </Button>
                </CardActions>
              </Collapse>
            </Card>
          );
        })}
      </div>
    );
  }
}

SitterPost.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(SitterPost);
