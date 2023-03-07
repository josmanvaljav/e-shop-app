import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";
import "../styles/CreateAccount.scss";

function CreateAccount() {
	const form = useRef();
	const { state, addUserLogin } = useContext(AppContext);
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		const data = {
			name: form.current.name.value, 
			username: form.current.email.value, // "email" extracted from the name property for the input element inside the form.
			password: form.current.password.value // "password" extracted from the name property for the input element inside the form.
		};

		addUserLogin(data)

		navigate("/");
	};

    return (
		<div className="CreateAccount">
			<div className="CreateAccount-container">
				<h1 className="title">My account</h1>
				<form action="/" className="form" ref={form}>
					<div>
						<label htmlFor="name" className="label">Name</label>
						<input 
							type="text" 
							id="name" 
							name="name" 
							placeholder="nombre" 
							className="input input-name" 
							defaultValue={state.userData.name}
						/>
						<label htmlFor="email" className="label">Email</label>
						<input 
							type="text" 
							id="email" 
							name="email" 
							placeholder="email@demo.com" 
							className="input input-email"
							defaultValue={state.userData.username}
						/>
						<label htmlFor="password" className="label">Password</label>
						<input 
							type="password" 
							id="password" 
							name="password" 
							placeholder="*********" 
							className="input input-password"
							defaultValue={state.userData.password}
						/>
					</div>
					<button 
						className="primary-button login-button"
						onClick={handleSubmit}
					>
						Create
					</button>
				</form>
			</div>
		</div>
    );
}

export default CreateAccount;