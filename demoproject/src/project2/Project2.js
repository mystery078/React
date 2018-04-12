import React from 'react';
import TaskForm from './TaskForm';
import Search from './Search';
import Sort from './Sort';
import TaskList from './TaskList';
import _, { findIndex } from 'lodash';



export default class Project2 extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			tasks : [],
			isDisplayForm: false,
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

	componentWillMount(){
		if (localStorage && localStorage.getItem('tasks')) {
			var tasks = JSON.parse(localStorage.getItem('tasks'));
			this.setState({
				tasks: tasks,
				isDisplayForm: false,
			})
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

	s4(){
		return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	}

	generateId(){
		return this.s4()+this.s4()+'-'+this.s4()+'-'+this.s4()+'-'+this.s4()+'-'+this.s4()+this.s4();
	}

	toggleAddForm = () => {
		if (this.state.isDisplayForm && this.state.taskEditing !== null) {
			this.setState({
				isDisplayForm: true,
				taskEditing: null
			})
		}else{
			this.setState({
				isDisplayForm: !this.state.isDisplayForm,
				taskEditing: null
			})
		}
	}

	onCloseForm = () => {
		this.setState({
			isDisplayForm: false,
		})
	}

	onOpenForm = () => {
		this.setState({
			isDisplayForm: true,
		})
	}

	onAddTask = (data) => {
		var tasks = this.state.tasks;
		if (data.id === '') {
			data.id =this.generateId();
			tasks.push(data);
		}else{
			var index = this.findIxdex(data.id);
			tasks[index] = data;
			this.setState({
				taskEditing: null
			})
		}
		this.setState({
			tasks: tasks
		})
		localStorage.setItem('tasks', JSON.stringify(tasks));
		// console.log(tasks);
	}

	findIxdex = (id) => {
		let result= -1;
		this.state.tasks.forEach( function(task, index) {
			if (id === task.id) {
				result = index;
			}
		});
		return result;
	}

	onUpdateStatus = (id) => {
		var tasks = this.state.tasks;
		// var index = this.findIxdex(id);
		var index = findIndex(tasks, (task)=>{
			return task.id === id;
		})
		
		if (index !== -1) {
			tasks[index].status = !tasks[index].status;
		}
		this.setState({
			tasks: tasks,
		});
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}	

	onDeleteTask = (id) => {
		var tasks = this.state.tasks;
		var index = this.findIxdex(id);
		
		if (index !== -1) {
			tasks.splice(index, 1);
		}
		this.setState({
			tasks: tasks,
		});
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}

	onUpdateTask = (id) => {
		var tasks = this.state.tasks;
		var index = this.findIxdex(id);
		var taskEditing = tasks[index];
		this.setState({
			taskEditing: taskEditing,
		})
		this.onOpenForm();	
	}

	onFilter = (name, status) => {
		// console.log(name + '-' + status + typeof status);
		this.setState({
			filter: {
				name: name.toLowerCase(),
				status: parseInt(status, 10)
			}
		})
	}

	onSearch = (keyword) => {
		this.setState({
			keyword: keyword.toLowerCase()
		})
	}

	onSort = (sortBy, sortValue) => {
		// console.log(sortBy + '-'+sortValue);
		this.setState({
			sortBy: sortBy,
			sortValue: sortValue
		})
		// console.log(this.state.sortBy + ' - ' + this.state.sortValue);
	}

	render(){
		var { filter, tasks, keyword, sortBy, sortValue } = this.state;
		// console.log(this.state.sortBy + ' - ' + this.state.sortValue);

		if (filter) {
			if (filter.name) {
				tasks = tasks.filter((task)=>{
					// console.log(task);
					// console.log(task.name);	
					// console.log(task.name.toLowerCase());
					// console.log(task.name.indexOf(filter.name)  !== -1);
					return task.name.toLowerCase().indexOf(filter.name)  !== -1;
				})
			}
			tasks = tasks.filter((task) => {
				if (filter.status === -1) {
					return task;
				}else{
					return task.status === (filter.status === 0 ? true : false) ;
				}
			})
		}

		if (keyword) {
			// tasks = tasks.filter((task)=>{
			// 	return task.name.toLowerCase().indexOf(keyword) !== -1;
			// })

			tasks = _.filter(tasks, (task) => {
				// return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
			});
		}
		if (sortBy && sortValue) {
			if (sortBy === 'name') {
				tasks.sort((a,b)=> {
					if (a.name.toLowerCase() > b.name.toLowerCase()) {
						return sortValue
					}else if(a.name.toLowerCase() < b.name.toLowerCase()){
						return -sortValue;
					}else{
						return 0;
					}
				})
			}else{
				tasks.sort((a,b)=> {
					if (a.status > b.status) {
						return -sortValue
					}else if(a.status < b.status){
						return sortValue;
					}else{
						return 0;
					}
				})
			}
		}
		return(
			<div className="container">	
				<div className="text-center">
					<h1>Task Manager</h1>
				</div>
				<hr />

				<div className="row">
					<div className={this.state.isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
						{this.state.isDisplayForm ? <TaskForm onCloseForm={this.onCloseForm} onAddTask={this.onAddTask} task={this.state.taskEditing}/> : ''}
					</div>
					<div className={this.state.isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
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
						<TaskList tasks={tasks} onUpdateStatus={this.onUpdateStatus} onDeleteTask={this.onDeleteTask} onUpdateTask={this.onUpdateTask} onFilter={this.onFilter}/>
					</div>
				</div>
			</div>
		);
	}
}