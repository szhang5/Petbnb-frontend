import * as ACTIONS from "../actions/index";
import { forEach, map } from 'lodash';


const initialState = {
    transactions : [],
};

function updateTransaction(transactions, transacid, status) {
	const results = [];
	forEach(transactions, (tran) => {
		if(tran.transacinfo.transacid == transacid) {
			tran = {
				...tran,
				transacinfo: {
					...tran.transacinfo,
					status,
				}
			}
		}
		results.push(tran);
	})
	return results;
}

// function getPets(pets, petids) {
// 	const results = [];
// 	forEach(pets, pet => {
// 		if (petids.includes(pet.petid)) {
// 			results.push(pet);
// 		}
// 	})
// 	return results;
// }

// function initTransaction(transactions) {
// 	return map(transactions, t => {
// 		const petids = t.transacinfo.petid;
// 		return {
// 			'pets': getPets(t.pets, petids),
// 			'owner': t.owner,
// 			'sitter': t.sitter,
// 			'transacinfo': t.transacinfo,
// 		}
// 	});
// }

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.GET_USER_TRANSACTION: 
	    
	    return {
	    	...state,
	    	// transactions : initTransaction(action.payload.data.transactions)
	    	transactions:action.payload.data.transactions,
	    
	    }
    case ACTIONS.UPDATE_TRANSACTION_STATUS: 
	    
	    if(!action.data.success) {
	    	return {...state};
	    }
	    return {
	    	...state,
	    	transactions: updateTransaction(state.transactions, action.transacid, action.status)
			}
		case ACTIONS.PAY_TRANSACTION:
			console.log(action.payload.data)
			return {
				...state,
				transactions:action.payload.data.transactions
			}
    default:
      return state;
  }
}
