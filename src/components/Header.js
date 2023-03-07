import React, { useContext, useState } from "react";
import Menu from "./Menu";
import MyOrder from "../containers/MyOrder";
import "../styles/Header.scss";
import iconMenu from "../assets/icons/icon_menu.svg";
import logoMain from "../assets/logos/logo_yard_sale.svg";
import iconShoppingCart from "../assets/icons/icon_shopping_cart.svg";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";

function Header() {
	const [toggle, setToggle] = useState(false);
	const [toggleOrder, setToggleOrder] = useState(false);
	const { state } = useContext(AppContext);

	const handleToggle = () => {
		setToggle(!toggle);
		setToggleOrder(false);
	};
	const handleToggleOrder = () => {
		setToggleOrder(!toggleOrder);
		setToggle(false);
	};

    return (
		<nav>
			<img src={iconMenu} alt="menu" className="menu" />
			<div className="navbar-left">
				<Link to="/">
					<img src={logoMain} alt="logo" className="logo-header" />
				</Link>
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li 
						className="navbar-email"
						onClick={handleToggle}
					>
						{state.userData.username ? state.userData.username : "user@demo.com"}
					</li>
					<li className="navbar-shopping-cart"
						onClick={handleToggleOrder}
					>
						<img src={iconShoppingCart} alt="shopping cart" />
						{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
					</li>
				</ul>
			</div>
			{toggle ? <Menu handleToggle={handleToggle} /> : null}
			{toggleOrder ? <MyOrder handleToggleOrder={handleToggleOrder} /> : null}
		</nav>
    );
}

export default Header;