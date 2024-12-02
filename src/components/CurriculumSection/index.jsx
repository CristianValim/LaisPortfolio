import { useTranslation } from "react-i18next";
import profilestar from "../../assets/profile-star.svg";

export function CurriculumSection() {
	const { t } = useTranslation();

	return (
		<>
			<section className="py-[3rem] px-[3.5rem] border border-[#848484] rounded-[2.5rem] mb-[3rem]">
				<h2 className="font-title font-semibold text-[2.2rem]">
					{t("CurriculumSection.graduatedIn")}
				</h2>
				<hr className="mx-auto w-[100%] border-none h-[1px] bg-[#828282]" />
				<div className="mt-[3.2rem] text-[1.4rem]">
					<ul>
						<li>
							<div className="flex gap-[1.5rem] mb-[2rem]">
								<img src={profilestar} alt="" />
								{t("CurriculumSection.graphicDesign.degreeDesign")}
							</div>
							<ul className="grid grid-cols-[1fr_2fr]">
								<span className="row-span-2 my-[1.5rem] ml-[5rem] mr-[2rem] border-t border-b border-l border-gray-500" />
								<li className="col-start-2 mb-[2rem]">
									{t("CurriculumSection.graphicDesign.specializationDesign1")}
								</li>
								<li className="col-start-2 font-semibold">
									{t("CurriculumSection.graphicDesign.specializationDesign2")}
								</li>
							</ul>
						</li>
						<li>
							<div className="flex gap-[1.5rem] my-[2rem]">
								<img src={profilestar} alt="" />
								{t("CurriculumSection.graphicDesign.degreeBio")}
							</div>
							<ul className="grid grid-cols-[1fr_2fr]">
								<span className="my-[1rem] ml-[5rem] mr-[2rem] border-t border-gray-500" />
								<li className="col-start-2 mb-[2rem]">
									{t("CurriculumSection.graphicDesign.specializationsBio")}
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</section>

			<section className="py-[3rem] px-[3.5rem] border border-[#848484] rounded-[2.5rem] mb-[6rem]">
				<h2 className="font-title font-semibold text-[2.2rem]">
					{t("CurriculumSection.graduatedIn")}
				</h2>
				<hr className="mx-auto w-[100%] border-none h-[1px] bg-[#828282]" />
				<div className="mt-[3.2rem] text-[1.4rem]">
					<ul className="grid gap-[1.8rem]">
						<li>
							<div className="flex gap-[1.5rem] mb-[2rem]">
								<img src={profilestar} alt="" />
								{t("CurriculumSection.instructionalDesign.degreeDesign")}
							</div>
							<ul className="grid grid-cols-[1fr_3fr] gap-y-[1rem]">
								<span
									className="row-span-4 mx-[2.5rem] my-[1.5rem] border-t border-b border-l border-gray-500 
                  relative"
								>
									<div className="absolute top-[33%] left-0 w-full border-t border-gray-500" />
									<div className="absolute top-[66%] left-0 w-full border-t border-gray-500" />
								</span>
								<li className="col-start-2">
									{t(
										"CurriculumSection.instructionalDesign.specializationDesign1",
									)}
								</li>
								<li className="col-start-2">
									{t(
										"CurriculumSection.instructionalDesign.specializationDesign2",
									)}
								</li>
								<li className="col-start-2">
									{t(
										"CurriculumSection.instructionalDesign.specializationDesign3",
									)}
								</li>
								<li className="col-start-2">
									{t(
										"CurriculumSection.instructionalDesign.specializationDesign4",
									)}
								</li>
							</ul>
						</li>
						<li>
							<div className="flex gap-[1.5rem]">
								<img src={profilestar} alt="" />
								{t("CurriculumSection.instructionalDesign.degreeWeb")}
							</div>
						</li>
						<li>
							<div className="flex gap-[1.5rem]">
								<img src={profilestar} alt="" />
								{t("CurriculumSection.instructionalDesign.degreeDiag")}
							</div>
						</li>
						<li>
							<div className="flex gap-[1.5rem]">
								<img src={profilestar} alt="" />
								{t("CurriculumSection.instructionalDesign.degreeIlustration")}
							</div>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
}
