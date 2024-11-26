import { Route, Routes, useLocation } from "react-router-dom";
import { About } from "../pages/About";
import { Projects } from "../pages/Projects";
import { Home } from "../pages/Home";
import { AnimatePresence, motion } from "framer-motion";

export function AnimatedRoutes() {
	const location = useLocation();

	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route
					path="/"
					element={
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Home />
                            <Projects />
                        </motion.div>
                    }
				/>
				<Route path="/about" element={<About />} />
			</Routes>
		</AnimatePresence>
	);
}
