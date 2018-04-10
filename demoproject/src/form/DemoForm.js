import React from 'react';

export default class DemoForm extends React.Component{

	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		username: '',
	  		password: '',
	  		desc: '',
	  		gender: 1,
	  		rdLang: 1,
	  		state: true
	  	};
	}

	onChangeInput = (event) =>{
		// this.setState({
		// 	username: event.target.value
		// })
		var target = event.target;
		var name = target.name;
		var value = target.type === 'checkbox' ? target.checked : target.value;

		this.setState({
			[name]: value
		})
	}

	onSubmit = (event) =>{
		event.preventDefault();

		console.log(this.state);
	}

	render(){
		return(
			<div className="container">
				<div className="mt-50">
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<div className="panel panel-success">
								<div className="panel-heading">
									<h3 className="panel-title">Form</h3>
								</div>
								<div className="panel-body">
									<form onSubmit={this.onSubmit}>
									
										<div className="form-group">
											<label>Username</label>
											<input type="text" className="form-control" name="username" onChange={this.onChangeInput} value={this.state.username}/>
										</div>
										<div className="form-group">
											<label>Password</label>
											<input type="password" className="form-control" name="password" onChange={this.onChangeInput} value={this.state.password}/>
										</div>
										<div className="form-group">
											<label>Description</label>
											<textarea className="form-control" rows="3" name="desc" onChange={this.onChangeInput} value={this.state.desc}/>
										</div>
										<div className="form-group">
											<label>Gender</label>
											<select name="gender" className="form-control" required="required" onChange={this.onChangeInput} value={this.state.gender}>
												<option value={0}>Male</option>
												<option value={1}>Female</option>
											</select>
										</div>
										<div className="form-group">
											<label>Description</label>
											<div className="radio">
												<label>
													<input type="radio" name="rdLang" value="0" onChange={this.onChangeInput} checked={this.state.rdLang === 0}/>
													Vietnamese
												</label>
											</div>
											<div className="radio">
												<label>
													<input type="radio" name="rdLang" value="1" onChange={this.onChangeInput}  checked={this.state.rdLang === 1}/>
													English
												</label>
											</div>
										</div>
										<div className="form-group">
											<label>Description</label>
											<div className="checkbox">
												<label>
													<input type="checkbox" value={true} checked={this.state.state === true} name="state" onChange={this.onChangeInput} />
													Active
												</label>
											</div>
										</div>
										
									
										<button type="submit" className="btn btn-primary">Submit</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}