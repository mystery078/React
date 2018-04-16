import React from 'react';
import {connect} from 'react-redux';
import * as action from './actions/index';

class TaskForm extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			id: '',
			name: '',
			status: false,
		}
	}

	
	componentWillMount(){
		// console.log(this.props.itemEditing);

		if (this.props.itemEditing) {
			this.setState({
				id: this.props.itemEditing.id,
				name: this.props.itemEditing.name, 
				status: this.props.itemEditing.status
			})
		}else{
			this.setState({
				id: '',
				name: '', 
				status: false
			})
		}
	}


	componentWillReceiveProps(nextProps){
		// console.log(nextProps);
		if (nextProps && nextProps.itemEditing) {
			this.setState({
				id: nextProps.itemEditing.id,
				name: nextProps.itemEditing.name, 
				status: nextProps.itemEditing.status
			})
		}else{
			this.setState({
				id: '',
				name: '', 
				status: false
			})
		}
	}

	closeForm = () => {
		this.props.onCloseForm();
	}

	onChange = (event) =>{
		var target = event.target;
		var name = target.name;
		var value = target.value;
		if (name === 'status') {
			value = target.value === 'true' ? true : false;
		}
		this.setState({
			[name] : value
		})
	}

	submitForm = (e) => {
		// console.log(this.state.id);
		e.preventDefault();
		// this.props.onAddTask(this.state);
		if (this.state.id !== '') {
			// console.log('update');
			this.props.onUpdateTask(this.state);
		}else{
			// console.log('add');
			this.props.onAddTask(this.state);
		}
		this.clearInput();
		this.closeForm();
	}

	clearInput = () => {
		this.setState ({
			id: '',
			name: '',
			status: false,
		})
	}

	render(){
		// console.log(this.state);
		return(
			<div className="panel panel-warning">
				<div className="panel-heading">
					<h3 className="panel-title">
						{this.state.id !== '' ? 'Update Task' : 'Add Task'}
						<span className="fa fa-times-circle pull-right" onClick={this.closeForm}></span>
					</h3>
					
				</div>
				<div className="panel-body">
					<form onSubmit={this.submitForm}>
					
						<div className="form-group">
							<label>Name</label>
							<input type="text" name="name" className="form-control" value={this.state.name} onChange={this.onChange} />
						</div>
						<div className="form-group">
							<label >State</label>
							<select name="status" id="input" className="form-control" required="required" value={this.state.status} onChange={this.onChange}>
								<option value={true}>Active</option>
								<option value={false}>Deactive</option>
							</select>
						</div>
						<div className="text-center">
							<button type="submit" className="btn btn-info"><span className="fa fa-plus"></span>Save</button>&nbsp;&nbsp;&nbsp;
							<button type="button" className="btn btn-danger" onClick={this.clearInput}><span className="fa fa-close"></span>Cancel 1</button>
						</div>
					
					</form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isDisplayForm: state.isDisplayForm,
		itemEditing: state.itemEditing
	}
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		onAddTask : (task) => {
			dispatch(action.addTask(task));
		},
		onOpenForm: () => {
			dispatch(action.openForm());
		},
		onCloseForm: () => {
			dispatch(action.closeForm());
		},
		onUpdateTask: (task) => {
			dispatch(action.updateTask(task));
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);