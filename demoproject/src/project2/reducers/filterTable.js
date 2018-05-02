import * as types from './../constants/types';

var initialState = {
	name: '',
	status: -1,
}

var myReducer = (state = initialState, action) =>{
	switch(action.type){

		case types.FILTER_TABLE:
			state.name = action.filter.filterName;
			state.status = parseInt(action.filter.filterSort,10);
			return state;

		default: 
			return state;
	}
}

export default myReducer;