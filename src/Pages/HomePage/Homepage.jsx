import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Chat from "../../Components/Chat/Chat";
import "./Homepage.css";

const Homepage = () => {
	return (
		<div className="homepage-container">
			<Header />
			<Navbar />
			<Chat />
		</div>
	);
};

export default Homepage;
