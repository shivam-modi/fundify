import { INVESTOR_TYPES } from "./types";
import { BACKEND } from "../config";

export const fetchInvestor = ({fundedId}) => dispatch => {
    dispatch({type: INVESTOR_TYPES.FETCH});

    return fetch(`${BACKEND.ADDRESS}investor`, {
        body: fundedId,
        method: 'POST',
        credentials: 'include'
    }).then(response => response.json())
       .then(json => {
           if(json.type === 'error'){
               dispatch({type: INVESTOR_TYPES.FETCH_ERROR, message: json.message});
           } else {
               dispatch({type: INVESTOR_TYPES.FETCH_SUCCESS, companies: json.companies});
           }
       })
       .catch(error => dispatch({type: INVESTOR_TYPES.FETCH_ERROR, message: error.message}))
}

export const fetchInvestment = ({investorId}) => dispatch => {
    dispatch({type: INVESTOR_TYPES.FETCH});

    return fetch(`${BACKEND.ADDRESS}invests`, {
        body: investorId,
        credentials: 'include',
        method: 'POST'
    }).then(json => {
        if(json.type === 'error'){
            dispatch({type: INVESTOR_TYPES.FETCH_ERROR, message: json.message});
        } else {
            dispatch({type: INVESTOR_TYPES.FETCH_SUCCESS, icompanies: json.icompanies});
        }
    })
     .catch(error => dispatch({type: INVESTOR_TYPES.FETCH_ERROR, message: error.message}))
}