import "./RegisterFunction.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HandleChange from "../../utils/HandleChange";
import logo from "../../assets/images/slack-logo.svg";
import { registerAcc } from "../../utils/api"
import ErrorHandler from "../../utils/ErrorHandler";
import FetchUtils from "../../utils/FetchUtils";

const RegisterFunction = () => {
	const navigate = useNavigate();
	const [userInput, setUserInput] = useState({
		email: "",
		password: "",
		password_confirmation: "",
	});

	const { email, password, password_confirmation } = userInput;

	const onSubmit = async (e) => {
		e.preventDefault();
		registerAcc(userInput)
			.then(res => {
				navigate("/");
			}).catch(err => {
				console.log(err.response.data.errors.full_messages)
				ErrorHandler(err.response.data.errors.full_messages || err.response.data.errors);
			})
	};

	return (
		<div className="min-h-screen grid place-items-center">
			<form className="create-account-section p-8 shadow-xl rounded-xl" onSubmit={onSubmit}>
				<div className="logo-title-section flex justify-center flex-col items-center">
					<div className="flex items-center gap-3 mb-3">
						<img src={logo} className="w-[1.5rem] h-[1.5rem]" alt="logo" />
						<p className="text-lg font-bold">slack</p>
					</div>
					<h1 className="font-bold p-0 m-0">Sign up to Slack</h1>
					<p className="-translate-y-[.5rem] italic font-light text-sm">kuware slack daw</p>
				</div>

				<div className="inner-form-section">
					<label>Email</label>
					<input
						type="email"
						name="email"
						placeholder="name@work-email.com"
						value={email}
						onChange={(e) => HandleChange(e, setUserInput)}
					/>

					<label>Password</label>
					<input
						type="password"
						name="password"
						placeholder="Your password"
						value={password}
						onChange={(e) => HandleChange(e, setUserInput)}
					/>

					<label>Confirm Password</label>
					<input
						type="password"
						name="password_confirmation"
						placeholder="Confirm Password"
						value={password_confirmation}
						onChange={(e) => HandleChange(e, setUserInput)}
					/>

					<button type="submit" className="btn btn-primary">
						Sign Up
					</button>
				</div>

				<div className="navigate-login-section">
					<p className="text-xs">
						Already have an account?{" "}
						<span
							onClick={() => {
								navigate("/");
							}}
						>
							Sign in
						</span>
					</p>
				</div>
			</form>
		</div>
	);
};

export default RegisterFunction;
