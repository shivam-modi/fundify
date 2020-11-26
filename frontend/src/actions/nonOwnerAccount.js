import {NOTOWN_ACCOUNT_TYPES} from "./types"
import {fetchFromAccount} from "./helper/accountHelper"

export const signup = ({username, password}) => fetchFromAccount({
    endpoint: 'signup',
    options: {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: {'Content-type': 'application/json'},
        credentials: 'include'
    },
    FETCH_TYPE: NOTOWN_ACCOUNT_TYPES.FETCH,
    ERROR_TYPE: NOTOWN_ACCOUNT_TYPES.FETCH_ERROR,
    SUCCESS_TYPE: NOTOWN_ACCOUNT_TYPES.FETCH_SUCCESS
});

export const login = ({username, password}) => fetchFromAccount({
    endpoint: 'login',
    options: {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: {'Content-type': 'appliaction/json'},
        credentials: 'include'
    },
    FETCH_TYPE: NOTOWN_ACCOUNT_TYPES.FETCH,
    ERROR_TYPE: NOTOWN_ACCOUNT_TYPES.FETCH_ERROR,
    SUCCESS_TYPE: NOTOWN_ACCOUNT_TYPES.FETCH_SUCCESS
});

export const fetchAuthenticated = () => fetchFromAccount({
    endpoint: 'authenticated',
    options: {credentials: 'include'},
    FETCH_TYPE: NOTOWN_ACCOUNT_TYPES.FETCH,
    ERROR_TYPE: NOTOWN_ACCOUNT_TYPES.FETCH_ERROR,
    SUCCESS_TYPE: NOTOWN_ACCOUNT_TYPES.FETCH_AUTHENTICATED_SUCCESS
});

export const logout = () => fetchFromAccount({
    endpoint: 'logout',
    options: {
        credentials: 'include'
    },
    FETCH_TYPE: NOTOWN_ACCOUNT_TYPES.FETCH,
    ERROR_TYPE: NOTOWN_ACCOUNT_TYPES.FETCH_ERROR,
    SUCCESS_TYPE: NOTOWN_ACCOUNT_TYPES.FETCH_LOGOUT_SUCCESS
});
