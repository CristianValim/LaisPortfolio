import { useTranslation } from "react-i18next";
import star from "../../assets/star.png";
import { MenuNavigation } from "../../components/MenuNavigation";
import { ProjectsData } from "../../data/ProjectsData";

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
			<section className="flex flex-col items-center p-10">
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pt-[10rem]">
							{ProjectsData.map((project) => (
								<div key={project.id} className="flex flex-col items-center">
									<img
										src={project.image}
										alt={project.name}
										className="w-full h-auto object-cover"
									/>
								</div>
							))}
						</div>
					</section>
		</main>
	);
}
