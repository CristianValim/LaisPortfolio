import { Link } from "react-router-dom";

export function MenuNavigation() {
	return (
		<nav className="w-full flex justify-center">
			<ul className="flex flex-col items-center text-[2rem] p-10 space-y-5">
				<li>
					<Link className="font-semibold text-menu underline">trabalho</Link>
				</li>
				<li>
					<Link className="font-light text-menu underline">sobre</Link>
				</li>
				<li className="mt-8">
					<Link className="font-semibold text-menu underline">português</Link>
					<span> /</span>
					<Link className="font-light text-menu underline"> english</Link>
				</li>
			</ul>
		</nav>
	);
}
