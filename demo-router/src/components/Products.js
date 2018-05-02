import React, { Component } from 'react';
import { Route, Link, Redirect} from 'react-router-dom';
import Product from './Product';

class Products extends Component {
	render() {

		var products = [
			{
				id: 'pd1',
				name: 'Iphone 6',
				image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2018/1/4/636506509528306435_iphone6-32GB-2.jpg',
				description: 'San pham demo',
				alias: 'iphone-6',
				price: 100,
				stock: 10,
				rating: 4
			},
			{
				id: 'pd2',
				name: 'Iphone 7',
				alias: 'iphone-7',
				image: 'https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-hh-600x600.jpg',
				description: 'San pham demo 2 ',
				price: 120,
				stock: 5,
				rating: 3
			},
			{
				id: 'pd3',
				name: 'Iphone 8',
				alias: 'iphone-8',
				image: 'https://cdn3.tgdd.vn/Products/Images/42/114113/iphone-8-64gb-hh-600x600.jpg',
				description: 'San pham demo 3',
				price: 150,
				stock: 3,
				rating: 5
			},
		];

		var {match} = this.props;

		// console.log(match);

		var listProduct = products.map((item, index)=> {
			return (
				<li className="list-group-item" key={index}>
					<Link to={`${match.url}/${item.alias}-${item.id}`}>
						{item.id} - {item.name} - {item.price}
					</Link>
				</li>
			)
		})

		var {location} = this.props;
		console.log(location)
		return (
			<div className="container">
				<h1>Product List</h1>
				<div className="row">
					<ul className="list-group">
						{listProduct}
					</ul>
				</div>

				<div className="row">
					<Route path="/products/:alias-:id" component={Product}/>
				</div>

				<button type="button" className="btn btn-primary" onClick={() => localStorage.removeItem('user')}>Logout</button>
			</div>
		);
		
	}
}

export default Products;
