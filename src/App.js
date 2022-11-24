import LoginFunction from "./Pages/LoginFunction/LoginFunction";
import Homepage from "./Pages/HomePage/Homepage";
import RegisterFunction from "./Pages/RegisterFunction/RegisterFunction";
import { Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext";
import Layout from "./Components/Layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<Layout>
			<UserContextProvider>
				<Routes>
					<Route path="/" element={<LoginFunction />} />
					<Route path="/Register" element={<RegisterFunction />} />
					<Route path="/Homepage" element={<Homepage />} />
				</Routes>
			</UserContextProvider>
			<ToastContainer />
		</Layout>
	);
}

export default App;
