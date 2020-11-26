import { COMPANY_TYPES } from "./types"
import { BACKEND } from '../config'

export const fetchCompany = () => dispatch => {
    dispatch({type: COMPANY_TYPES});

    return fetch(`${BACKEND.ADDRESS}company`)
        .then(response => response.json())
        .then(json => {
            if(json.type === 'error'){
                dispatch({type: COMPANY_TYPES.FETCH_ERROR, message: json.message});
            } else {
                dispatch({type: COMPANY_TYPES.FETCH_SUCCESS, company: json.company});
            }
        })
        .catch(error => dispatch({type: COMPANY_TYPES.FETCH_ERROR, message: error.message}))
} 

export const addCompany = () => dispatch => {
    dispatch({type: COMPANY_TYPES});

    return fetch(`${BACKEND.ADDRESS}company/new`, {
        credentials: "include"
    })
      .then(response => response.json())
        .then(json => {
            if(json.type === 'error'){
                dispatch({type: COMPANY_TYPES.FETCH_ERROR, message: error.message})
            } else {
                dispatch({type: COMPANY_TYPES.FETCH_SUCCESS, })
            }
        })
        .catch(error => dispatch({type: COMPANY_TYPES.FETCH_ERROR}))
} 