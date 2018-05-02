import React from 'react';
import {connect} from 'react-redux';
import * as action from './actions/index';

class TaskItem extends React.Component{

	onUpdateStatus = () => {
		this.props.onToggleStatus(this.props.task.id);
		// console.log(this.props.id);
	}

	onDeleteTask = () => {
		this.props.onDeleteTask(this.props.task.id);
		this.props.onCloseForm();
	}

	onUpdateTask = () => {
		this.props.onOpenForm();
		this.props.onItemEditing(this.props.task);
	}

	render(){
		var {task} = this.props;
		return(
			
			<tr>
				<td>{this.props.index + 1}</td>
				<td>{task.name}</td>
				<td className="text-center"><span onClick={this.onUpdateStatus} className={task.status ? 'label label-success' : 'label label-danger'}>{task.status ? 'Active' : 'Deactive'}</span></td>
				<td className="text-center">
					<button type="button" className="btn btn-warning" onClick={this.onUpdateTask}><span className="fa fa-pencil"></span>Update</button> &nbsp;&nbsp;&nbsp;
					<button type="button" className="btn btn-danger" onClick={this.onDeleteTask}><span className="fa fa-trash"></span>Delete</button>
				</td>
			</tr>
			
		);
	}
}

const mapStateToProps = () => {
	return {}
}

const mapDispatchToProps = (dispatch, props) => {
	return{
		onToggleStatus : (id) => {
			dispatch(action.toggleStatus(id));
		},
		onDeleteTask : (id) => {
			dispatch(action.deleteTask(id));
		},
		onCloseForm: () => {
			dispatch(action.closeForm());
		},
		onOpenForm: () => {
			dispatch(action.openForm());
		},
		onItemEditing : (task) => {
			dispatch(action.editTask(task));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);