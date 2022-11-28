import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Chat from "../../Components/Chat/Chat";
import { retrieveChannels } from "../../utils/api";
import { UserContext } from "../../contexts/UserContext";
import "./Homepage.css";
import { useState, useContext, useEffect } from "react";

const Homepage = () => {
	const { loginInfoHeader, updateChannels, channels, setChannels } = useContext(UserContext);

	useEffect(() => {
		retrieveChannels(loginInfoHeader)
			.then((res) => {
				setChannels(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [loginInfoHeader]);

	return (
		<div className="homepage-container">
			<Header />
			<Navbar />
			<Chat />
		</div>
	);
};

export default Homepage;
