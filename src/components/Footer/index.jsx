import { Link } from "react-router-dom";

export function Footer() {
	return (
		<footer className="grid font-title text-[1.2rem]">
			<hr className="mx-auto w-[100%] border-none h-[1px] bg-[#D9D9D9]" />
			<p className="pt-[2rem] pb-[3rem] px-[2rem]">
				Design por Laís Sanseverino / Programação por{" "}
				<Link
					className="underline"
					to="https://github.com/CristianValim"
					target="_blank"
				>
					Cristian Valim
				</Link>
			</p>
		</footer>
	);
}
