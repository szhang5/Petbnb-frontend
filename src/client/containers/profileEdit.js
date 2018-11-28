import React,{ Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { withRouter } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { EditProfileAction } from "../redux/actions";

import styles from "./styles/profileStyle";


class ProfileEdit extends Component {

  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const payload = {};
    for (const [key, value] of data.entries()) {
      payload[key] = value;
    }
    // console.log(payload);
    this.props.EditProfileAction(payload).then(() => {
      this.props.history.push('/profile');
    });
  }

  render() {
    const { firstname, lastname, email, phone, street, city, state, zipcode, classes } = this.props;

    return (
      <div>
        <h1>Edit Profile</h1>
        <form className={classes.container} noValidate autoComplete="off" onSubmit={e => this.handleSubmit(e)}>
          <TextField
            id="outlined-firstname-input"
            label="First Name"
            className={classes.textField}
            type="name"
            name="firstname"
            defaultValue={ firstname }
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
            defaultValue={ lastname }
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
            defaultValue={ email }
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
            name="phone"
            defaultValue={ phone }
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
            name="street"
            defaultValue={ street }
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
            name="city"
            defaultValue={ city }
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
            name="state"
            defaultValue={ state }
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
            name="zip"
            defaultValue={ zipcode }
            autoComplete="zipcode"
            margin="normal"
            fullWidth
            variant="outlined"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            Save
          </Button>
          <Button variant="outlined" fullWidth color="primary" className={classes.button}  onClick={() => {this.props.history.push('/profile');}}>
            Cancel
          </Button>
        </form>
      </div>
    );
  }
}

ProfileEdit.propTypes = {
  classes: PropTypes.object.isRequired,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  street: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zipcode: PropTypes.string,
};

ProfileEdit.defaultProps = {
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  street: '',
  city: '',
  state: '',
  zipcode: '',
}

function mapStateToProps({ user }) {
  return {
    'firstname': user.firstname,
    'lastname': user.lastname,
    'email': user.email,
    'phone': user.phone,
    'street': user.street,
    'city': user.city,
    'state': user.state,
    'zipcode': user.zip,
  }
}

export default  withRouter(withStyles(styles)(connect(mapStateToProps, { EditProfileAction })(ProfileEdit)));


