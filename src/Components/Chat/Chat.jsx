import React, { useContext, useEffect, useRef, useState } from "react";
import "./Chat.css";
import ChatIcons from "./ChatIcons/ChatIcons";
import boldIcon from "../../assets/images/bold-logo.png";
import italic from "../../assets/images/italic-logo.png";
import strikeThrough from "../../assets/images/strike-logo.png";
import link from "../../assets/images/link-logo.png";
import numList from "../../assets/images/numbered-list.png";
import bullList from "../../assets/images/bulleted-list.png";
import code from "../../assets/images/code-logo.png";
import plusLogo from "../../assets/images/plus-logo.png";
import videoLogo from "../../assets/images/video-logo.png";
import micLogo from "../../assets/images/mic-logo.png";
import emoji from "../../assets/images/emoji-logo.png";
import mention from "../../assets/images/mention-logo.png";
import { UserContext } from "../../contexts/UserContext";
import FetchUtils from "../../utils/FetchUtils";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8080");

const Chatbox = () => {
	const { activeChannel, loginInfoHeader } = useContext(UserContext);
	const chatRef = useRef();
	const [chatData, setChatData] = useState();
	const [msgData, setMsgData] = useState();
	const [msg, setMsg] = useState("");

	async function getChatInfo() {
		const data = await FetchUtils(`/channels/${activeChannel}`, "GET", null, {
			...loginInfoHeader,
		});

		setChatData(data.data);
	}

	async function getMessages() {
		const data = await FetchUtils(
			`/messages?receiver_id=${activeChannel}&receiver_class=Channel`,
			"GET",
			null,
			{
				...loginInfoHeader,
			}
		);

		setMsgData(data.data);

		setTimeout(() => {
			chatRef.current.scrollIntoView({ behavior: "smooth" });
		}, 600);
	}

	async function submitHandler(e) {
		e.preventDefault();

		const data = await FetchUtils(
			"/messages",
			"POST",
			{
				receiver_id: activeChannel,
				receiver_class: "Channel",
				body: msg,
			},
			{ ...loginInfoHeader }
		);

		socket.emit("send_chat", { channel: activeChannel });
		setMsg("");
		getMessages();
	}

	useEffect(() => {
		socket.on("get_chat", (data) => {
			getMessages();
		});
	}, [socket]);

	useEffect(() => {
		if (!activeChannel) {
			return;
		}

		getChatInfo();
		getMessages();
	}, [activeChannel]);

	return (
		<div className="chat-box-container relative flex flex-col items-center">
			{chatData && (
				<>
					<div className="w-full bg-gray-100 p-2 shadow-lg">
						<div className="flex gap-3 items-center">
							<div class="avatar placeholder">
								<div class="bg-primary text-neutral-content rounded-full w-[3rem]">
									<span class="text-xl">{chatData.name.charAt(0)}</span>
								</div>
							</div>
							<h1 className="font-semibold">{chatData.name}</h1>
						</div>
					</div>

					<div className="chat-section h-[60vh] overflow-auto w-full flex flex-col p-5">
						{msgData &&
							msgData.map((msg) => (
								<>
									<div
										className={`chat ${
											msg.sender.email === loginInfoHeader.uid ? "chat-end" : "chat-start"
										}`}
									>
										<div className="chat-image avatar">
											<div class="avatar placeholder">
												<div
													class={`${
														msg.sender.email === loginInfoHeader.uid ? "bg-primary" : "bg-gray-400"
													} text-neutral-content rounded-full w-[3rem]`}
												>
													<span class="text-xl">{msg.sender.email.charAt(0)}</span>
												</div>
											</div>
										</div>
										<div className="chat-header">{msg.sender.email.split("@")[0]}</div>
										<div className="chat-bubble">{msg.body}</div>
									</div>
								</>
							))}
						<div ref={chatRef}></div>
					</div>

					<div className="chat-form bottom-[0] w-[70rem]">
						<form className="" onSubmit={submitHandler}>
							<ChatIcons icon={boldIcon} />
							<ChatIcons icon={italic} />
							<ChatIcons icon={strikeThrough} />
							<ChatIcons icon={link} />
							<ChatIcons icon={numList} />
							<ChatIcons icon={bullList} />
							<ChatIcons icon={code} />
							<input
								type="text"
								placeholder="Message UwU"
								value={msg}
								onChange={(e) => setMsg(e.target.value)}
							/>
							<ChatIcons icon={plusLogo} />
							<ChatIcons icon={videoLogo} />
							<ChatIcons icon={micLogo} />
							<ChatIcons icon={boldIcon} />
							<ChatIcons icon={emoji} />
							<ChatIcons icon={mention} />
						</form>
					</div>
				</>
			)}
		</div>
	);
};

export default Chatbox;
