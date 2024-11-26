export function Projects() {
	const projects = [
		{
			id: 1,
			name: "Projeto 1",
			image: "../../assets/projects/image1.png",
		},
		{
			id: 2,
			name: "Projeto 2",
			image: "../../assets/projects/image2.png",
		},
		{
			id: 3,
			name: "Projeto 3",
			image: "../../assets/projects/image2.png",
		},
	];

	return (
		<main className="flex flex-col items-center p-10 h-screen snap-start">
			<h1 className="font-title uppercase font-extrabold text-[2.4rem] mb-10">
				Meus Projetos
			</h1>
			<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				{projects.map((project) => (
					<div key={project.id} className="flex flex-col items-center">
						<img
							src={project.image}
							alt={project.name}
							className="w-full h-auto object-cover"
						/>
						<p className="mt-2 text-center">{project.name}</p>
					</div>
				))}
			</section>
		</main>
	);
}
