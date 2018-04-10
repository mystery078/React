import React from 'react';

export default class Product extends React.Component{
	render(){
		return(
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<div className="thumbnail">
					<img src="https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-hh-400x400.jpg" alt="" />
					<div className="caption">
						<h3>Iphone 6 Plus</h3>
						<p>
							15.000.000đ
						</p>
						<p>
							<a  className="btn btn-primary">Mua hàng</a>
						</p>
					</div>
				</div>
			</div>
		);
	}
}