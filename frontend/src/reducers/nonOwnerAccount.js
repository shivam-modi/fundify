import fetchstates from "./fetchstates";
import { OWN_ACCOUNT_TYPES } from "../actions/types";

const DEFAULT_ACCOUNT = { loggedIn: false };

const notOwnAccount = (state = DEFAULT_ACCOUNT, action) => {
    switch(action.type) {
        case OWN_ACCOUNT_TYPES.FETCH:
            return {...state, status: fetchstates.fetching};
        case OWN_ACCOUNT_TYPES.FETCH_ERROR: 
            return {
                ...state,
                status: fetchstates.error,
                message: action.message
            }
        case OWN_ACCOUNT_TYPES.FETCH_SUCCESS:
            return {
                ...state,
                status: fetchstates.success,
                message: action.message,
                loggedIn: true
            }
        case OWN_ACCOUNT_TYPES.FETCH_LOGOUT_SUCCESS:
            return {
                ...state,
                status: fetchstates.success,
                message: action.message,
                loggedIn: false
            }
        case OWN_ACCOUNT_TYPES.FETCH_AUTHENTICATED_SUCCESS:
            return {
                ...state,
                status: fetchstates.success,
                message: action.message,
                loggedIn: action.authenticated
            }   
        default:
            return state;                 
    }
} 

export default notOwnAccount;