import axios from "axios";
import {
  GET_DATA_ERROR,
  GET_DATA_LOADING,
  GET_DATA_SUCCESS,
} from "./productActiontypes";

export const getProducts = (params) => async (dispatch) => {
  //  console.log(params)
  dispatch({ type: GET_DATA_LOADING });
  try {
    let res = await axios.get(
      `https://project-rb1x.onrender.com/products`,
      params
    );
    let data = await res.data;
 
    dispatch({ type: GET_DATA_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_DATA_ERROR });
  }
};
