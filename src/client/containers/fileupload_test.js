import React, { Component } from "react";
import styles from "./styles/profileStyle";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { GetImageInfo } from "../redux/actions";

class FileupLoad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: " "
    };
  }
  onChange(e) {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = e => {
      console.log(e.target.result); //get image_base64_data
      this.props.GetImageInfo(e.target.result);
    };
  }
  render() {
    return (
      <div onSubmit={this.onFormSubmit}>
        <h2>Choose file you want</h2>
        <input type="file" name="file" onChange={e => this.onChange(e)} />;
      </div>
    );
  }
}
export default withRouter(
  withStyles(styles)(
    connect( null,
      { GetImageInfo }
    )(FileupLoad)
  )
);
