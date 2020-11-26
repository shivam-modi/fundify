import { COMPANY_TYPES } from "../actions/types";
import fetchStates from './fetchstates';

const DEFAULT_COMPANY = {
    companyId: '',
    companyName: '',
    ownerId: '',
    profit: '',
    growthRate: '',
    currentAsset: '',
    fundsRequire: '',
    domain: '',
    popular: ''
}

const company = (state = DEFAULT_COMPANY, action) => {
    switch (action.type) {
        case COMPANY_TYPES.FETCH:
            return {...state, status: fetchStates.fetching}
        case COMPANY_TYPES.FETCH_ERROR:
            return {...state, status: fetchStates.error, message: action.message}
        case COMPANY_TYPES.FETCH_SUCCESS:    
            return {...state, status: fetchStates.success, ...action.company}
        default:
            return state;
    }
}

export default company