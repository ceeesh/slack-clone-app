import { useNavigate } from "react-router-dom";
import "./Header.css";
import clockLogo from "../../assets/images/clock-logo.png";
import logoutLogo from "../../assets/images/logout-logo.png"

const Header = () => {
	const navigate = useNavigate()
	
	const signOut = () => {
		sessionStorage.removeItem('loginInfo')
		navigate('/')
	}

	return (
		<div className="header-section">
			<div className="left-section">
				<h1>BURGER</h1>
			</div>

			<div className="middle-section">
				<div>
					<img src={clockLogo} />
				</div>
				<input />
			</div>

			<div className="right-section">
				<button onClick={signOut}><img src={logoutLogo}/></button>
			</div>
		</div>
	);
};

export default Header;
