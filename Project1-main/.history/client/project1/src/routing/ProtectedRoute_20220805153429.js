import { Route, Redirect } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import React  from 'react';

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const {
		authState: { authLoading, isAuthenticated }
	} = useContext(AuthContext)


	return (
		<Route
			{...rest}
			render={props =>
				isAuthenticated ? (
					<>
						<NavbarMenu />
						<Component {...rest} {...props} />
					</>
				) : (
					<Redirect to='/login' />
				)
			}
		/>
	)
}

export default ProtectedRoute
