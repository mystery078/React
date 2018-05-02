import React, { Component } from 'react';
import * as Message from './../constants/Message';

class CartItem extends Component {

    onUpdateItem = (product, quantity) => {
        this.props.onUpdateCartItem(product, quantity);
        this.props.onChangeMessage(Message.MES_UPDATE_CART_SUCCESS);
    }

    onDeleteItem = (product) => {
        this.props.onDeleteCartItem(product);
        this.props.onChangeMessage(Message.MES_DELETE_CART_SUCCESS);
    }

    render() {
        var {cart} = this.props;
        return (
            <tr>
                <th scope="row">
                    <img src={cart.product.image} alt="{cart.product.name}" className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{cart.product.name}</strong>
                    </h5>
                </td>
                <td>{cart.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{cart.quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light" onClick={ () => this.onUpdateItem(cart.product, -1) }>
                            <a>—</a>
                        </label>
                        <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light" onClick={ () => this.onUpdateItem(cart.product, 1) }>
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{cart.product.price * cart.quantity}$</td>
                <td>
                    <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item" onClick={() => this.onDeleteItem(cart.product)}>
                        X
                    </button>
                </td>
            </tr>
        )
    }
}

export default CartItem;
