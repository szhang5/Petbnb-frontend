import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
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
import { getPost } from '../redux/actions'; 

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
    this.props.getPost();
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    

    return (
      <Card className={classes.card}>
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
          sitter_name="Emma"
          pet_types="dog, cat, turtle"
        />

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
              I love animals! I love animals! I love animals! I love animals! I
              love animals! I love animals! I love animals! I love animals! I
              love animals! I love animals! I love animals! I love animals! I
              love animals! I love animals! I love animals! I love animals!
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
  }
}

SitterPost.propTypes = {
  classes: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
};

SitterPost.defaultProps = {
  posts : [],
}

function mapStateToProps({ post }) {
  console.log(post);
  return {
    'posts': post.posts,
  }
}

export default withStyles(styles)(connect(mapStateToProps, { getPost })(SitterPost));
