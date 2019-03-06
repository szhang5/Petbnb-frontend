import React, { Component } from "react";
import { connect } from "react-redux";
import { map } from "lodash";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Pets from "@material-ui/icons/Pets";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

import { signInAction } from "../redux/actions";

import styles from "./styles/signInStyle";

class SignIn extends Component {
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
    this.props.signInAction(payload).then((e) => {        
      if (e.payload.data.user.user_type == 1) {
        this.props.history.push("/home");
        console.log("USER TYPE: " + e.payload.data.user.user_type);
      } else if (e.payload.data.user.user_type == 0) {
        this.props.history.push("/profile/petpage");
        console.log("USER TYPE: " + e.payload.data.user.user_type);
      }     
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <Pets />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <form className={classes.form} onSubmit={e => this.handleSubmit(e)}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              href="/register"
            >
              First Time? Let's Sign Up
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired, //make sure SignIn is an object
  user_type: PropTypes.oneOfType([PropTypes.string,PropTypes.number])
};

SignIn.defaultProps = {
  user_type: 2,
};

function mapStateToProps({ user }) {
    console.log("USER PRINT OUT: " + user);
  return {
    user_type: user.user_type,
  };
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { signInAction }
  )(SignIn)
);