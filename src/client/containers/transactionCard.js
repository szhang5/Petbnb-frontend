import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = {
    avatar: {
        margin: 5,
    },
    card: {
        margin: 5,
    }
};

function handleAccept() {
    alert('You accepted the request.'); // eslint-disable-line no-alert
}

function handleDecline() {
    alert('You declined the request.'); // eslint-disable-line no-alert
}

class TransactionCard extends Component {

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <Grid container justify="center" alignItems="center">
                            <Avatar alt="pet pic" src="https://cdn.petcarerx.com/testimonials/testimony-2.png" className={classes.avatar} />
                        </Grid>
                        <Typography>
                            Owner: Eric Johnson
                        </Typography>
                        <Typography>
                            Date: 03/01/2019-03/20/2019
                        </Typography>
                        <Typography>
                            Amount: $100
                        </Typography>
                        <Grid container>
                            <Grid item xs>
                                <Chip
                                    label="Accept"
                                    clickable
                                    className={classes.chip}
                                    color="primary"
                                    onDelete={handleAccept}
                                    deleteIcon={<DoneIcon />}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs>
                                <Chip
                                    label="Decline"
                                    onDelete={handleDecline}
                                    className={classes.chip}
                                    color="secondary"
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        <Grid container justify="center" alignItems="center">
                            <Avatar alt="pet pic" src="https://cdn.petcarerx.com/testimonials/testimony-2.png" className={classes.avatar} />
                            <Avatar alt="pet pic" src="https://cdn.petcarerx.com/testimonials/testimony-2.png" className={classes.avatar} />
                            <Avatar alt="pet pic" src="https://cdn.petcarerx.com/testimonials/testimony-2.png" className={classes.avatar} />
                        </Grid>
                        <Typography>
                            Owner: Emily Williams
                        </Typography>
                        <Typography>
                            Date: 04/01/2019-04/10/2019
                        </Typography>
                        <Typography>
                            Amount: $200
                        </Typography>
                        <Grid container>
                            <Grid item xs>
                                <Chip
                                    label="Accepted"
                                    className={classes.chip}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        <Grid container justify="center" alignItems="center">
                            <Avatar alt="pet pic" src="https://cdn.petcarerx.com/testimonials/testimony-2.png" className={classes.avatar} />
                            <Avatar alt="pet pic" src="https://cdn.petcarerx.com/testimonials/testimony-2.png" className={classes.avatar} />
                        </Grid>
                        <Typography>
                            Owner: Tom Baker
                        </Typography>
                        <Typography>
                            Date: 02/01/2019-02/28/2019
                        </Typography>
                        <Typography>
                            Amount: $300
                        </Typography>
                        <Grid container>
                            <Grid item xs>
                                <Chip
                                    label="Payment Recieved"
                                    className={classes.chip}
                                    color=""
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

TransactionCard.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(TransactionCard);