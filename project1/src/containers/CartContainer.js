import React, { Component } from 'react';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import * as Message from './../constants/Message';
import * as action from './../actions/index';
import {connect} from 'react-redux';


class CartContainer extends Component {
    constructor(props) {
        super(props);
    
        this.state = {};
    }

    showCartItem = (carts) => {
        var result = <tr><td>{Message.MES_CART_EMPTY}</td></tr>;
        if (carts.length) {
            result = carts.map((cart, index)=>{
                return <CartItem key={index} cart={cart} onDeleteCartItem={this.props.onDeleteCartItem} onUpdateCartItem={this.props.onUpdateCartItem} onChangeMessage={this.props.onChangeMessage}/>
            })
        }
        return result;
    }

    showCartResult = (carts) => {
        var result = null;
        var total = 0;
        if (carts.length) {
            carts.map((cart, index) => {
                total += cart.product.price * cart.quantity;
            })
            result = <CartResult result={total}/>;
        }
        return result;
    }
    render() {
        var {carts} = this.props;
        return (
            <Cart>
                {this.showCartItem(carts)}
                {this.showCartResult(carts)}
            </Cart>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        carts : state.cart

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteCartItem : (product) => {
            dispatch(action.deleteCartItem(product));
        },
        onUpdateCartItem: (product, quantity) => {
            dispatch(action.updateCartItem(product, quantity));
        },
        onChangeMessage: (message) => {
            dispatch(action.changeMessage(message));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
