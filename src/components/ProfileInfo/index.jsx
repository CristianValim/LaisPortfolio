import { useTranslation } from "react-i18next";
import profile from "../../assets/profile.png";

export function ProfileInfo() {
	const { t } = useTranslation();

	return (
		<section className="text-[1.4rem] mt-[3.2rem] grid grid-cols-[2fr_1fr] gap-[1.8rem] leading-[2.8rem]">
			<p>{t("ProfileInfo.vision")}</p>
			<img src={profile} alt="Foto de Laís Sanseverino" className="mt-[3rem]" />
			<p className="col-span-2">{t("ProfileInfo.informationToVisual")}</p>
			<p className="col-span-2">{t("ProfileInfo.work")}</p>
			<p className="col-span-2">{t("ProfileInfo.leisure")}</p>
		</section>
	);
}
