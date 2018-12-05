import React from 'react';

import utils from '../../../../../utils/utils';

import { CURRENCY } from '../../../../../data/constants/componentConstants';

class CartProductRowPresent extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			quantity: this.props.data.quantity
		};
	}

	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	};

	changeQuantity = (method) => {
		let currentQuantity = Number(this.state.quantity);

		switch (method) {
			case 'increment' :
				currentQuantity += 1;
				break;
			case 'decrement' :
				currentQuantity -= 1;
				break;
		}

		if (currentQuantity < 1 || currentQuantity > 10) return;

		let productId = this.props.data.id;
		this.setState({quantity: currentQuantity}, () => {
			this.props.edit(productId, this.state.quantity);
		});
	};

	render () {

		let p = this.props.data;

		let price = utils.calculatePriceAfterDiscount(p.price, p.discount);

		return (
			<div className="products-table-row">

				<div className="img-col">
					<img className="image-thumbnail" src={p.image}/>
				</div>

				<div className="product-data">

					<div className="product-col">
						<p>{p.name}
							{p.discount > 0 &&
							<span className="promo-label">-{p.discount}%</span>
							}
						</p>

						<button onClick={() => this.props.delete(p.id, p.quantity)}
						        className="btn-custom default xs">изтрий
						</button>

					</div>

					<div className="quantity-col">

						{this.props.editable &&
						<button className="btn-custom default sm"
						        onClick={() => this.changeQuantity('decrement')}>-</button>
						}

						<span className="quantity"> {this.state.quantity} </span>

						{this.props.editable &&
						<button className="btn-custom default sm"
						        onClick={() => this.changeQuantity('increment')}>+</button>
						}
					</div>

					<div className="price-col">
						{p.discount > 0 &&
						<span className="old-price">{p.price.toFixed(2) + ' ' + CURRENCY}</span>}
						{price.toFixed(2) + ' ' + CURRENCY}
					</div>
				</div>

				<div className="sum-col">
					{(price * p.quantity).toFixed(2) + ' ' + CURRENCY}
				</div>
			</div>

		);
	}
}

export default CartProductRowPresent;
