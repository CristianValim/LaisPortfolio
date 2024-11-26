import { useState } from "react";
import star from "../../assets/star.svg";
import { Header } from "../../components/Header";
import { useScroll } from "../../hooks/useScroll";
import { useHeader } from "../../hooks/useHeader";
import { AnimatePresence } from "framer-motion";
import { MenuNavigation } from "../../components/MenuNavigation";

export function Home() {
	const [isOpen, setOpen] = useState(true);
	const { snapClass } = useScroll();
	const { showHeader } = useHeader();

	return (
		<main className="flex flex-col snap-y scroll-snap-type-y-mandatory">
			<AnimatePresence>{showHeader && <Header />}</AnimatePresence>
			<section
				className={`flex flex-grow flex-col justify-center items-center gap-y-10 h-screen ${snapClass}`}
			>
				<h1 className="font-title uppercase font-extrabold text-[2.4rem]">
					Laís Sanseverino
				</h1>
				<img
					src={star}
					alt="logo em formato de estrela"
					className="max-w-[5rem]"
				/>
				<p className="text-[1.8rem] text-center max-w-[22rem]">
					Tudo bom? Meu nome é Laís Sanseverino - designer e bióloga, encantada
					pelas relações entre saúde, educação e design informacional.
				</p>
				<MenuNavigation />
			</section>
		</main>
	);
}
