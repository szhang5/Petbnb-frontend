import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { map } from "lodash";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from "./styles/profileStyle";

class PetCard extends Component {
 

  render() {
   const { classes, pets} = this.props;
   const defaultImage = "https://res.cloudinary.com/zoey1111/image/upload/v1550439003/berkay-gumustekin-402114-unsplash.jpg";

    return (
    <div>
    	{map(pets, (pet, key) => {  
    		return(
        <div className={classes.cardContainer} key={pet.petid}>
	        <Card className={classes.card}>
	          <CardMedia
	            className={classes.media}
	            image= {pet.image? pet.image : defaultImage}
	            title= {pet.petname}
	          />
	          <CardContent>
	            <Typography component="p">
	            	{pet.petname? pet.petname : "pet name"}
	            </Typography>
	          </CardContent>
	        </Card>
	      </div>
	      );
      })}
    </div>
    );
  }
}

PetCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(
  withStyles(styles)(PetCard)
);
