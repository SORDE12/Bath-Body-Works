import {
  ADD_ORDER_ERROR,
  ADD_ORDER_LOADING,
  ADD_ORDER_SUCCESS,
  GET_ORDER_ERROR,
  GET_ORDER_LOADING,
  GET_ORDER_SUCCESS,
} from "./orderActiontypes";

let initialState = {
  loading: false,
  orders: [],
  error: false,
  totalPages: 1,
};
export let orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ORDER_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case ADD_ORDER_SUCCESS: {
      //  console.log(payload);
      return {
        ...state,
        loading: false,
        error: false,
        totalPages: 1,
      };
    }
    case ADD_ORDER_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_ORDER_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_ORDER_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        orders: payload,
      };
    }

    default: {
      return state;
    }
  }
};
