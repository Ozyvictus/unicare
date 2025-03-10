import react from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login.jsx"
//import Register from "./pages/Register"
import Home from "./pages/Home.jsx"
//import NotFound from "./pages/NotFound"
import Profile from "./pages/Profile.jsx"
import ProtectedRoute from "./components/ProtectedRoutes"

function Logout() {
	localStorage.clear()
	return <Navigate to="/" />
}

function RegisterAndLogout() {
	localStorage.clear()
	return <Register />
}

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route
					path="/home"
					element={
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/profile"
					element={
						<ProtectedRoute>
							<Profile />
						</ProtectedRoute>
					}
				/>
				{/*<Route path="/logout" element={<Logout />} />
				<Route path="/register" element={<RegisterAndLogout />} />
				<Route path="*" element={<NotFound />}></Route>*/}
			</Routes>
		</BrowserRouter>
	)
}

export default App