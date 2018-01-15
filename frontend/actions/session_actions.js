import * as SessionAPIUtil from '../util/session_api_util';
import { Redirect } from 'react-router';
import React from 'react';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';


export const receiveCurrentUser = (response) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: response.currentUser,
  photos: response.photos
});

export const logoutCurrentUser = (currentUser) => ({
  type: LOGOUT_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => {
  return {
  type: RECEIVE_SESSION_ERRORS,
  errors
  };
};

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
});

export const login = (user) => {
  return (dispatch) => {
    SessionAPIUtil.login(user).then((response) => {
      dispatch(receiveCurrentUser(response));
    },
    (errors) => {
      dispatch(receiveErrors(errors.responseJSON));
    });
  };
};

export const signup = (user) => {
  return (dispatch) => {
    debugger
    SessionAPIUtil.signup(user).then((response) => {
      dispatch(receiveCurrentUser(response));
    },
      (errors) => {
        dispatch(receiveErrors(errors.responseJSON));
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    SessionAPIUtil.logout().then(() => {
      dispatch(logoutCurrentUser(null));
    },
    (errors) => {
      dispatch(receiveErrors(errors.responseJSON));
    });
  };
};
