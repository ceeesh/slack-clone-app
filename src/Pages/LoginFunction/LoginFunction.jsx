import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/slack-logo.svg";
import "./LoginFunction.css";
import HandleChange from "../../utils/HandleChange";
import ErrorHandler from "../../utils/ErrorHandler";
import FetchUtils from "../../utils/FetchUtils";
import { logIn } from "../../utils/api";

const LoginFunction = () => {
	const navigate = useNavigate();
	const {
		loginInfo,
		loginInfoHeader,
		updateLoginInfo,
		updateLoginInfoHeader,
		setLoginInfoHeader,
		setID,
	} = useContext(UserContext);
	const [userData, setUserData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = userData;

	const onSubmit = async (e) => {
		e.preventDefault();
		updateLoginInfo(userData);

		logIn(userData)
			.then((res) => {
				updateLoginInfoHeader({
					"access-token": res.headers.get("access-token"),
					client: res.headers.get("client"),
					expiry: res.headers.get("expiry"),
					uid: res.headers.get("uid"),
				});
				setID(res.data.data.id);
				navigate("/Homepage");
			})
			.catch((err) => {
				ErrorHandler(err.response.data.errors);
			});
	};

	return (
		<div className="min-h-[100vh] grid place-items-center">
			<form className="form-container p-8 shadow-xl rounded-xl" onSubmit={onSubmit}>
				<div className="logo-title-section flex justify-center flex-col items-center">
					<div className="flex items-center gap-3 mb-3">
						<img src={logo} className="w-[1.5rem] h-[1.5rem]" alt="logo" />
						<p className="text-lg font-bold">slack</p>
					</div>
					<h1 className="font-bold p-0 m-0">Sign in to Slack</h1>
					<p className="-translate-y-[.5rem] italic font-light text-sm">kuware slack daw</p>
				</div>

				<div className="inner-form mt-3">
					<label>Email Address</label>
					<input
						type="email"
						name="email"
						placeholder="name@work-email.com"
						value={email}
						onChange={(e) => HandleChange(e, setUserData)}
					/>

					<label>Password</label>
					<input
						type="password"
						name="password"
						placeholder="Your password"
						value={password}
						onChange={(e) => HandleChange(e, setUserData)}
					/>
				</div>

				<div className="form-control mb-2">
					<label className="label cursor-pointer justify-start gap-3">
						<input type="checkbox" className="checkbox checkbox-primary checkbox-sm" />
						<span className="label-text">Remember me</span>
					</label>
				</div>

				<button className="btn btn-primary" type="submit">
					Sign In
				</button>

				<div className="forgotPass-section mt-4">
					<p>
						Forgot your password? <span>Get help signing in</span>
					</p>
					<p>
						Don't have an account?{" "}
						<span href="#" onClick={() => navigate("/Register")}>
							Sign up
						</span>
					</p>
				</div>
			</form>
		</div>
	);
};

export default LoginFunction;
