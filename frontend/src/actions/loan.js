import { LOAN_TYPES } from "./types";
import { BACKEND } from "../config";

export const fetchCompanyLoans = ({companyId}) => dispatch => {
  dispatch({type: LOAN_TYPES.FETCH});

  fetch(`${BACKEND.ADDRESS}loan`, {
      body: companyId,
      credentials: 'include',
      method: 'POST'
  }).then(json => {
      if(json.type === 'error'){
          dispatch({type: LOAN_TYPES.FETCH_ERROR, message: json.message});
      } else {
          dispatch({type: LOAN_TYPES.FETCH_SUCCESS, loanData: json.loanData});
      }
  })
   .catch(error => dispatch({type: LOAN_TYPES.FETCH_ERROR, message: error.message}))
}

