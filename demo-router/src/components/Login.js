import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class Login extends Component {
	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		username: '',
	  		password: '',
	  	};
	}

	changeInput = (e) => {
		var target = e.target;
		var name = target.name;
		var value = target.value;

		this.setState({
			[name] : value
		})
	}

	submitForm = (e) => {
		e.preventDefault();
		if (this.state.username === 'admin' && this.state.password === 'admin') {
			localStorage.setItem('user', JSON.stringify({username: this.state.username, password: this.state.password}));
		}else{
			console.log('wrong');
		}
	}

	render() {
		var userLogged = localStorage.getItem('user');
		var {location} = this.props;
		if (userLogged !== null) {
			return <Redirect to={{
				pathname: '/products',
				state : {
					from: location
				}
			}} />
		}
		return (
			<div className="row">
				<h2>You need to login to access products page </h2>
				<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-lg-offset-3">
					<form onSubmit={this.submitForm}>
						<legend>Login</legend>
					
						<div className="form-group">
							<label>Username</label>
							<input type="text" className="form-control" name="username" value={this.state.username} onChange={this.changeInput}/>
						</div>
						<div className="form-group">
							<label>Password</label>
							<input type="password" className="form-control" name="password" value={this.state.password} onChange={this.changeInput}/>
						</div>
					
						<button type="submit" className="btn btn-primary">Login</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;
