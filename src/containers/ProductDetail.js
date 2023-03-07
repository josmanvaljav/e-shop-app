import React from "react";
import ProductInfo from "../components/ProductInfo";
import "../styles/ProductDetail.scss"
import iconClose from "../assets/icons/icon_close.png";

function ProductDetail() {
    return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close">
				<img src={iconClose} alt="close" />
			</div>
			<ProductInfo />
		</aside>
    );
}

export default ProductDetail;