import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function CurriculumButton() {
	const { i18n } = useTranslation();

	const buttonText = i18n.language === "pt" ? "Currículo" : "Curriculum";

	return (
		<Link
			to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
			className="mx-auto px-[2.4rem] py-[1.4rem] text-[2.2rem] border border-[#848484] rounded-[2.5rem] block mt-[6rem]"
		>
			{buttonText}
		</Link>
	);
}
