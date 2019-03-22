import React, { Component } from "react";
import { connect } from "react-redux";
import { forEach } from "lodash";
import moment from "moment";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from '@material-ui/core/InputAdornment';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import Pets from "@material-ui/icons/Pets";
import { updateInputInfo, GetUserPost, updatePetTypes, editPost } from "../redux/actions";
import styles from "./styles/profileStyle";


const number = [];

for(let i = 1; i < 6; i++) {
  number.push({
    value: i,
    label: i,
  })
}

class PostEdit extends Component {

  componentWillMount(){
    // console.log(this.props.sitterid);
    if(this.props.sitterid){
      this.props.GetUserPost(this.props.sitterid);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const payload = {};
    for (const [key, value] of data.entries()) {
      payload[key] = value;
    }
    payload['sitterid'] = this.props.sitterid;
    payload['pet_type'] = '';
    if(payload['dog'] && payload['cat']) payload['pet_type'] = payload['pet_type'].concat(payload['dog'] + ", " + payload['cat']);
    else if(payload['dog']) payload['pet_type'] = payload['pet_type'].concat(payload['dog']);
    else if(payload['cat']) payload['pet_type'] = payload['pet_type'].concat(payload['cat']);

    delete payload.dog;
    delete payload.cat;

    payload['postdate'] = moment(new Date().toUTCString()).local().format('YYYY-MM-DD HH:mm:ss');

    // console.log(payload);
    this.props.editPost(payload).then(() => {
      this.props.history.push("/profile");
    });
  }

  handleInputChange(e) {
    if(['cat', 'dog'].includes(e.target.name)) {
      return this.props.updatePetTypes(e.target.name, e.target.value);
    }
    return this.props.updateInputInfo(e.target.name, e.target.value);
  }

  render() {
    const { 
      classes, 
      description,
      avai_end_date,
      avai_start_date,
      hour_rate,
      pet_type,
      pets_num,
    } = this.props;

    return (
      <div>
        <h1>Edit Profile</h1>
        <form
          className={classes.container}
          noValidate
          autoComplete="off"
          onSubmit={e => this.handleSubmit(e)}
          onChange={e => this.handleInputChange(e)}
        >
        <TextField
            id="outlined-avai_start_date-input"
            label="Available Start Date"
            className={classes.textField}
            type="date"
            name="avai_start_date"
            value={avai_start_date}
            autoComplete="avai_start_date"
            margin="normal"
            fullWidth
            onChange={e => this.handleInputChange(e)}
            InputLabelProps={{
              shrink: true
            }}
            variant="outlined"
          />
          <TextField
            id="outlined-avai_end_date-input"
            label="Available End Date"
            className={classes.textField}
            type="date"
            name="avai_end_date"
            value={avai_end_date}
            autoComplete="avai_end_date"
            margin="normal"
            fullWidth
            onChange={e => this.handleInputChange(e)}
            InputLabelProps={{
              shrink: true
            }}
            variant="outlined"
          />
          <TextField
            id="outlined-pets_num-input"
            label="Accepted Pet Number"
            className={classes.textField}
            select
            name="pets_num"
            value={pets_num}
            autoComplete="pets_num"
            margin="normal"
            fullWidth
            variant="outlined"
            onChange={e => this.handleInputChange(e)}
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
          >
          {number.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="outlined-hour_rate-input"
            label="Price Per Day"
            className={classes.textField}
            type="text"
            name="hour_rate"
            value={hour_rate}
            autoComplete="hour_rate"
            margin="normal"
            fullWidth
            variant="outlined"
            InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          />

        <h3 className={classes.petType}>Accepted Pet type: </h3>
        <FormControlLabel
          control={
            <Checkbox 
            checked = {pet_type["dog"]? true : false} 
            className={classes.checkBox}
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />} 
            checkedIcon={<Pets fontSize="small"/>} 
            value="dog" />
          }
          name="dog"
          label="Dog"
        />

         <FormControlLabel
          control={
            <Checkbox  
            checked = {pet_type["cat"]? true : false}
            className={classes.checkBox}
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />} 
            checkedIcon={<Pets fontSize="small"/>} 
            value="cat" />
          }
          name="cat"
          label="Cat"
        />

          <TextField
            id="outlined-description-input"
            label="Description"
            className={classes.textField}
            type="text"
            name="description"
            value={description}
            autoComplete="description"
            margin="normal"
            multiline
            fullWidth
            variant="outlined"
          />
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Save
          </Button>
          <Button
            variant="outlined"
            fullWidth
            color="primary"
            className={classes.button}
            onClick={() => {
              this.props.history.push("/profile");
            }}
          >
            Cancel
          </Button>
        </form>
      </div>
    );
  }
}

PostEdit.propTypes = {
  classes: PropTypes.object.isRequired,
  sitterid: PropTypes.number.isRequired,
  avai_end_date: PropTypes.string,
  avai_start_date: PropTypes.string,
  description: PropTypes.string,
  hour_rate: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
  pets_num: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
  pet_type: PropTypes.object,
  postdate: PropTypes.string,
};

PostEdit.defaultProps = {
  avai_end_date: "",
  avai_start_date: "",
  description: "",
  hour_rate: "",
  pet_type: {},
  pets_num: "",
};

function mapStateToProps({ post, user }) {
  return {
    sitterid: user.uid,
    avai_end_date: post.avai_end_date,
    avai_start_date: post.avai_start_date,
    description: post.description,
    hour_rate: post.hour_rate,
    pet_type: post.pet_type,
    pets_num: post.pets_num,
  };
}

export default withRouter(
  withStyles(styles)(
    connect(
      mapStateToProps,
      { updateInputInfo, GetUserPost, updatePetTypes, editPost }
    )(PostEdit)
  )
);

