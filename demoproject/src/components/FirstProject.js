import React from 'react';
import Colorpicker from './Colorpicker';
import FontSetting from './FontSetting';
import Reset from './Reset';
import Result from './Result';

export default class FirstProject extends React.Component{

	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		color: 'red',
	  		fontSize: 15
	  	};
	}

	onChangeColor = (param) =>{
		this.setState({
			color: param
		})
	}

	onChangeSize = (param) =>{
		this.setState({
			fontSize: param
		})
	}

	setDefault = (param) =>{
		if (param === true) {
			this.setState({
				color: 'red',
				fontSize: 15
			})
		}
	}

	render(){
		return(
			<div className="container">
				<div className="settings mt-50">
					<div className="row">
						<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
							<Colorpicker color={this.state.color} onReceiveColor={this.onChangeColor}/>
						</div>
						<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
							<FontSetting size={this.state.fontSize} onReceiveSize={this.onChangeSize}/>

							<Reset onSetDefault={this.setDefault}/>
						</div>
					</div>
				</div>
				<div className="result">
					<Result color={this.state.color} size={this.state.fontSize}/>
				</div>
			</div>
		);
	}
}