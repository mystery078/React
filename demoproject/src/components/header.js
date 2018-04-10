import React from 'react';

export default class Header extends React.Component{
	render(){
		return(
			<nav className="navbar navbar-inverse">
				<div className="container-fluid">
					<a className="navbar-brand">Demo</a>
					<ul className="nav navbar-nav">
						<li className="active">
							<a>Home</a>
						</li>
						<li>
							<a>Products</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}