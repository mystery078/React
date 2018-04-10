import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';

class App extends Component {

    render() {
        
        var products = [
            {
                id: 1,
                name: 'Iphone 6 Plus',
                price: 15000000,
                image: 'https://www.didongviet.vn/pub/media/catalog/product//i/p/iphone-6-plus-64gb-lock-my-like-new-didongviet-2_1.jpg',
                status: true
            },
            {
                id: 2,
                name: 'Iphone 7',
                price: 18000000,
                image: 'https://www.didongviet.vn/pub/media/catalog/product//i/p/iphone-6-plus-64gb-lock-my-like-new-didongviet-2_1.jpg',
                status: false
            },
            {
                id: 3,
                name: 'Iphone 7 Plus',
                price: 19000000,
                image: 'https://www.didongviet.vn/pub/media/catalog/product//i/p/iphone-6-plus-64gb-lock-my-like-new-didongviet-2_1.jpg',
                status: false
            },
            {
                id: 4,
                name: 'Iphone 8 Plus',
                price: 25000000,
                image: 'https://www.didongviet.vn/pub/media/catalog/product//i/p/iphone-6-plus-64gb-lock-my-like-new-didongviet-2_1.jpg',
                status: false
            }
        ];

        let elements = products.map((product, index) => {
            let result;
            if (product.status) {
                result = <Product key={index} name={product.name} price={product.price} image={product.image} />
            }
            return result;
        })

        return (
            <div >
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            {elements}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;