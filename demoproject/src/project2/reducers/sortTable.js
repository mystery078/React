import * as types from './../constants/types';

var initialState = {
	name: 'status', 
	status: 1
};

var myReducer = (state = initialState, action) => {
	switch(action.type){

		case types.SORT_TASK :
			return action.sort;

		default: return state;
	}
}

export default myReducer;