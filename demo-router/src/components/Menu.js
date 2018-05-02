import React, { Component } from 'react';
import { Route, Link, } from 'react-router-dom';

const menus = [
	{
		name: 'Home',
		to: '/',
		exact: true
	},
	{
		name: 'About',
		to: '/about',
		exact: true
	},
	{
		name: 'Contact',
		to: '/contact',
		exact: false
	},
	{
		name: 'Product',
		to: '/products',
		exact: false
	},
	{
		name: 'Login',
		to: '/login',
		exact: false
	},
	
];

class Menu extends Component {

	showMenu = (menus) => {
		var result = null;

		if (menus.length) {
			result = menus.map((item, index) => {
				return <MenuLink key={index} label={item.name} to={item.to} activeOnlyWhenExact={item.exact} />
			})
		}

		return result;
	}

	render() {
		return (
				<nav className="navbar navbar-inverse">
                    <div className="">
                        <ul className="nav navbar-nav">
                        	{this.showMenu(menus)}
                            
                        </ul>
                    </div>
                </nav>
		);
	}
}

const MenuLink = ({ label, to, activeOnlyWhenExact}) => {
    return(
        <Route path={to} exact={activeOnlyWhenExact} children={ ({match}) => {
            var active = match ? 'active a' : '';
            return (
                <li className={`menu-item ${active}`}>
                    <Link to={to}>{label}</Link>
                </li> 
            )
        }}/>
    )  
}

export default Menu;
