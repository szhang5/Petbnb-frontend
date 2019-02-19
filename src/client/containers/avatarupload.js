import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { connect } from "react-redux";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/avatarStyle";
import { withRouter } from "react-router-dom";

class AvatarUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  }
  render() {
    const classes = this.props;
    return (
      <div>
        <input type="file" onChange={this.handleChange} />
        <Avatar className={classes.bigAvatar} src={this.state.file} />
      </div>
    );
  }
}

export default withStyles(styles)(AvatarUpload);
