import React, { useContext } from "react";
import OrderItem from "../components/OrderItem";
import AppContext from "../context/AppContext";
import "../styles/Checkout.scss";
import { format } from "date-fns"

function Checkout() {
	const { state } = useContext(AppContext);

	const sumTotal = () => {
		const reducerFunc = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducerFunc, 0);
		return sum;
	};

    return (
		<div className="Checkout">
			<div className="Checkout-container">
				<h1 className="title">My order</h1>
				<div className="Checkout-content">
					<div className="order">
						<p>
							<span>{format(new Date(), 'MM.dd.yy')}</span>
							<span>{state.cart.length} articles</span>
						</p>
						<p>${sumTotal()}</p>
					</div>
				</div>
				{state.cart.map(product => (
					<OrderItem product={product} key={`checkoutItem-${product.id}`} />
				))}
			</div>
		</div>
    );
}

export default Checkout;