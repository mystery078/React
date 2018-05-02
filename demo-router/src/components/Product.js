import React, { Component } from 'react';

class Product extends Component {
	render() {
		var {match} = this.props;
		console.log(match)
		return (
			<div>
				Detail page  {match.params.alias} - {match.params.id}
			</div>
		);
	}
}

export default Product;
