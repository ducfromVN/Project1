import { createContext, useReducer, useEffect } from 'react'
import { authReducer } from '../reducers/authReducer'
import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
import React, { Component }  from 'react';

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
	const [authState, dispatch] = useReducer(authReducer, {
		isAuthenticated: false,
		user: null
	})

	// Authenticate user
	const loadUser = async () => {
		if (localStorage["TOKEN"]) {
			setAuthToken(localStorage["TOKEN"])
		}

		try {
			const response = await axios.get(`${apiUrl}/auth`)
			if (response.data.success) {
				dispatch({
					type: 'SET_AUTH',
					payload: { isAuthenticated: true, user: response.data.user }
				})
			}
		} catch (error) {
			localStorage.removeItem("TOKEN")
			setAuthToken(null)
			dispatch({
				type: 'SET_AUTH',
				payload: { isAuthenticated: false, user: null }
			})
		}
	}

	useEffect(() => loadUser(), [])

	// Login
	const loginUser = async userForm => {
		try {
			const response = await axios.post(`${apiUrl}/auth/login`, userForm)
			if (response.data.success)
				localStorage.setItem(
					"TOKEN",
					response.data.accessToken
				)

			await loadUser()

			return response.data
		} catch (error) {
			if (error.response.data) return error.response.data
			else return { success: false, message: error.message }
		}
	}

	// Register
	const registerUser = async userForm => {
		try {
			const response = await axios.post(`http://localhost:5000/api/auth/register`, userForm)
			if (response.data.success)
				localStorage.setItem(
					"TOKEN",
					response.data.accessToken
				)

			await loadUser()

			return response.data
		} catch (error) {
			if (error.response.data) return error.response.data
			else return { success: false, message: error.message }
		}
	}

	// Logout
	const logoutUser = () => {
		localStorage.removeItem("TOKEN")
		dispatch({
			type: 'SET_AUTH',
			payload: { isAuthenticated: false, user: null }
		})
	}

	// Context data
	const authContextData = { loginUser, registerUser, logoutUser, authState }

	// Return provider
	return (
		<AuthContext.Provider value={authContextData}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContextProvider
