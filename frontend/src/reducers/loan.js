import { LOAN_TYPES } from '../actions/types';
import fetchStates from "./fetchstates";

const DEFAULT_LOAN = {
    source: '',
    amount: '', 
    rate: '', 
    tenure: '',
    cid: ''
};

const loan = (state = DEFAULT_LOAN, action) => {
    switch (action.type) {
        case LOAN_TYPES.FETCH:
            return {...state, status: fetchStates.fetching}
        case LOAN_TYPES.FETCH_ERROR:
            return {...state, status: fetchStates.error, message: action.message }
        case LOAN_TYPES.FETCH_SUCCESS:
            return { ...state, status: fetchStates.success, ...action.investment}
        default:
            return state;
    }
}

export default loan