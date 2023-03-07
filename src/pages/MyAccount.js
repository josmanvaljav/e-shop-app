import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import "../styles/MyAccount.scss";

function MyAccount() {
	const { state } = useContext(AppContext);

    return (
		<div className="MyAccount">
			<div className="MyAccount-container">
				<h1 className="title">My account</h1>
				<form action="/" className="form">
					<div>
						<label htmlFor="name" className="label">Name</label>
						<p className="value">{state.userData.name ? state.userData.name : null}</p>
						<label htmlFor="email" className="label">Email</label>
						<p className="value">{state.userData.username ? state.userData.username : null}</p>
						<label htmlFor="password" className="label">Password</label>
						<p className="value">*********</p>
					</div>
					<Link to="/signup">
						<input type="submit" value="Edit" className="secondary-button login-button" />
					</Link>
				</form>
			</div>
		</div>
    );
}

export default MyAccount;