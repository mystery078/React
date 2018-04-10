import React from 'react';

export default class Result extends React.Component{

	styleResult = () =>{
		return{
			color: this.props.color,
			fontSize: this.props.size
		}
	}

	render(){
		return(
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<p>Color: {this.props.color} - FontSize: {this.props.size}px</p>
					<div id="content" style={this.styleResult()}>
						Text demo
					</div>
				</div>
			</div>
		);
	}
}