import React from 'react';
import * as action from './actions/index';
import {connect} from 'react-redux';

class Sort extends React.Component{

	constructor(props){
		super(props);

		
	}

	onClick = (sortBy, sortValue) => {
		// console.log(sortBy + sortValue);
		// console.log(sortBy, sortValue);
		this.props.onSort({
			name: sortBy, 
			status: sortValue
		});
	
		// console.log(this.state.sort);
	}

	render(){
		var {sortTask} = this.props;
		console.log(sortTask);
		return(
			
			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
				<div className="dropdown">
					<button id="dropdownMenu1" type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" data-expanded="true">Sort <span className="fa fa-caret-square-o-down"></span></button>
					<ul className="dropdown-menu" aira-labelledby="dropdownMenu1">
						<li onClick={ () =>this.onClick('name', 1) }>
							<a role="button" className={(sortTask.name === 'name' && sortTask.status === 1 ) ? 'sort-selected' : ''}>
								<span className="fa fa-sort-alpha-asc"></span>
								Name A-Z
							</a>
						</li>
						<li onClick={ () =>this.onClick('name', -1) }>
							<a role="button" className={(sortTask.name === 'name' && sortTask.status === -1 ) ? 'sort-selected' : ''}>
								<span className="fa fa-sort-alpha-desc"></span>
								Name Z-A
							</a>
						</li>
						<li role="separator" className="divider"></li>
						<li onClick={ () =>this.onClick('status', 1) }>
							<a role="button" className={(sortTask.name === 'status' && sortTask.status === 1 ) ? 'sort-selected' : ''}>
								Active
							</a>
						</li>
						<li onClick={ () =>this.onClick('status', -1) }>
							<a role="button" className={(sortTask.name === 'status' && sortTask.status === -1 ) ? 'sort-selected' : ''}>
								Deactive
							</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		sortTask : state.sortTask
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onSort : (sort) => {
			dispatch(action.sortTask(sort));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);