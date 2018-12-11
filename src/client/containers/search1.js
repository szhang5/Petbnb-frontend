import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { SearchPost } from "../redux/actions";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});
const types = [
  {
    value: "cat",
    label: "cat"
  },
  {
    value: "dog",
    label: "dog"
  },
  {
    value: "other",
    label: "other"
  }
];
const ranges = [
  {
    value: "0-20",
    label: "0 to 20"
  },
  {
    value: "21-50",
    label: "21 to 50"
  },
  {
    value: "51-100",
    label: "51 to 100"
  }
];
const number = [
  {
    value: "1",
    label: "1"
  },
  {
    value: "2",
    label: "2"
  },
  {
    value: "3-10",
    label: "3 to 10"
  }
];

class Search1 extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    pet_type: "",
    hour_rate: "",
    pets_num: "",
    avai_start_date: "",
    avai_end_date: ""
  };
  handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const payload = {};
    for (const [key, value] of data.entries()) {
      payload[key] = value;
    }
    console.log(payload);
    this.props.SearchPost(payload).then(() => {
      this.props.history.push("/get_post");
    });
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const {
      pet_type,
      hour_rate,
      pets_num,
      avai_start_date,
      avai_end_date,
      classes
    } = this.props;

    return (
      <div>
        <h1>Search</h1>
        <form
          className={classes.container}
          noValidate
          autoComplete="off"
          onSubmit={e => this.handleSubmit(e)}
        >
          <TextField
            id="outlined-select-pet_type"
            select
            label="Pet Type"
            className={classes.textField}
            type="type"
            name="pet_type"
            margin="normal"
            fullWidth
            variant="outlined"
            value={this.state.pet_type}
            onChange={this.handleChange("pet_type")}
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
          >
            {types.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="outlined-select-hour_rate"
            select
            label="Hour rate"
            className={classes.textField}
            type="rate"
            name="hour_rate"
            margin="normal"
            fullWidth
            variant="outlined"
            value={this.state.hour_rate}
            onChange={this.handleChange("hour_rate")}
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
          >
            {ranges.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="outlined-number"
            select
            label="Pet Number"
            className={classes.textField}
            type="number"
            name="pets_num"
            value={this.state.pets_num}
            onChange={this.handleChange("pets_num")}
            margin="normal"
            fullWidth
            variant="outlined"
          >
            {number.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="outlined-date_from"
            label="Start From"
            type="date"
            name="avai_start_date"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
            variant="outlined"
            value={this.state.avai_start_date}
            onChange={this.handleChange("avai_start_date")}
            margin="normal"
          />

          <TextField
            id="outlined-date_to"
            label="To"
            type="date"
            name="avai_end_date"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
            variant="outlined"
            value={this.state.avai_end_date}
            onChange={this.handleChange("avai_end_date")}
            margin="normal"
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
              this.props.history.push("/home");
            }}
          >
            Cancel
          </Button>
        </form>
      </div>
    );
  }
}

Search1.propTypes = {
  classes: PropTypes.object.isRequired,
  // pet_type: PropTypes.string,
  // hour_rate: PropTypes.string,
  // pets_num: PropTypes.string,
  //  avai_start_date: PropTypes.string,
  // avai_end_date: PropTypes.string,
  posts: PropTypes.array.isRequired
};

Search1.defaultProps = {
  //  pet_type: "",
  // hour_rate: "",
  //  pets_num: "",
  // avai_start_date: "",
  //  avai_end_date: "",
  posts: []
};

function mapStateToProps({ post }) {
  return {
    pet_type: post.pet_type,
    hour_rate: post.hour_rate,
    pets_num: post.pets_num,
    avai_start_date: post.avai_start_date,
    avai_end_date: post.avai_end_date

    // posts: post
  };
}

export default withRouter(
  withStyles(styles)(
    connect(
      mapStateToProps,

      { SearchPost }
    )(Search1)
  )
);
