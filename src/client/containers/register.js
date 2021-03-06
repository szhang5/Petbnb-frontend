import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { map } from 'lodash';
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Pets from "@material-ui/icons/Pets";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { registerAction } from '../redux/actions'; 

import styles from "./styles/signInStyle";


class Register extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    selectedValue: 0,
  };

  handleRegister(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const payload = {}
    
    for (const [key, value] of data.entries()) { 
      payload[key] = value;
    }
    payload.user_type=this.state.selectedValue
    this.props.registerAction(payload).then(() => {
      this.props.history.push('/home'); 
    });
  }
  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <Pets />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form className={classes.form} onSubmit={(e) => this.handleRegister(e)}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus/>
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
            <RadioGroup
              value={this.state.selectedValue}
              onChange={this.handleChange}
             
            >
              <FormControlLabel
                value="1" 
                control={
                  <Radio 
                    className={classes.group}
                    
                    color="primary"
                    //checked={this.state.selectedValue === 1}
                    />}
                label="Owner"
              />
              <FormControlLabel
                value="0" 
                control={
                  <Radio 
                    color="primary" 
                  // checked={this.state.selectedValue === 2}
                    />}
                label="Sitter"
            />
            </RadioGroup>
            
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
              Register
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => {
              this.props.history.push("/signin");
            }}
            >
              Cancel
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(connect(null, { registerAction })(Register)));
