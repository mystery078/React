import * as types from './../constants/types';

// var data;

// localStorage.removeItem('tasks');

var data = JSON.parse(localStorage.getItem('tasks'));

var initialState = {
	data : (data ? data : []),
}

var s4 = () => {
	return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

var generateId = () => {
	return s4()+s4()+'-'+s4()+'-'+s4()+'-'+s4()+'-'+s4()+s4();
}

var myReducer = (state = initialState, action) => {

	switch (action.type) {
		case types.LIST_ALL : 
			return state.data;

		case types.ADD_TASK :
			// console.log(action);
			console.log(state.data);
			var newTask = {
				id: '1',
				name: 'a',
				status: true,
			}
			state.data.push(newTask);
			console.log(state.data + 'a');
			localStorage.setItem('tasks', JSON.stringify(state.data));
			return state;

		case types.TOGGLE_FORM :
			return state;

		case types.CLOSE_FORM : 
			return state;

		case types.OPEN_FORM : 
			return state;


		default:
			return state;
	}

	// return state;
}

export default myReducer;