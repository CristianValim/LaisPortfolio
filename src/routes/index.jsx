import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { About } from "../pages/About";
import { Home } from "../pages/Home";

export function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</Router>
	);
}
