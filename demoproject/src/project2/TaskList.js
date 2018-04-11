import React from 'react';
import TaskItem from './TaskItem';

export default class TaskList extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			filterName : '',
			filterSort : -1,
		}
	}

	onFilter = (event) => {
		var target = event.target;
		var name = target.name;
		var value = target.value;
			this.props.onFilter(
				name === 'filterName' ? value : this.state.filterName,
				name === 'filterSort' ? value : this.state.filterSort,
			);
		
		this.setState({
			[name] : value
		});
	}

	render(){

		var list = this.props.tasks.map((task, index)=>{
			return <TaskItem id={task.id} name={task.name} state={task.status} index={index} key={index} onUpdateStatus={this.props.onUpdateStatus} onDeleteTask={this.props.onDeleteTask} onUpdateTask={this.props.onUpdateTask}/>
		})

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
							<input type="text" name="filterName" className="form-control" value={this.state.filterName} onChange={this.onFilter} />
						</td>
						<td>
							<select name="filterSort" className="form-control" required="required" value={this.state.filterSort} onChange={this.onFilter}>
								<option value={-1}>All</option>
								<option value={0}>Active</option>
								<option value={1}>Deactive</option>
							</select>
						</td>
						<td>
						</td>
					</tr>
					{list}
				</tbody>
			</table>
		);
	}
}