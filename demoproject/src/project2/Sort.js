import React from 'react';

export default class Sort extends React.Component{
	render(){
		return(
			
			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
				<div className="dropdown">
					<button id="dropdownMenu1" type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" data-expanded="true">Sort <span className="fa fa-caret-square-o-down"></span></button>
					<ul className="dropdown-menu" aira-labelledby="dropdownMenu1">
						<li >
							<a role="button" className="sort-selected">
								<span className="fa fa-sort-alpha-asc"></span>
								Name A-Z
							</a>
						</li>
						<li >
							<a role="button">
								<span className="fa fa-sort-alpha-desc"></span>
								Name Z-A
							</a>
						</li>
						<li role="separator" className="divider"></li>
						<li >
							<a role="button">
								Deactive
							</a>
						</li>
						<li >
							<a role="button">
								Active
							</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}