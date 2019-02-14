import React, { Component } from "react";
import Avatar from "react-avatar-edit";
import styles from "./styles/avatarStyle";
import classNames from "classnames";

import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

class TestAvatar extends Component {
  constructor(props) {
    super(props);
    //const show = true;
    this.state = {
      preview: null,
      show: true
    };
    this.onCrop = this.onCrop.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onClose() {
    this.setState(this.preview);
    document.getElementById("avatarUploader").style.display = "none";
  }

  onCrop(preview) {
    this.setState({ preview });
  }

  render() {
    const classes = this.props;
    return (
      <div className={classes.Uploader}>
        <img className={classes.bigAvatar} src={this.state.preview} />
        <div id="avatarUploader">
          <Avatar
            width="50"
            height="150"
            onCrop={this.onCrop}
            onClose={this.onClose}
          />
        </div>
      </div>
    );
  }
}
export default withRouter(withStyles(styles)(TestAvatar));
