import React from 'react';
import { Link } from 'react-router-dom';

import { CURRENCY } from '../../../../../../data/constants/componentConstants';


class TopSellerProductCard extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {

		const data = this.props.data;

		return (

				<Link to={'/products/' + data.id}>
					<div className="top-seller-card" style={{width: this.props.width - 50 + 'px'}}>
						<div className="product-image">
							<img className="card-img-top" src={data.images[0]} alt="Card image cap"/>
						</div>
						<div className="card-body">
							<h4 className="card-title">{data.name}</h4>
							<p className="price">{data.price.toFixed(2)} {CURRENCY}</p>
						</div>
					</div>
				</Link>

		);
	}
}

export default TopSellerProductCard;
