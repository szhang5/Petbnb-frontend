import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import classNames from "classnames";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { GetUserPost } from "../redux/actions";

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

class GetPost extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      pet_type,
      hour_rate,
      pets_num,
      avai_start_date,
      avai_end_date,
      classes
    } = this.props;
    console.log(this.props);
    return (
      <div>
        <h1>Get Post</h1>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            disabled
            id="outlined-select-pet_type"
            //select
            label="Pet Type"
            className={classes.textField}
            name={pet_type}
            margin="normal"

            // value={pet_type}
          />

          <TextField
            disabled
            id="outlined-select-hour_rate"
            // select
            label="Hour rate"
            className={classes.textField}
            //   type="rate"
            name={hour_rate}
            // defaultValue={hour_rate}
            // autoComplete="hour_rate"
            margin="normal"
            // fullWidth
            // variant="outlined"
            // value={hour_rate}
            //  onChange={this.handleChange("hour_rate")}
          />

          <TextField
            disabled
            id="outlined-number"
            //select
            label="Pet Number"
            className={classes.textField}
            //  type="number"
            name={pets_num}
            margin="normal"
            // value={pets_num}
            //  defaultValue={pets_num}
            //   autoComplete="pets_num"
          />

          <TextField
            disabled
            id="outlined-date_from"
            label="Start From"
            //   type="date"
            name="avai_start_date"
            // defaultValue={avai_start_date}
            className={classes.textField}
            margin="normal"
            // value={avai_start_date}
          />

          <TextField
            disabled
            id="outlined-date_to"
            label="To"
            //    type="date"
            name="avai_end_date"
            //defaultValue={avai_end_date}
            className={classes.textField}
            margin="normal"
            //  value={avai_end_date}
          />

          <Button
            variant="outlined"
            fullWidth
            color="primary"
            className={classes.button}
            onClick={() => {
              this.props.history.push("/search1");
            }}
          >
            Go Back
          </Button>
        </form>
      </div>
    );
  }
}

GetPost.propTypes = {
  classes: PropTypes.object.isRequired,
  pet_type: PropTypes.string,
  hour_rate: PropTypes.string,
  pets_num: PropTypes.string,
  avai_start_date: PropTypes.string,
  avai_end_date: PropTypes.string,
  posts: PropTypes.array.isRequired
};

GetPost.defaultProps = {
  pet_type: "",
  hour_rate: "",
  pets_num: "",
  avai_start_date: "",
  avai_end_date: "",
  posts: []
};

function mapStateToProps({ post }) {
  return {
    avai_start_date: post.avai_start_date,
    avai_end_date: post.avai_end_date,
    hour_rate: post.hour_rate,
    pet_type: post.pet_type,
    pets_num: post.pets_num
  };
}

export default withRouter(
  withStyles(styles)(
    connect(
      mapStateToProps,

      { GetUserPost }
    )(GetPost)
  )
);
