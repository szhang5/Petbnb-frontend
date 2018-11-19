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


class OutlinedTextFields extends Component {
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
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="outlined-firstname-input"
            label="First Name"
            className={classes.textField}
            type="name"
            name="firstname"
            autoComplete="firstname"
            margin="normal"
            fullWidth
            variant="outlined"
          />
          <TextField
            id="outlined-lastname-input"
            label="Last Name"
            className={classes.textField}
            type="name"
            name="lastname"
            autoComplete="lastname"
            margin="normal"
            fullWidth
            variant="outlined"
          />
          <TextField
            id="outlined-email-input"
            label="Email"
            className={classes.textField}
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            fullWidth
            variant="outlined"
          />
          <TextField
            id="outlined-phone-input"
            label="Phone"
            className={classes.textField}
            type="phone"
            autoComplete="phone"
            margin="normal"
            fullWidth
            variant="outlined"
          />
          <TextField
            id="outlined-street-input"
            label="Street"
            className={classes.textField}
            type="street"
            autoComplete="street"
            margin="normal"
            fullWidth
            variant="outlined"
          />
          <TextField
            id="outlined-city-input"
            label="City"
            className={classes.textField}
            type="city"
            autoComplete="city"
            margin="normal"
            fullWidth
            variant="outlined"
          />
          <TextField
            id="outlined-state-input"
            label="State"
            className={classes.textField}
            type="state"
            autoComplete="state"
            margin="normal"
            fullWidth
            variant="outlined"
          />
          <TextField
            id="outlined-zipcode-input"
            label="ZipCode"
            className={classes.textField}
            type="zipcode"
            autoComplete="zipcode"
            margin="normal"
            fullWidth
            variant="outlined"
          />
        </form>

        <Button variant="contained" color="primary" className={classes.button}  onClick={() => this.handleOnClick()}>
          Sign Out
        </Button>
        <Button variant="outlined" color="primary" className={classes.button}  onClick={() => this.handleOnClick()}>
          Edit
        </Button>
      </div>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string,
};

OutlinedTextFields.defaultProps = {
  name: '',
}

function mapStateToProps({ user }) {
  return {
    'name': user.name,
  }
}

export default withRouter(withStyles(styles)(connect(mapStateToProps, { signOut })(OutlinedTextFields)));

