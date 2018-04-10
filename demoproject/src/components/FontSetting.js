import React from 'react';

export default class FontSetting extends React.Component{

	inscreaseFont = () => {
		let font = this.props.size + 2;
		if (font <= 36) {
			this.props.onReceiveSize(font);
		}
	}
	decreaseFont = () => {
		let font = this.props.size - 2;
		if (font >= 8) {
			this.props.onReceiveSize(font);
		}
	}

	render(){
		return(
			<div className="panel panel-warning">
				<div className="panel-heading">
					<h3 className="panel-title">Size: {this.props.size}px</h3>
				</div>
				<div className="panel-body">
					<button type="button" className="btn btn-success" onClick={this.inscreaseFont}>Tăng</button>&nbsp;&nbsp;&nbsp;
					<button type="button" className="btn btn-success" onClick={this.decreaseFont}>Giảm</button>
				</div>
			</div>
		);
	}
}