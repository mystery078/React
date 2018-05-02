import React from 'react';
import * as action from './actions/index';
import {connect} from 'react-redux';

class Search extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			keyword: ''
		}
	}

	onChange = (event) => {
		var target = event.target;
		var name = target.name;
		var value = target.value;

		this.setState({
			[name] : value
		})
	}

	onSearch = () => {
		this.props.onSearch(this.state.keyword);
	}

	render(){
		return(
			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
				<div className="input-group">
					<input type="text" name="keyword" className="form-control" value={this.state.keyword} onChange={this.onChange} placeholder="keyword ..." />
					<span className="input-group-btn">
						<button type="button" className="btn btn-primary" onClick={this.onSearch} ><span className="fa fa-search"></span>Search</button>
					</span>
				</div>
			</div>
		);
	}
}

var mapDispatchToProps = (dispatch, props) => {
	return {
		onSearch : (keyword) => {
			dispatch(action.searchTask(keyword));
		}
	}
}

export default connect(null, mapDispatchToProps)(Search);