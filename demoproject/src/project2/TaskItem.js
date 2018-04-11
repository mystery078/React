import React from 'react';


export default class TaskItem extends React.Component{

	onUpdateStatus = () => {
		this.props.onUpdateStatus(this.props.id);
		// console.log(this.props.id);
	}

	onDeleteTask = () => {
		this.props.onDeleteTask(this.props.id);
	}

	onUpdateTask = () => {
		this.props.onUpdateTask(this.props.id);
	}

	render(){
		return(
			
			<tr>
				<td>{this.props.index + 1}</td>
				<td>{this.props.name}</td>
				<td className="text-center"><span onClick={this.onUpdateStatus} className={this.props.state ? 'label label-success' : 'label label-danger'}>{this.props.state ? 'Active' : 'Deactive'}</span></td>
				<td className="text-center">
					<button type="button" className="btn btn-warning" onClick={this.onUpdateTask}><span className="fa fa-pencil"></span>Update</button> &nbsp;&nbsp;&nbsp;
					<button type="button" className="btn btn-danger" onClick={this.onDeleteTask}><span className="fa fa-trash"></span>Delete</button>
				</td>
			</tr>
			
		);
	}
}