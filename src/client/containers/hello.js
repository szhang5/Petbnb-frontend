import React, { Component } from "react";
import SitterPost from "./sitter_post";
import Grid from '@material-ui/core/Grid';

class HelloWorld extends Component {

  render() {
    return (
        <Grid container spacing={8}>
            <SitterPost />
        </Grid>
    );
  }
}

export default HelloWorld;
