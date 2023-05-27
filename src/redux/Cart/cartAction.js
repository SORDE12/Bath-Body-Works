import axios from "axios";
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

export const addToCart = (params, toast) => async (dispatch) => {
  dispatch({ type: ADD_CART_DATA_LOADING });
  try {
    await axios.post(`https://project-rb1x.onrender.com/cart`, params);

    await dispatch({ type: ADD_CART_DATA_SUCCESS });
    toast({
      title: "Product Added to cart",
      position: "top",
      description: "Product added to cart",
      status: "success",
      duration: 6000,
      isClosable: true,
    });
  } catch (err) {
    dispatch({ type: ADD_CART_DATA_ERROR });
    toast({
      title: "Please, Sign in first",
      position: "top",
      description:
        "Kindly sign in to your account to add product in your cart.",
      status: "error",
      duration: 6000,
      isClosable: true,
    });
  }
};

export const getCartData = (user) => async (dispatch) => {
  //console.log(user);
  dispatch({ type: GET_CART_DATA_LOADING });
  try {
    let res = await axios.get(
      `https://project-rb1x.onrender.com/cart?user=${user}`
    );
    let data = await res.data;
    await dispatch({ type: GET_CART_DATA_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_CART_DATA_ERROR });
  }
};

export const deleteCartPro = (id, user, toast) => async (dispatch) => {
  dispatch({ type: DELETE_CART_DATA_LOADING });
  try {
    await axios.delete(`https://project-rb1x.onrender.com/cart/${id}`);
    await dispatch({ type: DELETE_CART_DATA_SUCCESS });
    toast({
      title: "Item Removed!",
      description: "Item has been removed from the cart.",
      status: "success",
      duration: 6000,
      isClosable: true,
    });
    if (user) {
      dispatch(getCartData(user));
    }
  } catch (err) {
    dispatch({ type: DELETE_CART_DATA_ERROR });
    toast({
      title: "something went wrong!",
      description: "Item not deleted from cart",
      status: "error",
      duration: 6000,
      isClosable: true,
    });
  }
};

export const deleteCartProAfterPlace = (id, user) => async (dispatch) => {
  dispatch({ type: DELETE_CART_DATA_LOADING });
  try {
    await axios.delete(`https://project-rb1x.onrender.com/cart/${id}`);
    await dispatch({ type: DELETE_CART_DATA_SUCCESS });

    if (user) {
      dispatch(getCartData(user));
    }
  } catch (err) {
    dispatch({ type: DELETE_CART_DATA_ERROR });
  }
};

export const updateCartQty = (id, qty, user, toast) => async (dispatch) => {
  let params = { qty: qty };
  dispatch({ type: EDIT_CART_DATA_LOADING });
  try {
    await axios.patch(`https://project-rb1x.onrender.com/cart/${id}`, params);
    await dispatch({ type: EDIT_CART_DATA_SUCCESS });
    toast({
      title: "Item edited!",
      description: "Item has been edited from the cart.",
      status: "success",
      duration: 6000,
      isClosable: true,
    });
    if (user) {
      dispatch(getCartData(user));
    }
  } catch (err) {
    dispatch({ type: EDIT_CART_DATA_ERROR });
    toast({
      title: "something went wrong!",
      description: "Item not deleted from cart",
      status: "error",
      duration: 6000,
      isClosable: true,
    });
  }
};
