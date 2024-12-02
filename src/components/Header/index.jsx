import { motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHeader } from "../../hooks/useHeader";
import { Menu } from "../Menu";

export function Header() {
	const [isOpen, setOpen] = useState(false);
	const { headerHeight, headerRef } = useHeader();

	return (
		<>
			<motion.header
				ref={headerRef}
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				exit={{ y: -100 }}
				transition={{ duration: 0.5 }}
				className="bg-primaryBackground flex items-center justify-center p-6 gap-6 fixed top-0 left-0 w-full z-50"
			>
				<Hamburger toggled={isOpen} toggle={setOpen} color="#D9D9D9" />
				<Link
					to="/"
					onClick={() => setOpen(false)}
					className="font-title uppercase font-extrabold text-[2.4rem]"
				>
					Laís Sanseverino
				</Link>
				<hr className="w-[90%] h-[1px] bg-[#D9D9D9] absolute bottom-0" />
			</motion.header>
			<Menu isOpen={isOpen} headerHeight={headerHeight} setOpen={setOpen} />
		</>
	);
}
