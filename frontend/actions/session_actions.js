import * as SessionAPIUtil from '../util/session_api_util';
import { Redirect } from 'react-router';
import React from 'react';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => {
  return {
  type: RECEIVE_SESSION_ERRORS,
  errors
  };
};

export const login = (user) => {
  return (dispatch) => {
    SessionAPIUtil.login(user).then((response) => {
      dispatch(receiveCurrentUser(response));
    },
    (errors) => {
      dispatch(receiveErrors(errors));
    });
  };
};

export const signup = (user) => {
  return (dispatch) => {
    SessionAPIUtil.signup(user).then((response) => {
      dispatch(receiveCurrentUser(response));
    },
      (errors) => {
        dispatch(receiveErrors(errors));
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    SessionAPIUtil.logout().then(() => {
      dispatch(receiveCurrentUser(null));
    },
    (errors) => {
      dispatch(receiveErrors(errors));
    });
  };
};
