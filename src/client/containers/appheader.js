import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withRouter } from "react-router-dom";
import { signOut } from "../redux/actions";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class ButtonAppBar extends Component {
  handleOnClick() {
    const { name } = this.props;
    if (name) {
      this.props.signOut();
    }
    return this.props.history.push('/signin');
  }

  render() {
    const { name, classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              HOME
            </Typography>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              2
            </Typography>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              3
            </Typography>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              4
            </Typography>
            <Button color="inherit" href="#" onClick={() => this.handleOnClick()}>
              {name ? 'Sign out' : 'Sign In'}
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string,
};

ButtonAppBar.defaultProps = {
  name: '',
}

function mapStateToProps({ user }) {
  return {
    'name': user.name,
  }
}
export default withRouter(withStyles(styles)(connect(mapStateToProps, { signOut })(ButtonAppBar)));
