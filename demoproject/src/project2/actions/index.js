import * as types from './../constants/types';


export const listAll = () => {
	return {
		type: types.LIST_ALL
	}
}

export const addTask = ( task ) => {
	return {
		type: types.ADD_TASK,
		task
	}
}

export const toggleForm = () => {
	return {
		type: types.TOGGLE_FORM
	}
}

export const openForm = () => {
	return {
		type: types.OPEN_FORM
	}
}

export const closeForm = () => {
	return {
		type: types.CLOSE_FORM
	}
}

export const toggleStatus = (id) => {
	return {
		type: types.TOGGLE_STATUS,
		id
	}
}

export const deleteTask = (id) => {
	return {
		type: types.DELETE_TASK,
		id,
	}
}

export const editTask = (task) => {
	return {
		type: types.EDIT_TASK,
		task,
	}
}

export const updateTask = (task) => {
	return {
		type: types.UPDATE_TASK,
		task,
	}
}

export const filterTable = (filter) => {
	return {
		type: types.FILTER_TABLE,
		filter
	}
}

export const searchTask = (keyword) => {
	return {
		type: types.SEARCH_TASK,
		keyword
	}
}

export const sortTask = (sort) => {
	return {
		type: types.SORT_TASK,
		sort
	}
}