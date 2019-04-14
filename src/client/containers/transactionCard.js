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
import Button from "@material-ui/core/Button";
import DoneIcon from '@material-ui/icons/Done';
import Grid from '@material-ui/core/Grid';
import { getUserTransaction, updateTransactionStatus,payTransaction } from "../redux/actions";
import Typography from '@material-ui/core/Typography';
import SimpleBottomNavigation from "./simpleBottomNavigation";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
    state = {
        open: false,
        price: 0,
        transacid: 0,
        paid:false
      };

  handleStatusChange = (transacid, status) =>{
    this.props.updateTransactionStatus(transacid, status);
  }
  handleOpen = (rate,transacid) => {
    this.setState({ 
      open: true,
      price: rate,
      transacid : transacid,
    });
  };

  handleClose = () => {
    this.setState({ 
      open: false
     });
  };

  submitRequest= (transacid) => {
    if(this.props.balance>=this.state.price){
        this.props.payTransaction(transacid).then(() => {
          //this.props.updateTransactionStatus(transacid, 2);
          this.setState({
              ...this.state,
              open: false,
            
          })
          this.props.getUserTransaction(this.props.uid);
          alert("succeed")
          window.location="/transaction";
        });
    }
    else{
      alert("Insufficient Balance")
    }
    
  }

  componentWillMount(){
      this.props.getUserTransaction(this.props.uid);
  }

  render() {
    const { 
        classes,
        transactions,
        user_type,
        balance
    } = this.props;

    return (
       <div>
        {map(transactions, (transaction, key) => { 
          let transacinfo = transaction.transacinfo;
          let owner = transaction.owner;
          let sitter = transaction.sitter;
          let pets = transaction.pets;
          let rate = transaction.rate;
          return (
            <Card className={classes.card} key={transacinfo.transacid}>
              <CardContent>
              <h4>TransactionID: {transacinfo.transacid}</h4>
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
                      Amount: ${rate}
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
                              //onClick={() => this.handleStatusChange(transacinfo.transacid, 2)}
                              onClick={() => this.handleOpen(rate,transacinfo.transacid)}
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
      <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Send Your Request</DialogTitle>
          <DialogContent>
                <DialogContentText color="primary" style={{marginBottom: '15px'}}>
                Your current balance is : {balance} Petcoin
                </DialogContentText>
                <DialogContentText>
                You need to pay:${this.state.price}
                </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button 
              onClick={this.handleClose} 
              color="primary"
              style={{position: 'absolute',left:'10px'}} 
              >
              Cancel
            </Button>
            <Button onClick={()=>this.submitRequest(this.state.transacid)} color="primary">
              Pay
            </Button>
          </DialogActions>
        </Dialog>
      <div className={classes.foot} style={{ height: `100px` }}></div>
       <SimpleBottomNavigation />
      </div>
    );
  }
}

TransactionCard.propTypes = {
    classes: PropTypes.object.isRequired,
    uid: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    transactions: PropTypes.array,
    user_type: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    balance: PropTypes.number
};


TransactionCard.defaultProps = {
  uid : 0,
  transactions: [],
  user_type: 0,
  balance: 0
};

function mapStateToProps({ user, transaction }) {
    
  return {
    uid : user.uid,
    user_type: user.user_type,
    transactions : transaction.transactions,
    balance : user.balance

  };
}

export default withRouter(
  withStyles(styles)(
    connect(
      mapStateToProps,
      { getUserTransaction, updateTransactionStatus,payTransaction }
    )(TransactionCard)
  )
);



