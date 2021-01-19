/* eslint-disable no-duplicate-case */
/* eslint-disable default-case */
import { ModelUser } from '../../models';
import {
  // CREATE_USER_BEGIN,
  // CREATE_USER_FAIL,
  // CREATE_USER_SUCCESS,
  FETCH_ALL_USERS_BEGIN,
  FETCH_ALL_USERS_FAIL,
  FETCH_ALL_USERS_SUCCESS,
  // UPDATE_USER_BEGIN,
  // UPDATE_USER_FAIL,
  // UPDATE_USER_SUCCESS,
  // DELETE_USER_BEGIN,
  // DELETE_USER_FAIL,
  // DELETE_USER_SUCCESS,
} from '../../actions/actionUser';

const objInitialState = {
  objUsers: {},
  bIsLoading: false,
  bIsError: false,
  strErrorMessage: ''
};

export const reducerUser = (state = objInitialState, { payload, type }) => {

  switch(type) {
    case FETCH_ALL_USERS_BEGIN:
      return {
        ...state,
        bIsLoading: true,
      }
    case FETCH_ALL_USERS_FAIL:
      return {
        ...state,
        bIsLoading: false,
        bIsError: true,
        strErrorMessage: payload.strErrorMessage
      }
    case FETCH_ALL_USERS_SUCCESS:
      return {
        ...state,
        bIsLoading: false,
        objUsers: payload.arrModelUsers.reduce((objAccum, modelUser) => ({
          ...objAccum,
          [ModelUser.FIELD_STR_ID]: modelUser
        }), {}),
      }
      default:
        return state;
  }
};

export const getAllUsers = state => state.reducerUser.objUsers;