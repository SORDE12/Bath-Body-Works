import {
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_LOADING,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  AUTH_SIGNUP_ERROR,
  AUTH_SIGNUP_LOADING,
  AUTH_SIGNUP_SUCCESS,
} from "./authActiontypes";

let initialState = {
  loading: false,
  users: [],
  error: false,
  status: false,
  loggedInUser: {},
};
export let authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_SIGNUP_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case AUTH_SIGNUP_SUCCESS: {
      //  console.log(payload);
      return {
        ...state,
        loading: false,
        users: [...state.users, payload],
      };
    }
    case AUTH_SIGNUP_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case AUTH_LOGIN_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
        status: false,
      };
    }
    case AUTH_LOGIN_SUCCESS: {
      //  console.log(payload);
      return {
        ...state,
        loading: false,
        status: true,
        loggedInUser: payload,
      };
    }
    case AUTH_LOGIN_ERROR: {
      //  console.log(payload);
      return {
        ...state,
        loading: false,
        status: false,
      };
    }
    case AUTH_LOGOUT: {
      //  console.log(payload);
      return {
        state: initialState,
      };
    }
    default: {
      return state;
    }
  }
};
