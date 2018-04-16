import React from 'react';
import TaskForm from './TaskForm';
import Search from './Search';
import Sort from './Sort';
import TaskList from './TaskList';
// import _, { findIndex } from 'lodash';
import {connect} from 'react-redux';
import * as action from './actions/index';


 class Project2 extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			taskEditing: {},
			filter: {
				name: '',
				status: -1
			},
			keyword: '',
			sortBy: 'name',
			sortValue: 1

		}
	}

	onGenerateData = () => {
		// console.log('generate data');
		var tasks = [
			{
				id: this.generateId(),
				name: 'Task 1',
				status: true

			},
			{
				id: this.generateId(),
				name: 'Task 2',
				status: true

			},
			{
				id: this.generateId(),
				name: 'Task 3',
				status: false

			},
		]
		this.setState({
			tasks: tasks
		})
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}

	

	toggleAddForm = () => {
		var {itemEditing} = this.props
		if (itemEditing && itemEditing.id !== '') {
			this.props.onOpenForm();
		}else{
			
			this.props.onToggleForm();
		}
		this.props.onClearTask({
			id: '',
			name: '',
			status: false,
		});
	// 	if (this.state.isDisplayForm && this.state.taskEditing !== null) {
	// 		this.setState({
	// 			isDisplayForm: true,
	// 			taskEditing: null
	// 		})
	// 	}else{
	// 		this.setState({
	// 			isDisplayForm: !this.state.isDisplayForm,
	// 			taskEditing: null
	// 		})
	// 	}
	}

	// onCloseForm = () => {
	// 	this.setState({
	// 		isDisplayForm: false,
	// 	})
	// }

	// onOpenForm = () => {
	// 	this.setState({
	// 		isDisplayForm: true,
	// 	})
	// }

	findIxdex = (id) => {
		let result= -1;
		this.state.tasks.forEach( function(task, index) {
			if (id === task.id) {
				result = index;
			}
		});
		return result;
	}

	// onUpdateStatus = (id) => {
	// 	var tasks = this.state.tasks;
	// 	// var index = this.findIxdex(id);
	// 	var index = findIndex(tasks, (task)=>{
	// 		return task.id === id;
	// 	})
		
	// 	if (index !== -1) {
	// 		tasks[index].status = !tasks[index].status;
	// 	}
	// 	this.setState({
	// 		tasks: tasks,
	// 	});
	// 	localStorage.setItem('tasks', JSON.stringify(tasks));
	// }	

	// onDeleteTask = (id) => {
	// 	var tasks = this.state.tasks;
	// 	var index = this.findIxdex(id);
		
	// 	if (index !== -1) {
	// 		tasks.splice(index, 1);
	// 	}
	// 	this.setState({
	// 		tasks: tasks,
	// 	});
	// 	localStorage.setItem('tasks', JSON.stringify(tasks));
	// }

	// onUpdateTask = (id) => {
	// 	var tasks = this.state.tasks;
	// 	var index = this.findIxdex(id);
	// 	var taskEditing = tasks[index];
	// 	this.setState({
	// 		taskEditing: taskEditing,
	// 	})
	// 	this.onOpenForm();	
	// }

	// onFilter = (name, status) => {
	// 	// console.log(name + '-' + status + typeof status);
	// 	this.setState({
	// 		filter: {
	// 			name: name.toLowerCase(),
	// 			status: parseInt(status, 10)
	// 		}
	// 	})
	// }

	// onSearch = (keyword) => {
	// 	this.setState({
	// 		keyword: keyword.toLowerCase()
	// 	})
	// }

	// onSort = (sortBy, sortValue) => {
	// 	// console.log(sortBy + '-'+sortValue);
	// 	this.setState({
	// 		sortBy: sortBy,
	// 		sortValue: sortValue
	// 	})
	// 	// console.log(this.state.sortBy + ' - ' + this.state.sortValue);
	// }

	render(){
		var { filter, keyword, sortBy, sortValue } = this.state;
		// console.log(this.state.sortBy + ' - ' + this.state.sortValue);

		if (filter) {
			// if (filter.name) {
			// 	tasks = tasks.filter((task)=>{
			// 		// console.log(task);
			// 		// console.log(task.name);	
			// 		// console.log(task.name.toLowerCase());
			// 		// console.log(task.name.indexOf(filter.name)  !== -1);
			// 		return task.name.toLowerCase().indexOf(filter.name)  !== -1;
			// 	})
			// }
			// tasks = tasks.filter((task) => {
			// 	if (filter.status === -1) {
			// 		return task;
			// 	}else{
			// 		return task.status === (filter.status === 0 ? true : false) ;
			// 	}
			// })
		}

		if (keyword) {
			// tasks = tasks.filter((task)=>{
			// 	return task.name.toLowerCase().indexOf(keyword) !== -1;
			// })

			// tasks = _.filter(tasks, (task) => {
				// return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
			// });
		}
		if (sortBy && sortValue) {
			if (sortBy === 'name') {
				// tasks.sort((a,b)=> {
				// 	if (a.name.toLowerCase() > b.name.toLowerCase()) {
				// 		return sortValue
				// 	}else if(a.name.toLowerCase() < b.name.toLowerCase()){
				// 		return -sortValue;
				// 	}else{
				// 		return 0;
				// 	}
				// })
			}else{
				// tasks.sort((a,b)=> {
				// 	if (a.status > b.status) {
				// 		return -sortValue
				// 	}else if(a.status < b.status){
				// 		return sortValue;
				// 	}else{
				// 		return 0;
				// 	}
				// })
			}
		}
		return(
			<div className="container">	
				<div className="text-center">
					<h1>Task Manager</h1>
				</div>
				<hr />

				<div className="row">
					<div className={this.props.isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
						{this.props.isDisplayForm ? <TaskForm/> : ''}
					</div>
					<div className={this.props.isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
						<div className="form-group">
							<button type="button" className="btn btn-primary" onClick={this.toggleAddForm}><span className="fa fa-plus"></span> Add Task</button> &nbsp;
							<button type="button" className="btn btn-danger" onClick={this.onGenerateData}><span className="fa fa-plus"></span> Generate Data</button>
						</div>
						<div className="form-group">
							<div className="row">
								<Search onSearch={this.onSearch} />
								<Sort onSort={this.onSort}/>
							</div>
						</div>
						<TaskList  onFilter={this.onFilter}/>
					</div>
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
}

const mapDispatchToProps = (dispatch, props) => {
	return{
		onToggleForm : () => {
			dispatch(action.toggleForm())
		},
		onClearTask : (task) => {
			dispatch(action.editTask(task));
		},
		onOpenForm: () => {
			dispatch(action.openForm());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Project2);