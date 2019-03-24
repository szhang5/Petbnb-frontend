import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { map } from "lodash";
import moment from "moment";
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import Grid from '@material-ui/core/Grid';
import { getUserTransaction, updateTransactionStatus } from "../redux/actions";
import Typography from '@material-ui/core/Typography';

const styles = {
    avatar: {
        margin: 5,
    },
    card: {
        margin: 5,
    }
};

// function handleAccept() {
//     alert('You accepted the request.'); // eslint-disable-line no-alert
// }


// function handleDecline() {
//     alert('You declined the request.'); // eslint-disable-line no-alert
// }

class TransactionCard extends Component {

  handleStatusChange = (transacid, status) =>{
    this.props.updateTransactionStatus(transacid, status);
  }

  componentWillMount(){
      this.props.getUserTransaction(this.props.uid);
  }

  render() {
    const { 
        classes,
        transactions,
        user_type,
    } = this.props;

    return (
       <div>
        <h1>Reservation</h1>
        {map(transactions, (transaction, key) => { 
          let transacinfo = transaction.transacinfo;
          let owner = transaction.owner;
          let sitter = transaction.sitter;
          let pets = transaction.pets;
          return (
            <Card className={classes.card} key={transacinfo.transacid}>
              <CardContent>
              <Grid container justify="center" alignItems="center">
              {map(pets, (pet, key) => {
                return(
                  <Avatar alt="pet pic" src={pet.image} className={classes.avatar}  key = {pet.petid}/>
                )
              })}
               </Grid>
                  <Typography>
                      {user_type == 0? `Pet Owner: ${owner.firstname} ${owner.lastname}` : `Pet Sitter: ${sitter.firstname} ${sitter.lastname}`}
                  </Typography>
                  <Typography>
                      Date: {moment(transacinfo.avai_start_date).format("L")} - {moment(transacinfo.avai_end_date).format("L")}
                  </Typography>
                  <Typography>
                      Amount: ${transacinfo.hour_rate*transaction.pets.length}
                  </Typography>
                  {user_type == 0 && transacinfo.status == 0 && <Grid container>
                      <Grid item xs>
                          <Chip
                              label="Accept"
                              clickable
                              className={classes.chip}
                              color="primary"
                              onClick={() => this.handleStatusChange(transacinfo.transacid, 1)}
                              deleteIcon={<DoneIcon />}
                              variant="outlined"
                          />
                      </Grid>
                      <Grid item xs>
                          <Chip
                              label="Decline"
                              onClick={() => this.handleStatusChange(transacinfo.transacid, 3)}
                              className={classes.chip}
                              color="secondary"
                              variant="outlined"
                          />
                      </Grid>
                  </Grid> }

                   {user_type == 1 && transacinfo.status == 0 && <Grid container>
                      <Grid item xs>
                          <Chip
                              label={`Waiting For Response From ${sitter.firstname} ${sitter.lastname}...`}
                              className={classes.chip}
                          />
                      </Grid>
                  </Grid>}

                  {user_type == 0 && transacinfo.status == 1 && <Grid container>
                      <Grid item xs>
                          <Chip
                              label="Accepted"
                              className={classes.chip}
                          />
                      </Grid>
                  </Grid>}

                  {user_type == 1 && transacinfo.status == 1 && <Grid container>
                      <Grid item xs>
                          <Chip
                              label="Pay"
                              onClick={() => this.handleStatusChange(transacinfo.transacid, 2)}
                              className={classes.chip}
                              color="primary"
                              variant="outlined"
                          />
                      </Grid>
                  </Grid>}

                  {user_type == 0 && transacinfo.status == 2 && <Grid container>
                      <Grid item xs>
                          <Chip
                              label="Payment Received"
                              className={classes.chip}
                          />
                      </Grid>
                  </Grid>}

                  {user_type == 1 && transacinfo.status == 2 && <Grid container>
                      <Grid item xs>
                          <Chip
                              label="Paid"
                              className={classes.chip}
                          />
                      </Grid>
                  </Grid>}

                  {transacinfo.status == 3 && <Grid container>
                      <Grid item xs>
                          <Chip
                              label="Declined"
                              className={classes.chip}
                          />
                      </Grid>
                  </Grid>}
              </CardContent>
          </Card>
         );
      })}
      </div>
    );
  }
}

TransactionCard.propTypes = {
    classes: PropTypes.object.isRequired,
    uid: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    transactions: PropTypes.array,
    user_type: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
};


TransactionCard.defaultProps = {
  uid : 0,
  transactions: [],
  user_type: 0,
};

function mapStateToProps({ user, transaction }) {
  return {
    uid : user.uid,
    user_type: user.user_type,
    transactions : transaction.transactions,

  };
}

export default withRouter(
  withStyles(styles)(
    connect(
      mapStateToProps,
      { getUserTransaction, updateTransactionStatus }
    )(TransactionCard)
  )
);



