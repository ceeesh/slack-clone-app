import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Chat from "../../Components/Chat/Chat";
import { retrieveChannels } from "../../utils/api";
import { UserContext } from "../../contexts/UserContext";
import "./Homepage.css";
import FetchUtils from "../../utils/FetchUtils";
import { useState, useContext, useEffect } from "react";

const Homepage = () => {
	const { loginInfoHeader, updateChannels, channels, setChannels, users, setUsers } = useContext(UserContext);

	const getUsers = async () => {
		const data = await FetchUtils("/users", "GET", null, { ...loginInfoHeader })
		setUsers(data.data)
		console.log(users)
	}

	useEffect(() => {
		retrieveChannels(loginInfoHeader)
			.then((res) => {
				setChannels(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
			getUsers()
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
