import { useTranslation } from "react-i18next";
import star from "../../assets/star.png";
import { MenuNavigation } from "../../components/MenuNavigation";

export function Home() {
	const { t } = useTranslation();

	return (
		<main className="flex flex-col">
			<section className="flex flex-grow flex-col justify-center items-center gap-y-10 h-screen">
				<h1 className="font-title uppercase font-extrabold text-[2.4rem]">
					{t("home.name")}
				</h1>
				<img src={star} alt={t("home.name")} className="max-w-[5rem]" />
				<p className="text-[1.8rem] text-center max-w-[22rem]">
					{t("home.intro")}
				</p>
				<MenuNavigation />
			</section>
		</main>
	);
}
