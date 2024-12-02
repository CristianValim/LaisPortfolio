import { useTranslation } from "react-i18next";
import { CurriculumButton } from "../../components/CurriculumButton";
import { CurriculumSection } from "../../components/CurriculumSection";
import { ProfileInfo } from "../../components/ProfileInfo";
import { SocialLinks } from "../../components/SocialLinks";

export function About() {
	const { t } = useTranslation();

	return (
		<div className="mt-[15rem] mx-[10%] grid gap-[1.8rem] ">
			<h1 className="font-title font-semibold text-[2.2rem] text-center">
				{t("about.greeting")}
			</h1>
			<hr className="mx-auto w-[100%] border-none h-[1px] bg-[#828282]" />
			<ProfileInfo />
			<CurriculumButton />
			<SocialLinks />
			<CurriculumSection />
		</div>
	);
}
