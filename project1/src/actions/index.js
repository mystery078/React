import * as types from './../constants/ActionTypes';

export const addCart = (product, quantity) => {
	return {
		type: types.ADD_CART,
		product,
		quantity
	}
}

export const updateCartItem = (product, quantity) => {
	return {
		type: types.UPDATE_CART_ITEM,
		product, 
		quantity
	}
}

export const deleteCartItem = (product) => {
	return {
		type: types.DELETE_CART_ITEM,
		product
	}
}

export const changeMessage = (message) => {
	return {
		type: types.CHANGE_MESSAGE,
		message
	}
}