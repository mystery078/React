import * as types from './../constants/ActionTypes';

// localStorage.removeItem('cart');

var data = JSON.parse(localStorage.getItem('cart'));

var initialState = data ? data : [];
// var initialState = [
// 	{
// 		product: {
// 			id: 1,
// 			name: 'Iphone 6',
// 			image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2018/1/4/636506509528306435_iphone6-32GB-2.jpg',
// 			description: 'San pham demo',
// 			price: 10000000,
// 			stock: 10,
// 			rating: 4
// 		},
// 		quantity: 2
// 	},
// 	{
// 		product: {
// 			id: 2,
// 			name: 'Iphone 6',
// 			image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2018/1/4/636506509528306435_iphone6-32GB-2.jpg',
// 			description: 'San pham demo',
// 			price: 60000000,
// 			stock: 10,
// 			rating: 4
// 		},
// 		quantity: 2
// 	}
// ];

const myReducer = (state = initialState, action) => {
	var {product, quantity} = action;
	var index = -1;
	switch(action.type){
		case types.ADD_CART:
			index = findIndex(state, product);
			// console.log(state);
			// console.log(action);
			if (index > -1) {
				// console.log(index);
				// state[index] = {
				// 	...state[index],
				// 	quantity : (state[index].quantity+ quantity)
				// }
				state[index].quantity += quantity;
			}else{
				console.log('add new');
				state.push({product,quantity});
			}
			localStorage.setItem('cart', JSON.stringify(state));
			return [...state];

		case types.UPDATE_CART_ITEM :
			index = findIndex(state, product);
			state[index].quantity += quantity;
			if (state[index].quantity === 0) {
				state.splice(index, 1);
			}
			localStorage.setItem('cart', JSON.stringify(state));
			return [...state];

		case types.DELETE_CART_ITEM :
			index = findIndex(state, product);
			state.splice(index, 1);
			localStorage.setItem('cart', JSON.stringify(state));
			return [...state];

		default: return [...state];
	}
}

var findIndex = (cart, product) => {
	var index = -1;
	for (var i = 0; i < cart.length; i++) {
		if (cart[i].product.id === product.id) {
			console.log(i);
			index = i;
			break;
		}
	}
	return index;
}

export default myReducer;