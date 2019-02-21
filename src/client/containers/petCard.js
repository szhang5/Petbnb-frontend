import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import moment from "moment";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { map } from "lodash";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from "./styles/profileStyle";

class PetCard extends Component {
 
  handleOnClick = (petid) => {
  	console.log(petid);
  	this.props.history.push(`/profile/petprofile/edit/${petid}`);
  }

  render() {
   const { classes, pets} = this.props;
   const defaultImage = "https://res.cloudinary.com/zoey1111/image/upload/v1550674929/petProfileDefault.png";

    return (
    <div>
    	{map(pets, (pet, key) => {  
    		return(
        <div className={classes.cardContainer} key={pet.petid} onClick={() => this.handleOnClick(pet.petid)}>
	        <Card className={classes.card}>
	          <CardMedia
	            className={classes.media}
	            image= {pet.image? pet.image : defaultImage}
	            title= {pet.petname}
	          />
	          <CardContent>
	            <Typography component="p">
	            	Name: {pet.petname? pet.petname : "pet name"}
	            </Typography>
	            <Typography component="p">
            		Birh: {moment(pet.birth).format("LL")}
            	</Typography>
            	<Typography component="p">
            		Type: {pet.type? pet.type: "type"}
            	</Typography>
            	<Typography component="p">
            		Breed: {pet.breed? pet.breed: "breed"}
            	</Typography>
            	<Typography component="p">
            		Furcolor: {pet.furcolor? pet.furcolor: "furcolor"}
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