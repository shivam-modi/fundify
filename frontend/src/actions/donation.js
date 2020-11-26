import {DONATION_TYPES } from "./types";
import {BACKEND} from '../config';
import { response } from "../../../Backend/app/api/donation";

export const fetchDonations = ({cId}) => dispatch => {
    dispatch({type: DONATION_TYPES.FETCH});

    return fetch(`${BACKEND.ADDRESS}donation`,{
        body: cId,
        credentials: 'include',
        method: 'POST'
    }).then(response => response.json())
      .then(json => {
          if(json.type === 'error'){
              dispatch({type: DONATION_TYPES.FETCH_ERROR, message: json.message });
          } else {
              dispatch({type: DONATION_TYPES.FETCH_SUCCESS, donations: json.donations});
          }
      })
       .catch(err => dispatch({type: DONATION_TYPES.FETCH_ERROR, message: err.message}));
}

export const fetchDonated = ({nonOwnerId}) => dispatch => {
    dispatch({type: DONATION_TYPES.FETCH});

    return fetch(`${BACKEND.ADDRESS}drawee`, {
       body: nonOwnerId,
       credentials: 'include',
       method: 'POST' 
    }).then(response => response.json())
      .then(json => {
          if(json.type === 'error'){
              dispatch({type: DONATION_TYPES.FETCH_ERROR, message: json.message})
          } else {
              dispatch({type: DONATION_TYPES.FETCH_SUCCESS, acceptors: json.acceptors})
          }
      })
      .catch(error => dispatch({type: DONATION_TYPES.FETCH_ERROR, message: error.message})) 
}