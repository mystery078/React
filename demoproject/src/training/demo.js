import {createStore} from 'redux';

var initialState = {
	status: false,
	sort: {
		sortBy: 'name',
		sortValue: 1
	}
}

var myReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'TOGGLE_STATUS':
			state.status = !state.status;
			break;
		case 'SORT': 
			var {by, value} = action.sort;
			var {status} = state;

			return {
				status: status,
				sort: {
					sortBy: by,
					sortValue: value
				}
			}
			break;
		default:
			
			break;
	}
	
	return state;
}

const store = createStore(myReducer);
console.log('Default :' ,  store.getState());

var action = { type: 'TOGGLE_STATUS'};

store.dispatch(action);
console.log(store.getState());

var actionSort = {
	type: 'SORT',
	sort: {
		by: 'name',
		value: -1
	}
}
store.dispatch(actionSort);
console.log(store.getState());