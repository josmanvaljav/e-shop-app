import React, { useContext, useRef } from "react";
import "../styles/Login.scss";
import logoMainLogin from "../assets/logos/logo_yard_sale.svg";
import AppContext from "../context/AppContext";
import { Link, useNavigate } from "react-router-dom";

function Login() {
	const form = useRef();
	const { state, addUserLogin } = useContext(AppContext);
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		const data = {
			name: "", 
			username: form.current.email.value, // "email" extracted from the name property for the input element inside the form.
			password: form.current.password.value // "password" extracted from the name property for the input element inside the form.
		};

		addUserLogin(data)

		console.log("Login | state", state);

		navigate("/");
	};

    return (
		<div className="Login">
			<div className="Login-container">
				<img src={logoMainLogin} alt="logo" className="logo-login" />
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" id="email" name="email" placeholder="email@example.com" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" id="password" name="password" placeholder="*********" className="input input-password" />
					<button 
						className="primary-button login-button"
						onClick={handleSubmit}
					>
						Log in
					</button>
					<Link to="/password-recovery">
						<p>Forgot my password</p>
					</Link>
				</form>
				<Link to="/signup">
					<button className="secondary-button signup-button">Sign up</button>
				</Link>
			</div>
		</div>
    );
}

export default Login;