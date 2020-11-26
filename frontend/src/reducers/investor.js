import { INVESTOR_TYPES } from "../actions/types";
import fetchStates from './fetchstates';

const DEFAULT_INVEST = {
    investorId: '',
    fundedId: '', 
    stocks: '',
    yearOfInvestment: '',
    shares: '',
    fundingType: ''
};

const invest = ( state = DEFAULT_INVEST, action ) => {
    switch (action.type) {
        case INVESTOR_TYPES.FETCH:
            return {...state, status: fetchStates.fetching}
        case INVESTOR_TYPES.FETCH_ERROR:
            return {...state, status: fetchStates.error, message: action.message}
        case INVESTOR_TYPES.FETCH_SUCCESS: 
            return {...state, status: fetchStates.success, ...action.investor}    
        default:
            return state;
    }
}

export default invest 