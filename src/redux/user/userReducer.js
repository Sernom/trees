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
	warnings: []
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
				...state
			}

		default: return state

	}
}

export default userReducer