import React from 'react';

export default class Search extends React.Component{
	render(){
		return(
			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
				<div className="input-group">
					<input type="text" name="" id="input" className="form-control" value="" placeholder="keyword ..." />
					<span className="input-group-btn">
						<button type="button" className="btn btn-primary"><span className="fa fa-search"></span>Search</button>
					</span>
				</div>
			</div>
		);
	}
}