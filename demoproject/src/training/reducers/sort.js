var initialState = {
	sortBy: 'status',
	sortValue: 1
}

const myReducer = (state = initialState, action) => {

	if (action.type === 'SORT') {
		var {by, value} = action.sort;
		
		return{
			sortBy: by,
			sortValue: value
		}
	}
	
	return state;
}

export default myReducer;