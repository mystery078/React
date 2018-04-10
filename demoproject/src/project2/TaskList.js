import React from 'react';
import TaskItem from './TaskItem';

export default class TaskList extends React.Component{
	render(){
		return(
			<table className="table table-bordered table-hover">
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>State</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td></td>
						<td>
							<input type="text" name="" className="form-control" value=""  />
						</td>
						<td>
							<select name="" className="form-control" required="required">
								<option value="">Deactive</option>
								<option value="">Active</option>
							</select>
						</td>
						<td>
						</td>
					</tr>
					<TaskItem/>
				</tbody>
			</table>
		);
	}
}