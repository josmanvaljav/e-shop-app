import React, { useContext } from "react";
import OrderItem from "../components/OrderItem";
import AppContext from "../context/AppContext";
import "../styles/MyOrder.scss";
import iconFlecha from "../assets/icons/flechita.svg";
import { Link } from "react-router-dom";

function MyOrder({ handleToggleOrder }) {
	const { state } = useContext(AppContext);

	const sumTotal = () => {
		const reducerFunc = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducerFunc, 0);
		return sum;
	};

    return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={iconFlecha} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(product => (
					<OrderItem product={product} key={`OrderItem-${product.id}`} />
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<Link to="/checkout">
					<button className="primary-button" onClick={() => handleToggleOrder()}>
						Checkout
					</button>
				</Link>
			</div>
		</aside>
    );
}

export default MyOrder;