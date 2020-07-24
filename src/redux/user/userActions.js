import {
	SET_VALUE,
	MATCH_FIELDS
} from './userTypes'

const random = (min = 0, max, excluded) => {
	let number = Math.floor(Math.random() * (max-min) + min);
	if (number >= excluded) number++;
	return number;
}

const checkValue = () => {

}

export const setValue = payload => {
	return {
		type: SET_VALUE,
		payload
	}
}

export const getTree = (min = 0, max, excluded) => {

	const payload = {
		field: 'tree',
		value: random(min, max, excluded)
	}

	return {
		type: SET_VALUE,
		payload
	}
}

export const matchFields = (original, matcher, field, status) => {
	if (original !== matcher) {
		status[field].error = true
		status[field].success = false
	} else {
		status[field].error = false
		status[field].success = true
	}

	return {
		type: MATCH_FIELDS,
		payload: status
	}
}
