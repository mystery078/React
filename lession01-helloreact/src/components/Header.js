import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
            	<div className="container-fluid">
            		<a className="navbar-brand">Props</a>
            		<ul className="nav navbar-nav">
            			<li className="active">
            				<a>Trang chủ</a>
            			</li>
            			<li>
            				<a>Danh mục sản phẩm</a>
            			</li>
            		</ul>
            	</div>
            </nav>
        );
    }
}

export default Header;