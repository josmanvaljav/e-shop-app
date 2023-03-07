import React from "react";
import "../styles/PasswordRecovery.scss";
import logoMain from "../assets/logos/logo_yard_sale.svg";
import { Link } from "react-router-dom";

function PasswordRecovery() {
    return (
		<div className="PasswordRecovery">
			<div className="PasswordRecovery-container">
				<img src={logoMain} alt="logo" className="logo-PasswordRecovery" />
				<h1 className="title">Password recovery</h1>
				<p className="subtitle">Inform the email address used to create your account</p>
				<form action="/" className="form">
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" id="email" className="input input-email" placeholder="email@example.com" />
					<Link to="/send-email">
						<input type="submit" value="Confirm" className="primary-button login-button" />
					</Link>
				</form>
			</div>
		</div>
    );
}

export default PasswordRecovery;