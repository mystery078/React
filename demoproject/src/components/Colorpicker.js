import React from 'react';

export default class Colorpicker extends React.Component{
	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		colors : ['red','green','yellow','blue']
	  	};
	}

	styleColor = (color) =>{
		return{
			backgroundColor: color
		}
	}

	onChangeColor(color){
		this.props.onReceiveColor(color);
	}
	render(){
		var listColor = this.state.colors.map((color, index) => {
			return <span className={this.props.color === color ? 'active colorBox' : 'colorBox'} key={index} style={this.styleColor(color)} onClick={() => this.onChangeColor(color)}></span>
		})
		return(
			<div className="panel panel-success">
				<div className="panel-heading">
					<h3 className="panel-title">Color</h3>
				</div>
				<div className="panel-body">
					{listColor}
					<hr />
				</div>
			</div>
		);
	}
}