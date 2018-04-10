import React from 'react';


export default class TaskItem extends React.Component{
	render(){
		return(
			
			<tr>
				<td>1</td>
				<td>Task 1</td>
				<td className="text-center"><span className="label label-danger">Active</span></td>
				<td className="text-center">
					<button type="button" className="btn btn-warning"><span className="fa fa-pencil"></span>Update</button> &nbsp;&nbsp;&nbsp;
					<button type="button" className="btn btn-danger"><span className="fa fa-trash"></span>Delete</button>
				</td>
			</tr>
			
		);
	}
}