import React, { Component } from "react";
import styles from "./styles/profileStyle";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

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
      console.log("data is:" + e.target.result);
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
export default withRouter(withStyles(styles)(FileupLoad));
