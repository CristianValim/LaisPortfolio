import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import { useHeader } from "../hooks/useHeader";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";
import { ToastContainer } from "react-toastify"; // Importando o ToastContainer
import { Footer } from "../components/Footer";

export function AnimatedRoutes() {
  const location = useLocation();
  const { showHeader } = useHeader();

  return (
    <>
      <ToastContainer />
      <AnimatePresence>
        {showHeader && <Header />}
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
          <Route
            path="/about"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <About />
              </motion.div>
            }
          />
          <Route
            path="/projects"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Projects />
              </motion.div>
            }
          />
        </Routes>
        <Footer />
      </AnimatePresence>
    </>
  );
}
