import React, { Component } from 'react';
import Products from './../components/Products';
import Product from './../components/Product';
import {connect} from 'react-redux';
import apiCaller from './../api/apiCaller';
import {Link} from 'react-router-dom';

class ProductsPage extends Component {

	constructor(props) {
	 	super(props);
	
	  	this.state = {
	  		products: [],
	  	};
	}

	componentWillMount() {
		apiCaller('products', 'GET', null).then(res => {
			this.setState({
				products: res.data
			})
		})
	}

	findIndex(products, id){
		var result = -1;
		if (products.length) {
			products.map((item, index) => {
				if (item.id === id) {
					result = index;
				}
			})
		}
		return result;
	}

	deleteProduct = (id) => {
		apiCaller(`products/${id}`,'DELETE', null).then(res => {
			if (res.status === 200) {
				var index = this.findIndex(this.state.products, id);
				if (index !== -1) {
					this.state.products.splice(index, 1);
					this.setState({
						products: [...this.state.products]
					})
				}
			}
		})

	}

	showProduct = (products) => {
		var result = <tr><td>Chưa có sản phẩm</td></tr>;
		if (products.length) {
			result = products.map((item, index)=> {
				return <Product key={index} product={item} index={index} deleteProduct={this.deleteProduct}/>
			})
		}
		return result;
	}

    render() {
    	var {products} = this.props;
    	console.log(products)
    	// var {products} = this.state;
    	// var products = [];
    	
        return (
        	<div className="container">
                <Link to="/product/add" className="btn btn-info">Add Product</Link><br /><br />
           		<Products>
           			{this.showProduct(products)}
           		</Products>
        	</div>
        );
    }
}

const mapStateToProps = (state) => {
	return {
		products: state.products
	}
}

export default connect(mapStateToProps, null)(ProductsPage);
