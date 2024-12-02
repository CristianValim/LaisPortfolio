import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function MenuNavigation({ setOpen }) {
	const { t, i18n } = useTranslation();

	function handleCloseMenu() {
		setOpen(false);
	}

	function handleLanguageChange(language) {
		i18n.changeLanguage(language);
		handleCloseMenu();
	}

	return (
		<nav className="w-full flex justify-center">
			<ul className="flex flex-col items-center text-[2rem] p-10 space-y-5">
				<li>
					<Link
						onClick={handleCloseMenu}
						to="/projects"
						className="font-semibold text-menu underline"
					>
						{t("menu.work")}
					</Link>
				</li>
				<li>
					<Link
						onClick={handleCloseMenu}
						to="/about"
						className="font-light text-menu underline"
					>
						{t("menu.about")}
					</Link>
				</li>
				<li className="mt-8">
					<button
						type="button"
						onClick={() => handleLanguageChange("pt")}
						className={`${
							i18n.language === "pt" ? "font-semibold" : "font-light"
						} text-menu underline`}
					>
						{t("menu.portuguese")}
					</button>
					<span> / </span>
					<button
						type="button"
						onClick={() => handleLanguageChange("en")}
						className={`${
							i18n.language === "en" ? "font-semibold" : "font-light"
						} text-menu underline`}
					>
						{t("menu.english")}
					</button>
				</li>
			</ul>
		</nav>
	);
}
