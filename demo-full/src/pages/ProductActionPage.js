import React, { Component } from 'react';
import apiCaller from './../api/apiCaller';
import {Link} from 'react-router-dom';

class ProductActionPage extends Component {

	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		id: '',
	  		name: '',
	  		price: 0,
	  		status: false,
	  	};
	}
	componentWillMount() {
		var {match, history} = this.props;
		if (match) {
			this.setState({
				id: match.params.id
			})
			apiCaller(`products/${match.params.id}`,'GET',null).then(res => {
				if (res.status === 200) {
					this.setState({
						name: res.data.name,
						price: res.data.price,
						status: res.data.status,
					})
				}else{
					console.log(history.goBack());
				}
			})
		}
	}

	onChange = (e) => {
		var target = e.target;
		var name = target.name;
		var value = target.type === 'checkbox' ? target.checked : target.value;

		this.setState({
			[name] : value
		})


	}

	submitForm = (e) => {
		e.preventDefault();
		if (this.state.id !== '') {
			apiCaller(`products/${this.state.id}`, 'PUT', {
				name: this.state.name,
				price: this.state.price,
				status: this.state.status,
			}).then(res => {
				if (res.status === 200) {
					console.log(this.props.history.goBack());
				}
				// console.log(this.props.history.push('/'));
			})
		}else{
			apiCaller('products', 'POST', {
				name: this.state.name,
				price: this.state.price,
				status: this.state.status,
			}).then(res => {
				console.log(res);
				console.log(this.props.history.goBack());
				// console.log(this.props.history.push('/'));
			})
		}
	}

    render() {
    	
    	var titlePage = this.state.id !== '' ? 'Update Product' : 'Add Product';

        return (
        	<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        		<form onSubmit={this.submitForm}>
        			<legend>{titlePage}</legend>
        		
        			<div className="form-group">
        				<label>Product name</label>
        				<input type="text" className="form-control" placeholder="Input field" name="name" value={this.state.name} onChange={this.onChange}/>
        			</div>
        			<div className="form-group">
        				<label>Product price</label>
        				<input type="number" className="form-control" placeholder="Input field" name="price" value={this.state.price} onChange={this.onChange}/>
        			</div>
        			<div className="form-group">
        				<label>Status</label>
        				<div className="checkbox">
        					<label>
        						<input type="checkbox" value={this.state.status} name="status" onChange={this.onChange}/>
        						Ok
        					</label>
        				</div>
        			</div>
        		
        			
        			<button type="submit" className="btn btn-primary">Submit</button> &nbsp;&nbsp;&nbsp;
        			<Link to='/products' className="btn btn-warning">Back</Link>

        		</form>
        	</div>
        );
    }
}

export default ProductActionPage;
