import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../redux/actions";
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import AccountIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TransactionIcon from '@material-ui/icons/SwapHoriz';
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
    value: 'home',
  };
 
  handleChange = (event, value) => {
    this.setState({ value });
    
  };

  render() {
    const { classes,name } = this.props;
    const { value } = this.state;
    let pathname = this.props.history.location.pathname
    let initvalue = pathname.substring(pathname.lastIndexOf("/") + 1, pathname.length);
   
    return (
      <BottomNavigation
        value={initvalue}
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
          icon={<SearchIcon />}
       />
       <BottomNavigationAction
          component={Link}
          to="/home"
          label="Home"
          value="home"
          icon={<HomeIcon />}
       />
       <BottomNavigationAction
          component={Link}
          to="/transaction"
          label="Transaction"
          value="transaction"
          icon={<TransactionIcon />}
       />
      <BottomNavigationAction
          component={Link}
          to="/profile"
          label="Profile"
          value="profile"
          icon={<AccountIcon />}
       />
      

        
      </BottomNavigation>
      
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string
};
SimpleBottomNavigation.defaultProps = {
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
    )(SimpleBottomNavigation)
  )
);