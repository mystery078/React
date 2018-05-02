import React from 'react';
import TaskItem from './TaskItem';
import * as action from './actions/index';
import { connect } from 'react-redux' ;


class TaskList extends React.Component{

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
		this.props.onFilter({
			filterName: (name === 'filterName' ? value : this.state.filterName),
			filterSort: (name === 'filterSort' ? value : this.state.filterSort),
		});		
		this.setState({
			[name] : value
		});
	}

	render(){
		// console.log(this.props.tasks);
		// console.log(this.props.tasks);
		var {tasks, filterTable, searchTask, sortTask} = this.props;
		// console.log(sortTask);
		if (filterTable) {
			if (filterTable.name) {
				tasks = tasks.filter((task)=>{
					// console.log(task);
					// console.log(task.name);	
					// console.log(task.name.toLowerCase());
					// console.log(task.name.indexOf(filter.name)  !== -1);
					return task.name.toLowerCase().indexOf(filterTable.name)  !== -1;
				})
			}
			tasks = tasks.filter((task) => {
				if (filterTable.status === -1) {
					return task;
				}else{
					return task.status === (filterTable.status === 0 ? true : false) ;
				}
			})
		}
		if(searchTask){
			tasks = tasks.filter((task)=>{
				return task.name.toLowerCase().indexOf(searchTask)  !== -1;
			})
		}
		if (sortTask.name && sortTask.status) {
			if (sortTask.name === 'name') {
				tasks.sort((a,b)=> {
					if (a.name.toLowerCase() > b.name.toLowerCase()) {
						return sortTask.status
					}else if(a.name.toLowerCase() < b.name.toLowerCase()){
						return -sortTask.status;
					}else{
						return 0;
					}
				})
			}else{
				tasks.sort((a,b)=> {
					if (a.status > b.status) {
						return -sortTask.status
					}else if(a.status < b.status){
						return sortTask.status;
					}else{
						return 0;
					}
				})
			}
		}
		var list = tasks.map((task, index)=>{
			// console.log(task);
				return <TaskItem task={task} index={index} key={index}  onUpdateTask={this.props.onUpdateTask}/>
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
const mapStateToProps = (state) => {
	// console.log(state);
	return {
		tasks : state.tasks,
		filterTable: state.filterTable,
		searchTask : state.searchTask,
		sortTask: state.sortTask
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onFilter : (filter) => {
			dispatch(action.filterTable(filter));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
