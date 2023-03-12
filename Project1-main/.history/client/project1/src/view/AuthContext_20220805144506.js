import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import React, { Component } from "react";
import { authReducer } from "../redux/reducers/authReducer";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    user: null,
  });

  // Authenticate user
  const loadUser = async () => {
    if (localStorage["TOKEN"]) {
        if (localStorage["TOKEN"]) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage["TOKEN"]`
        } else {
            delete axios.defaults.headers.common['Authorization']
        }
    }

    try {
      const response = await axios.get(`http://localhost:5000/api/auth`);
      if (response.data.success) {
        dispatch({
          type: "SET_AUTH",
          payload: { isAuthenticated: true, user: response.data.user },
        });
      }
    } catch (error) {
      localStorage.removeItem("TOKEN");
      if (null) {
		axios.defaults.headers.common['Authorization'] = `Bearer null`
	} else {
		delete axios.defaults.headers.common['Authorization']
	}
      dispatch({
        type: "SET_AUTH",
        payload: { isAuthenticated: false, user: null },
      });
    }
  };

  useEffect(() => loadUser(), []);

  // Login
  const loginUser = async (userForm) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/auth/auth/login`,
        userForm
      );
      if (response.data.success)
        localStorage.setItem("TOKEN", response.data.accessToken);

      await loadUser();

      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  // Context data
  const authContextData = { loginUser, authState };

  // Return provider
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
