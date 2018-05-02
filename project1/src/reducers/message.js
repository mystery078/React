import * as types from './../constants/ActionTypes';
import * as message from './../constants/Message';

var initialState = message.MES_WELLCOME;

var myReducer = (state = initialState, action) => {
	switch(action.type) {
		case types.CHANGE_MESSAGE:
			return action.message;

		default: return state;
	}
}

export default myReducer;
