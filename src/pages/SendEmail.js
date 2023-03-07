import React from "react";
import '../styles/SendEmail.scss';
import logoMain from "../assets/logos/logo_yard_sale.svg";
import iconEmail from "../assets/icons/email.svg";
import { Link } from "react-router-dom";

function SendEmail() {
    return (
		<div className="SendEmail">
			<div className="form-container">
				<img src={logoMain} alt="logo" className="logo-SendEmail" />
				<h1 className="title">Email has been sent!</h1>
				<p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
				<div className="email-image">
					<img src={iconEmail} alt="email" />
				</div>
				<Link to="/login">
					<button className="primary-button login-button">Login</button>
				</Link>
				<span className="resend">Didn't receive the email? 
				<Link to="/password-recovery">
					<span className="resend-link">Resend</span>
				</Link>
				</span>
			</div>
		</div>
    );
}

export default SendEmail;