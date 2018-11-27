import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router-dom";
import { signOut } from "../redux/actions";

import styles from "./styles/profileStyle";


class Profile extends Component {
  handleOnClick() {
      const { name } = this.props;
      console.log(name);
      if (name) {
        this.props.signOut();
      }
      return this.props.history.push('/signin');
    }


  render() {
    const { name, classes } = this.props;

    return (
      <div>
        <h1>Profile</h1>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            disabled
            id="outlined-firstname-input"
            label="First Name"
            defaultValue="Pika"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            disabled
            id="outlined-lastname-input"
            label="Last Name"
            defaultValue="Zhang"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            disabled
            id="outlined-email-input"
            label="Email"
            defaultValue="test@gmail.com"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            disabled
            id="outlined-phone-input"
            label="Phone"
            defaultValue="(347)123-4567"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            disabled
            id="outlined-street-input"
            label="Street"
            className={classes.textField}
            defaultValue="9 Regent Street APT 303"
            fullWidth
            margin="normal"
          />
          <TextField
            disabled
            id="outlined-city-input"
            label="City"
            className={classes.textField}
            defaultValue="Jersey City"
            margin="normal"
          />
          <TextField
            disabled
            id="outlined-state-input"
            label="State"
            className={classes.textField}
            defaultValue="NJ"
            margin="normal"
          />
          <TextField
            disabled
            id="outlined-zipcode-input"
            label="ZipCode"
            className={classes.textField}
            defaultValue="07302"
            margin="normal"
          />
        </form>

        <Button variant="outlined" fullWidth color="primary" className={classes.button}  href="/editProfile">
          Edit
        </Button>
        <Button variant="contained" fullWidth color="primary" className={classes.button}  onClick={() => this.handleOnClick()}>
          Sign Out
        </Button>
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string,
};

Profile.defaultProps = {
  name: '',
}

function mapStateToProps({ user }) {
  return {
    'name': user.name,
  }
}

export default withRouter(withStyles(styles)(connect(mapStateToProps, { signOut })(Profile)));

