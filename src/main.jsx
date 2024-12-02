import "./styles/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRoutes } from "./routes";
import "./i18n";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AppRoutes />
	</StrictMode>,
);
