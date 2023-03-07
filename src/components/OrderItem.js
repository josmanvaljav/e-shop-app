import React, { useContext } from "react";
import '../styles/OrderItem.scss';
import iconClose from "../assets/icons/icon_close.png";
import AppContext from "../context/AppContext";

function OrderItem({ product }) {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = (product) => {
		removeFromCart(product);
	};

    return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img className="OrderItem-close" src={iconClose} alt="close" onClick={() => handleRemove(product)} />
		</div>
    );
}

export default OrderItem;