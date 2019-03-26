import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const styles = {
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  }
};

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.stickToBottom}
      >
      <BottomNavigationAction
          component={Link}
          to="/map"
          label="Map"
          value="map"
          icon={<LocationOnIcon />}
       />
       <BottomNavigationAction
          component={Link}
          to="/search"
          label="Search"
          value="search"
          icon={<RestoreIcon />}
       />
       <BottomNavigationAction
          component={Link}
          to="/home"
          label="Home"
          value="home"
          icon={<FavoriteIcon />}
       />
       <BottomNavigationAction
          component={Link}
          to="/transaction"
          label="Transaction"
          value="transaction"
          icon={<RestoreIcon />}
       />
       <BottomNavigationAction
          component={Link}
          to="/profile"
          label="Profile"
          value="profile"
          icon={<FavoriteIcon />}
       />
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);