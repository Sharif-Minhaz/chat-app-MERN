import "./App.css";
import Home from "./pages/home/Home";
import { Route, Routes, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { useAuthContext } from "./contexts/AuthContext";

function App() {
	const { authUser } = useAuthContext();
	return (
		<div className="p-4 min-h-screen flex items-center justify-center">
			<Routes>
				<Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"} />} />
				<Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
				<Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />} />
			</Routes>
			<Toaster />
		</div>
	);
}

export default App;
