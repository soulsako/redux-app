import axios from 'axios';
import { ModelUser } from '../../models';

export const APP_URI = 'https://reqres.in/api';

export const FETCH_ALL_USERS_BEGIN = 'CREATE_USER_BEGIN';
export const FETCH_ALL_USERS_FAIL = 'CREATE_USER_FAIL';
export const FETCH_ALL_USERS_SUCCESS = 'CREATE_USER_SUCCESS';

// export const CREATE_USER_BEGIN = 'CREATE_USER_BEGIN';
// export const CREATE_USER_FAIL = 'CREATE_USER_FAIL';
// export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';

// export const UPDATE_USER_BEGIN = 'UPDATE_USER_BEGIN';
// export const UPDATE_USER_FAIL = 'UPDATE_USER_FAIL';
// export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';

// export const DELETE_USER_BEGIN = 'DELETE_USER_BEGIN';
// export const DELETE_USER_FAIL = 'DELETE_USER_FAIL';
// export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';

/**
 *  FETCH ALL USERS
 */
export const actionFetchUsersAllBegin = () => ({
  type: FETCH_ALL_USERS_BEGIN, 
});

export const actionFetchUsersAllFail = (strErrorMessage) => ({
  type: FETCH_ALL_USERS_FAIL,
  payload: {
    strErrorMessage
  }
});

export const actionFetchUsersAllSuccess = (arrModelUsers) => ({
  type: FETCH_ALL_USERS_SUCCESS,
  payload: {
    arrModelUsers
  },
});

export const actionGetAllUsers = () => async (dispatch, getState) => {

  dispatch(actionFetchUsersAllBegin());

  try {
    const { data } = await axios.get(`${APP_URI}/users`);
    const arrModelUsers = data.data.map(objUser => new ModelUser(objUser));

    dispatch(actionFetchUsersAllSuccess(arrModelUsers));
    return arrModelUsers;

  } catch(error) {
    dispatch(actionFetchUsersAllFail(error.message));
    throw new Error(error.message);
  }
};

/**
 *  CREATE A USER
 */
// export const actionCreateUserBegin = () => ({
//   type: CREATE_USER_BEGIN, 
// });

// export const actionCreateUserFail = (strErrorMessage) => ({
//   type: CREATE_USER_FAIL,
//   payload: {
//     strErrorMessage
//   }
// });

// export const actionCreateUserSuccess = (modelUser) => ({
//   type: CREATE_USER_SUCCESS,
//   payload: {
//     arrModelUsers: Array.isArray(modelUser) ? modelUser : [modelUser],
//   }
// });

// export const actionCreateUser = (modelUser) => async (dispatch, getState) => {

//   dispatch(actionCreateUserBegin());

//   try {
//     const { data } = await axios.post(`${APP_URI}/users`, modelUser);
//     const createUserModel = new ModelUser(data.data);

//     dispatch(actionCreateUserSuccess(createUserModel));
//     return createUserModel;

//   } catch(error) {
//     dispatch(actionCreateUserFail(error.message));
//     throw new Error(error.message);
//   }
// }

/**
 *  UPDATE A USER
 */
// export const actionUpdateUserBegin = () => ({
//   type: UPDATE_USER_BEGIN, 
// });

// export const actionUpdateUserFail = (strErrorMessage) => ({
//   type: UPDATE_USER_FAIL,
//   payload: strErrorMessage
// });

// export const actionUpsertOneUser = (modelUser) => ({
//   type: UPDATE_USER_SUCCESS,
//   payload: modelUser,
// });

// export const actionUpdateUserSuccess = (modelUser) => ({
//   type: UPDATE_USER_SUCCESS,
//   payload: modelUser,
// });

// export const actionUpdateUser = (strUserId) => async (dispatch, getState) => {

//   dispatch(actionUpdateUserBegin());

//   try {
//     const { data } = await axios.post(`${APP_URI}/users/${strUserId}`);
//     const createUserModel = new ModelUser(data.data);

//     dispatch(actionUpsertOneUser(createUserModel));
//     return createUserModel;

//   } catch(error) {
//     dispatch(actionUpdateUserFail(error.message));
//     throw new Error(error.message);
//   }
// }

/**
 *  DELETE A USER
 */
// export const actionDeleteUserBegin = () => ({
//   type: DELETE_USER_BEGIN, 
// });

// export const actionDeleteUserFail = (strErrorMessage) => ({
//   type: DELETE_USER_FAIL,
//   payload: strErrorMessage
// });

// export const actionDeleteUserSuccess = (strUserId) => ({
//   type: DELETE_USER_SUCCESS,
//   payload: strUserId,
// });

// export const actionDeleteUser = (strUserId) => async (dispatch, getState) => {

//   dispatch(actionDeleteUserBegin());

//   try {
//     await axios.post(`${APP_URI}/users/${strUserId}`);
//     dispatch(actionDeleteUserSuccess(strUserId));
//   } catch(error) {
//     dispatch(actionDeleteUserFail(error.message));
//     throw new Error(error.message);
//   }
// }