import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router-dom";
import { signOut } from "../redux/actions";
import SideBar from "./sidebar";
import styles from "./styles/appheaderStyle";

class ButtonAppBar extends Component {
  handleOnClick() {
    const { name } = this.props;
    if (name) {
      // this.props.signOut();
      return this.props.history.push("/profile");
    }
    return this.props.history.push("/signin");
  }

  render() {
    const { name, classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <Grid
              justify="space-between" // Add it here :)
              container
              spacing={24}
            >
              <Grid item>
                <Typography
                  variant="h6"
                  color="inherit"
                  className={classes.grow}
                >
                  <SideBar />
                </Typography>
              </Grid>

              <Grid item>
                <div>
                  <Button
                    color="inherit"
                    onClick={() => this.handleOnClick()}
                    className={classes.profile}
                  >
                    {name ? "Profile" : "Sign In"}
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string
};

ButtonAppBar.defaultProps = {
  name: ""
};

function mapStateToProps({ user }) {
  return {
    name: user.email
  };
}
export default withRouter(
  withStyles(styles)(
    connect(
      mapStateToProps,
      { signOut }
    )(ButtonAppBar)
  )
);
