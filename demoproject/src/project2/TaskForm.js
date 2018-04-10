import React from 'react';

export default class TaskForm extends React.Component{
	render(){
		return(
			<div className="panel panel-warning">
				<div className="panel-heading">
					<h3 className="panel-title">Add Task <span className="fa fa-times-circle pull-right"></span></h3>
					
				</div>
				<div className="panel-body">
					<form>
					
						<div className="form-group">
							<label>Name</label>
							<input type="text" className="form-control" />
						</div>
						<div className="form-group">
							<label >State</label>
							<select name="" id="input" className="form-control" required="required">
								<option value={0}>Active</option>
								<option value={1}>Deactive</option>
							</select>
						</div>
						<div className="text-center">
							<button type="button" className="btn btn-info"><span className="fa fa-plus"></span>Save</button>&nbsp;&nbsp;&nbsp;
							<button type="button" className="btn btn-danger"><span className="fa fa-close"></span>Cancel</button>
						</div>
					
					</form>
				</div>
			</div>
		);
	}
}