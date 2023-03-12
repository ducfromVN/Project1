import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import React from "react";
import { authReducer } from "../redux/reducers/authReducer";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    setSta: false,
    user: null,
  });

  const addPost = async (newProduct) => {
    try {
      console.log(newProduct)
      const response = await axios.post(
        "http://localhost:5000/api/products",
        newProduct
      );
      console.log("1")
    } catch (error) {
      console.log("2")
    }
  };

  // Login
  const loginUser = async (userForm) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        userForm
      );
      if (response.data.success)
        localStorage.setItem("TOKEN", response.data.accessToken);
      dispatch({
        type: "SET_AUTH",
        payload: { isAuthenticated: true, setSta: false, user: null },
      });

      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };
  const loginAddProduct = async (userForm) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        userForm
      );
      if (response.data.success)
        localStorage.setItem("TOKEN", response.data.accessToken);
      dispatch({
        type: "SET_AUTH",
        payload: { isAuthenticated: true, setSta: true, user: null },
      });

      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  // Context data
  const authContextData = { loginUser, loginAddProduct, addPost, authState };

  // Return provider
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
