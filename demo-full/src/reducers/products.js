import apiCaller from './../api/apiCaller';

var data = [];
apiCaller('products', 'GET', null).then(res => {
	data = res.data;
	console.log(data);
});
	console.log(data);
var initialState = data;
const myReducer = (state = initialState, action) => {
	switch(action.type){
		default: return [...state];
	}
}

export default myReducer;