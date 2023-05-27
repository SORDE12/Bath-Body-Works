import {
  GET_DATA_ERROR,
  GET_DATA_LOADING,
  GET_DATA_SUCCESS,
} from "./productActiontypes";

let initialState = {
  loading: false,
  products: [],
  error: false,
};
export let productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_DATA_SUCCESS: {
      //  console.log(payload);
      return {
        ...state,
        loading: false,
        products: payload,
      };
    }
    case GET_DATA_ERROR: {
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
