export const authReducer = (state, action) => {
	const {
		type,
		payload: { isAuthenticated,setSta, user }
	} = action

	switch (type) {
		case 'SET_AUTH':
			return {
				...state,
				isAuthenticated,
				setSta,
				user
			}

		default:
			return state
	}
}
