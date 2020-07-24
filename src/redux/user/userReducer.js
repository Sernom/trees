import { SET_VALUE, MATCH_FIELDS } from './userTypes'

const initialState = {
	name: '',
	email: '',
	confirmEmail: '',
	tree: 0,
	username: '',
	password: '',
	confirmPassword: '',
	focus: '',
	status: {
		name: {},
		email: {},
		confirmEmail: {},
		username: {},
		password: {},
		confirmPassword: {}
	}
}

const userReducer = (state = initialState, action) => {

	switch (action.type) {
		case SET_VALUE: 
			return {
				...state,
				[action.payload.field]: action.payload.value
			}

		case MATCH_FIELDS:
			return {
				...state,
				status: action.payload
			}

		default: return state

	}
}

export default userReducer