import React from 'react';
import TaskForm from './TaskForm';
import Search from './Search';
import Sort from './Sort';
import TaskList from './TaskList';


export default class Project2 extends React.Component{
	render(){
		return(
			<div className="container">
				<div className="text-center">
					<h1>Task Manager</h1>
				</div>
				<hr />

				<div className="row">
					<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
						<TaskForm />
					</div>
					<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
						<div className="form-group">
							<button type="button" className="btn btn-primary"><span className="fa fa-plus"></span> Add Task</button>
						</div>
						<div className="form-group">
							<div className="row">
								<Search />
								<Sort />
							</div>
						</div>
						<TaskList />
					</div>
				</div>
			</div>
		);
	}
}