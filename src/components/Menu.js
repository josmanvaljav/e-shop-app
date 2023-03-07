import React from "react";
import { Link } from "react-router-dom";
import "../styles/Menu.scss";

function Menu({handleToggle}) {
    return (
		<div className="Menu">
			<ul>
				<li>
					<p className="Menu-myorder">My orders</p>
				</li>
				<Link to="/account">
					<li onClick={() => handleToggle()}>
						<p>My account</p>
					</li>
				</Link>
				<Link to="/login">
					<li className="Menu-link" onClick={() => handleToggle()}>
						<p className="Menu-signout">Sign out</p>
					</li>
				</Link>
			</ul>
		</div>
    );
}

export default Menu;