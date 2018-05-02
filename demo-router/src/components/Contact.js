import React, { Component } from 'react';
import {Prompt} from 'react-router-dom';

class Contact extends Component {

	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		isDone : false,
	  	};
	}

	render() {
		var {isDone} = this.state;
		console.log(isDone);
		return (
			<div>
				Contact page <br />
				<button type="button" className="btn btn-success" onClick={() => this.setState({isDone: false})}>Allow</button> <br />
				<button type="button" className="btn btn-danger" onClick={() => this.setState({isDone: true})}>Warning</button> <br />
				<Prompt when={isDone} message={(location) => (`Are you sure to move to ${location.pathname}`)}/>
			</div>
		);
	}
}

export default Contact;
