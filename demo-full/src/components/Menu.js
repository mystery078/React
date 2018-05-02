import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';


const menus = [
	{
		to: '/',
		label: 'Home',
		exact: true,
	},
	{
		to: '/products',
		label: 'Product Manager',
		exact: true,
	},
]
const CustomMenu = ({label, to, exact}) => {
	return(
		<Route path={to} exact={exact} children={({match})=> {
			return 	<li className={match ? 'active' : ''}>
                       	<Link to={to}>{label}</Link>
                    </li>
		}} />
	)
}
class Menu extends Component {

	showMenu = (menus) => {
		var result = null;

		if (menus.length) {
			result = menus.map((item, index) => {
				return <CustomMenu key={index} label={item.label} to={item.to} exact={item.exact}/>
			})
		}

		return result;
	}

    render() {
        return (
            <nav className="navbar navbar-inverse">
                <a className="navbar-brand">Call API</a>
                <ul className="nav navbar-nav">
                   	{this.showMenu(menus)}
                </ul>
            </nav>
        );
    }
}

export default Menu;
