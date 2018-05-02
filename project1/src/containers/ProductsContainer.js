import React, { Component } from 'react';
import Products from './../components/Products';
import Product from './../components/Product';
import * as action from './../actions/index';
import {connect} from 'react-redux';


class ProductsContainer extends Component {
    constructor(props) {
        super(props);
    
        this.state = {};
    }

    showProducts = (products) => {
        var result = null;
        if (products.length) {
            result = products.map((product, index)=>{
                return <Product key={index} product={product} onAddCart={this.props.onAddCart} onChangeMessage={this.props.onChangeMessage}/>
            })
        }
        return result;
    }
    render() {
        var {products} = this.props;
        return (
                
            <Products>
                {this.showProducts(products)};
            </Products>
        
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        products : state.products

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddCart : (product) => {
            dispatch(action.addCart(product,1));
        },
        onChangeMessage : (message) => {
            dispatch(action.changeMessage(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
