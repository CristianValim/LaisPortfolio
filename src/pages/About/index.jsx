import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { Link } from "react-router-dom";
import profilestar from "../../assets/profile-star.svg";
import profile from "../../assets/profile.png";
import { Header } from "../../components/Header";

export function About() {
	const copyToClipboard = (text) => {
		navigator.clipboard.writeText(text).then(
			() => {
				alert("Email copiado para o clipboard!");
			},
			(err) => {
				console.error("Erro ao copiar o texto: ", err);
			},
		);
	};
	return (
		<>
			<Header />
			<div className="mt-[15rem] mx-[10%] grid gap-[1.8rem] ">
				<h1 className="font-title font-semibold text-[2.2rem] text-center">
					Olá! Eu sou a Laís Sanseverino
				</h1>
				<hr className="mx-auto w-[100%] border-none h-[1px] bg-[#828282]" />
				<section className="text-[1.4rem] mt-[3.2rem] grid grid-cols-[2fr_1fr] gap-[1.8rem] leading-[2.8rem]">
					<p>
						Minha visão é marcada pela interdisciplinaridade e movimentada pelo
						constante aprendizado, como é explícito nas minhas diversas
						formações e experiências de trabalho.
					</p>
					<img
						src={profile}
						alt="Foto de Laís Sanseverino"
						className="mt-[3rem]"
					/>
					<p className="col-span-2">
						Eu digo que gosto de pegar informação - redundante, prolixa e
						difícil - e transformar em comunicação visual concisa que agrade o
						público alvo, sempre com base no design informacional e de usuário.
					</p>
					<p className="col-span-2">
						Além de freelancer, trabalho como Designer Instrucional do Núcleo de
						Educação a Distância da Universidade Estadual de Londrina, e fui
						Coordenadora de Pesquisa Clínica no Centro Médico São Francisco
						(disse que aqui é interdisciplinar).{" "}
					</p>
					<p className="col-span-2">
						No tempo de lazer gosto de ir na academia e de me expressar
						artisticamente através de moda, artesanato e ilustração.
					</p>
				</section>
				<Link
					to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
					className="mx-auto px-[2.4rem] py-[1.4rem] text-[2.2rem] border border-[#848484] rounded-[2.5rem] block mt-[6rem]"
				>
					Currículo
				</Link>
				<div className="mx-auto grid gap-2 text-center text-[1.6rem] mt-[3.3rem]">
					<button
						type="button"
						onClick={() => copyToClipboard("lais.sanseverino@gmail.com")}
					>
						lais.sanseverino@gmail.com
					</button>
					<Link to="https://wa.me/5543996474471" target="_blank">
						+55 43 99647-4471
					</Link>
				</div>
				<div className="mx-[auto] flex gap-[4.5rem] mb-[6rem] mt-[4rem]">
					<Link
						to="https://www.linkedin.com/in/laissanseverino/"
						target="_blank"
						className="p-[1.2rem] border border-[#848484] rounded-[50%]"
					>
						<FaLinkedinIn size={20} className="fill-[#2F2F2F]" />
					</Link>
					<Link
						to="https://www.behance.net/Lsanseverino"
						target="_blank"
						className="p-[1.2rem] border border-[#848484] rounded-[50%]"
					>
						<FaBehance size={20} className="fill-[#2F2F2F]" />
					</Link>
				</div>
				<section className="py-[3rem] px-[3.5rem] border border-[#848484] rounded-[2.5rem] mb-[3rem]">
					<h2 className="font-title font-semibold text-[2.2rem]">Formada em</h2>
					<hr className="mx-auto w-[100%] border-none h-[1px] bg-[#828282]" />
					<p className="mt-[3.2rem] text-[1.4rem] leading-[2.8rem]">
						<ul>
							<li>
								<div className="flex gap-[1.5rem] mb-[2rem]">
									<img src={profilestar} alt="" />
									Bacharel em Design Gráfico{" "}
								</div>
								<ul className="grid grid-cols-[1fr_2fr]">
									<span class="row-span-2 my-[1.5rem] ml-[6rem] mr-[2rem] border-t border-b border-l border-gray-500" />
									<li className="col-start-2 mb-[2rem]">
										Especialista em Design Educacional
									</li>
									<li className="col-start-2 font-semibold">
										Mestra em Design da Informação
									</li>
								</ul>
							</li>
							<li>
								<div className="flex gap-[1.5rem] mb-[2rem] mt-[4rem]">
									<img src={profilestar} alt="" />
									Bacharel em Ciências Biológicas
								</div>
								<ul className="grid grid-cols-[1fr_2fr]">
									<span class="row-span-2 my-[1.5rem] ml-[6rem] mr-[2rem] border-t border-gray-500" />
									<li className="col-start-2">
										Especialista em Biologia e Conservação da Fauna Silvestre
									</li>
								</ul>
							</li>
						</ul>
					</p>
				</section>
				<section className="py-[3rem] px-[3.5rem] border border-[#848484] rounded-[2.5rem] mb-[6rem]">
					<h2 className="font-title font-semibold text-[2.2rem]">Formada em</h2>
					<hr className="mx-auto w-[100%] border-none h-[1px] bg-[#828282]" />
					<p className="mt-[3.2rem] text-[1.4rem] leading-[2.8rem]">
						<ul className="grid gap-[1.8rem]">
							<li>
								<div className="flex gap-[1.5rem] mb-[2rem]">
									<img src={profilestar} alt="" />
									Design instrucional
								</div>
								<ul className="grid grid-cols-[1fr_3fr] gap-y-[1rem]">
									<span
										className="row-span-4 mx-[3rem] my-[1.5rem] border-t border-b border-l border-gray-500 
                   relative"
									>
										<div className="absolute top-[33%] left-0 w-full border-t  border-gray-500" />
										<div className="absolute top-[66%] left-0 w-full border-t  border-gray-500" />
									</span>{" "}
									<li className="col-start-2">
										Moodle e ambientes virtuais de aprendizagem{" "}
									</li>
									<li className="col-start-2">
										Planejamento e criação de materiais educacionais{" "}
									</li>
									<li className="col-start-2">
										Guias, manuais e infográficos estáticos e interativos{" "}
									</li>
									<li className="col-start-2">Trilhas de aprendizagem </li>
								</ul>
							</li>
							<li>
								<div className="flex gap-[1.5rem]">
									<img src={profilestar} alt="" />
									Web Design{" "}
								</div>
							</li>
							<li>
								<div className="flex gap-[1.5rem]">
									<img src={profilestar} alt="" />
									Diagramação{" "}
								</div>
							</li>
							<li>
								<div className="flex gap-[1.5rem]">
									<img src={profilestar} alt="" />
									Ilustração{" "}
								</div>
							</li>
						</ul>
					</p>
				</section>
			</div>
		</>
	);
}
