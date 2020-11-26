import { DONATION_TYPES } from "../actions/types";
import fetchStates  from "./fetchstates";

const DEFAULT_DONATION = {
    did: '',
    amount: '',
    fId: '',
    yearOfDonation: ''
};

const donation = (state = DEFAULT_DONATION, action) => {
    switch(action.type){
        case DONATION_TYPES.FETCH:
            return {...state, status: fetchStates.fetching};
        case DONATION_TYPES.FETCH_ERROR:
            return {...state, status: fetchStates.error, message: action.message};
        case DONATION_TYPES.FETCH_SUCCESS:
            return {...state, status: fetchStates.success, ...action.donations};
        default: 
            return state;            
    }
}

export default donation