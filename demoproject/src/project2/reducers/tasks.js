import * as types from './../constants/types';
// var data;

// localStorage.removeItem('tasks');

var data = JSON.parse(localStorage.getItem('tasks'));

var initialState = (data ? data : []);


var s4 = () => {
	return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

var generateId = () => {
	return s4()+s4()+'-'+s4()+'-'+s4()+'-'+s4()+'-'+s4()+s4();
}

var findIxdex = (data, id) => {
	let result= -1;
	data.forEach( function(task, index) {
		if (id === task.id) {
			result = index;
		}
	});
	return result;
}

var myReducer = (state = initialState, action) => {
	var index = -1;
	switch (action.type) {
		case types.LIST_ALL : 
			return state;

		case types.ADD_TASK :
			// console.log(action);
			var newTask = {
				id: generateId(),
				name: action.task.name,
				status: action.task.status,
			}
			state.push(newTask);
			localStorage.setItem('tasks', JSON.stringify(state));
			return [...state];

		case types.TOGGLE_STATUS :
			console.log(action);
			index = findIxdex(state, action.id);
			// state[index].status = !state[index].status;
			state[index] = {
				...state[index],
				status: !state[index].status
			};
			localStorage.setItem('tasks', JSON.stringify(state));
			console.log(state);
			return [...state];

		case types.DELETE_TASK :
			index = findIxdex(state, action.id);
			state.splice(index, 1);
			localStorage.setItem('tasks', JSON.stringify(state));
			return [...state];

		case types.UPDATE_TASK:
			// console.log(action);
			index = findIxdex(state, action.task.id);
			state[index] = action.task;
			localStorage.setItem('tasks', JSON.stringify(state));
			return [...state];

		default:
			return state;
	}

	// return state;
}

export default myReducer;