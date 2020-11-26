import {BACKEND} from '../../config'

export const fetchFromAccount = ({
    accountType,
    endpoint,
    options,
    FETCH_TYPE,
    ERROR_TYPE,
    SUCCESS_TYPE
  }) => dispatch => {
      dispatch({type: FETCH_TYPE});
  
      return fetch(`${BACKEND.ADDRESS}${accountType}/${endpoint}`, options)
         .then(response => response.json())
         .then(json => {
             if(json.type === 'error'){
                 dispatch({type: ERROR_TYPE, message: json.message});
             } else {
                 dispatch({type: SUCCESS_TYPE, ...json});
             }
         })
         .catch(error => dispatch({
             type: ERROR_TYPE,
             message: error.message
         }))
  }