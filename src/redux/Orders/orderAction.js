import axios from "axios";

import {
  ADD_ORDER_ERROR,
  ADD_ORDER_LOADING,
  ADD_ORDER_SUCCESS,
  GET_ORDER_ERROR,
  GET_ORDER_LOADING,
  GET_ORDER_SUCCESS,
} from "./orderActiontypes";

export const addOrders = (params, toast) => async (dispatch) => {
  dispatch({ type: ADD_ORDER_LOADING });
  try {
    await axios.post(`https://project-rb1x.onrender.com/orders`, params);

    await dispatch({ type: ADD_ORDER_SUCCESS });
    toast({
      title: "Order Placed",
      position: "top",
      description: "Order Placed Successfully",
      status: "success",
      duration: 6000,
      isClosable: true,
    });
  } catch (err) {
    dispatch({ type: ADD_ORDER_ERROR });
    toast({
      title: "something went Wrong",
      position: "top",
      description: "something went Wrong",
      status: "error",
      duration: 6000,
      isClosable: true,
    });
  }
};


export const getOrders = ({ page = 1, limit = 5, user }) => async (dispatch) => {

  dispatch({ type: GET_ORDER_LOADING });
  try {
    let res=await axios.get(`https://project-rb1x.onrender.com/orders`,{
      params:{
        _page:page,
        _limit:limit,
        user

      }
    });
 
    let data = await res.data;
   
    await dispatch({ type: GET_ORDER_SUCCESS , payload: data});

  } catch (err) {
    dispatch({ type: GET_ORDER_ERROR });
 
  }
};