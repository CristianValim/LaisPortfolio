import { ProjectsData } from "../../data/ProjectsData";

export function Projects() {
	return (
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
	);
}
