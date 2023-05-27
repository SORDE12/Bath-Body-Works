import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../Pages/Home";
import Products from "../Pages/Products";
import SingleProductPage from "../Pages/SingleProductPage";
import Login from "../Pages/Login";
import AdminLogin from "../Pages/AdminLogin";
import Signup from "../Pages/Signup";
import Cart from "../Pages/Cart";
import RequireAuth from "./requireAuth";
import UserProfile from "../Pages/UserProfile";

export const AllRoutes = () => {
  return (
    <div >
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route
          path="/cart"
          element={
           // <RequireAuth>
              <Cart />
           // </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
};
