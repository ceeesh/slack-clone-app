import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { retrieveChannels } from "../../utils/api";
import FetchUtils from "../../utils/FetchUtils";
import "./Navbar.css";
import { toast } from "react-toastify";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8080");

const Navbar = () => {
	const [channelsNavToggle, setChannelsNavToggle] = useState(true);
	const [directMsgToggle, setDirectMsgToggle] = useState(true);
	const [channelName, setChannelName] = useState("");
	const { channels, loginInfoHeader, id, setChannels, setActiveChannel, activeChannel } =
		useContext(UserContext);

	useEffect(() => {});

	const channelToggle = () => {
		setChannelsNavToggle((prevChannelsNavToggle) => !prevChannelsNavToggle);
	};

	const msgToggle = () => {
		setDirectMsgToggle((prevDirectMsgToggle) => !prevDirectMsgToggle);
	};

	async function submitHandler(e) {
		e.preventDefault();

		const data = await FetchUtils(
			"/channels",
			"POST",
			{ name: channelName, user_ids: [id] },
			{ ...loginInfoHeader }
		);

		if (data.errors) {
			data.errors.forEach((error) => {
				toast.error(error);
			});
			return;
		}

		retrieveChannels(loginInfoHeader)
			.then((res) => {
				setChannels(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<>
			<div className="navbar-container text-white">
				<h1>Welcome,{loginInfoHeader && loginInfoHeader.uid.split("@")[0]}</h1>

				<div className="nav-list">
					<div className="channel-section">
						<div className="text-white flex justify-between items-center">
							<div className="flex gap-2">
								<i
									class={
										channelsNavToggle ? "fa-solid fa-caret-down" : "fa-solid fa-caret-down right"
									}
									aria-hidden="true"
									onClick={channelToggle}
								></i>

								<h3 className="font-bold text-lg">Channels</h3>
							</div>

							<label htmlFor="my-modal-4" className="btn btn-ghost">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="white"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</label>
						</div>
						{channelsNavToggle ? (
							<div className="channel-list">
								{channels &&
									channels.length > 0 &&
									channels.map((channel, i) => {
										console.log(channel);
										return (
											<button
												className="btn btn-ghost"
												onClick={() => {
													socket.emit("join", { channel: channel.id });
													setActiveChannel(channel.id);
												}}
												key={channel.id}
											>
												<div
													className={`${channel.id === activeChannel ? "font-bold" : "font-thin"}`}
												>
													{channel.name}
												</div>
											</button>
										);
									})}
							</div>
						) : null}
					</div>
				</div>

				<div className="nav-list">
					<div className="channel-section">
						<div>
							<i
								class={directMsgToggle ? "fa-solid fa-caret-down" : "fa-solid fa-caret-down right"}
								aria-hidden="true"
								onClick={msgToggle}
							></i>
							<h3>Direct messages</h3>
							<button>+</button>
						</div>
						{directMsgToggle ? <div className="channel-list"></div> : ""}
					</div>
				</div>
			</div>

			<input type="checkbox" id="my-modal-4" className="modal-toggle" />
			<label htmlFor="my-modal-4" className="modal cursor-pointer">
				<label className="modal-box relative" htmlFor="">
					<h3 className="text-xl font-bold">CREATE A SLACK ROOM</h3>
					<form className="py-4 flex flex-col gap-5" onSubmit={submitHandler}>
						<div className="flex flex-col gap-1">
							<h1 className="font-semibold">Room Name:</h1>
							<input
								type="text"
								className="input input-bordered w-full"
								value={channelName}
								onChange={(e) => setChannelName(e.target.value)}
							/>
						</div>
						<button type="submit" className="btn self-end" htmlFor="my-modal-4">
							Create
						</button>
					</form>
				</label>
			</label>
		</>
	);
};

export default Navbar;
