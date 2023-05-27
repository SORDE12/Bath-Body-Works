import {
  ADD_CART_DATA_ERROR,
  ADD_CART_DATA_LOADING,
  ADD_CART_DATA_SUCCESS,
  DELETE_CART_DATA_ERROR,
  DELETE_CART_DATA_LOADING,
  DELETE_CART_DATA_SUCCESS,
  EDIT_CART_DATA_ERROR,
  EDIT_CART_DATA_LOADING,
  EDIT_CART_DATA_SUCCESS,
  GET_CART_DATA_ERROR,
  GET_CART_DATA_LOADING,
  GET_CART_DATA_SUCCESS,
} from "./cartActiontypes";

let initialState = {
  loading: false,
  cart: [],
  error: false,
};
export let cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CART_DATA_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case ADD_CART_DATA_SUCCESS: {
      //  console.log(payload);
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case ADD_CART_DATA_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_CART_DATA_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_CART_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        cart: payload,
        error: false,
      };
    }
    case GET_CART_DATA_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case DELETE_CART_DATA_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case DELETE_CART_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case DELETE_CART_DATA_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case EDIT_CART_DATA_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case EDIT_CART_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case EDIT_CART_DATA_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};
