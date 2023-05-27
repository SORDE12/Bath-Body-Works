import axios from "axios";
import {
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_LOADING,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  AUTH_SIGNUP_ERROR,
  AUTH_SIGNUP_LOADING,
  AUTH_SIGNUP_SUCCESS,
} from "./authActiontypes";
import { Navigate } from "react-router-dom";

export const authAddUser = (params, Navigate) => async (dispatch) => {
  console.log(params);
  dispatch({ type: AUTH_SIGNUP_LOADING });
  try {
    let res = await axios.post(
      `https://project-rb1x.onrender.com/users`,
      params
    );
    
    let data = await res.data;
    if (data) {
      alert("SignUp success");
    }
    dispatch({ type: AUTH_SIGNUP_SUCCESS, payload: data });
    // localStorage.setItem("isAuth", true)
    Navigate("/login");
  } catch (err) {
    dispatch({ type: AUTH_SIGNUP_ERROR });
    alert("SignUp error");
  }
};

export const authLoginUser = (payload, navigate, toast) => async (dispatch) => {
  const { email, password } = payload;
  if (email && password) {
    dispatch({ type: AUTH_LOGIN_LOADING });
    try {
      let res = await axios.get(`https://project-rb1x.onrender.com/users`);
      
      let data = await res.data;

      let val = data.find((e) => e.email === email);
      if (val) {
        if (val.password === password) {
          dispatch({ type: AUTH_LOGIN_SUCCESS, payload: val });

          toast({
            title: "Login successful",
            position: "top",
            description: "User Login Successfully",
            status: "success",
            duration: 6000,
            isClosable: true,
          });
          localStorage.setItem("isAuth", true);
          navigate("/");
          return;
        } else {
          toast({
            title: "Login Error",
            position: "top",
            description: "Wrong credentials. Please try",
            status: "error",
            duration: 6000,
            isClosable: true,
          });
        }
      } else {
        alert("login failed");
      }
    } catch (err) {
      dispatch({ type: AUTH_LOGIN_ERROR });
      alert("SignIn error");
    }
  }
};

export const authLogoutUser = (toast) => async (dispatch) => {
  dispatch({ type: AUTH_LOGOUT });
  //localStorage.setItem("isAuth", false);
  toast({
    title: "Logout successfully",
    position: "top",
    isClosable: true,
    description: "Logout successfully",
    status: "success",
    duration: 6000,
  });
  Navigate("/login");
};
