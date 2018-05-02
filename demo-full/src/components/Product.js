import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Product extends Component {

	deleteProduct = (id) => {
		if (confirm('Are you sure to delete this product')) { //eslint-disable-line
			this.props.deleteProduct(id);
		}
	}

    render() {
    	var {product, index} = this.props;
        return (
            
            <tr>
                <td>{index+1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}$</td>
                <td><span className="label label-danger">{product.status === true ? 'ok' : 'out'}</span></td>
                <td>
                    <Link to={`/product/update/${product.id}`} className="btn btn-success" >Update</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" className="btn btn-danger" onClick={() => this.deleteProduct(product.id)}>Delete</button>
                </td>
            </tr>
            
        );
    }
}

export default Product;
