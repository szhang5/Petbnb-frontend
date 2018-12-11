import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

class TemporaryDrawer extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem
            button
            component="a"
            onClick={() => {
              this.props.history.push("/home");
            }}
          >
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            button
            component="a"
            onClick={() => {
              this.props.history.push("/search1");
            }}
          >
            <ListItemText primary="Search" />
          </ListItem>
          <ListItem
            button
            component="a"
            onClick={() => {
              this.props.history.push("/our_service");
            }}
          >
            <ListItemText primary="Our Service" />
          </ListItem>
          <ListItem
            button
            component="a"
            onClick={() => {
              this.props.history.push("/contact_us");
            }}
          >
            <ListItemText primary="Contact Us" />
          </ListItem>
        </List>
      </div>
    );

    return (
      <div>
        <Button onClick={this.toggleDrawer("left", true)}>
          <MenuIcon />
        </Button>

        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(TemporaryDrawer));
