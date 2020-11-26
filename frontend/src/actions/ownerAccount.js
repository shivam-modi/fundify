import {OWN_ACCOUNT_TYPES} from "./types"
import {fetchFromAccount} from "./helper/accountHelper"

export const signup = ({username, password}) => fetchFromAccount({
    accountType: 'ceoaccount',
    endpoint: 'signup',
    options: {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: {'Content-type': 'appplication/json'},
        credentials: 'include'
    },
    FETCH_TYPE: OWN_ACCOUNT_TYPES.FETCH,
    ERROR_TYPE: OWN_ACCOUNT_TYPES.FETCH_ERROR,
    SUCCESS_TYPE: OWN_ACCOUNT_TYPES.FETCH_SUCCESS  
});

export const login = ({username, password}) => fetchFromAccount({
    accountType: 'ceoaccount',
    endpoint: 'login',
    options: {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: {'Content-type': 'application/json'},
        credentials: 'include'
    },
    FETCH_TYPE: OWN_ACCOUNT_TYPES.FETCH,
    ERROR_TYPE: OWN_ACCOUNT_TYPES.FETCH_ERROR,
    SUCCESS_TYPE: OWN_ACCOUNT_TYPES.FETCH_SUCCESS
});

export const fetchAuthenticated = () => fetchFromAccount({
    accountType: 'ceoaccount',
    endpoint: 'authenticated',
    options: {credentials: 'include'},
    FETCH_TYPE: OWN_ACCOUNT_TYPES.FETCH,
    ERROR_TYPE: OWN_ACCOUNT_TYPES.FETCH_ERROR,
    SUCCESS_TYPE: OWN_ACCOUNT_TYPES.FETCH_AUTHENTICATED_SUCCESS
});

export const logout = () => fetchFromAccount({
    accountType: 'ceoaccount',
    endpoint: 'logout',
    options: {
        credentials: 'include'
    },
    FETCH_TYPE: OWN_ACCOUNT_TYPES.FETCH,
    ERROR_TYPE: OWN_ACCOUNT_TYPES.FETCH_ERROR,
    SUCCESS_TYPE: OWN_ACCOUNT_TYPES.FETCH_LOGOUT_SUCCESS
});