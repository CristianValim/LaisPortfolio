import { useEffect, useState } from "react";
import star from "../../assets/star.svg";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Projects } from "../Projects";

export function Home() {
    const [isOpen, setOpen] = useState(true);
    const [showHeader, setShowHeader] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShowHeader(true);
            } else {
                setShowHeader(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <main className="flex flex-col">
            {showHeader && <Header />}
            <section className="flex flex-grow flex-col justify-center items-center gap-y-10 h-screen">
                <h1 className="font-title uppercase font-extrabold text-[2.4rem]">
                    Laís Sanseverino
                </h1>
                <img src={star} alt="logo em formato de estrela" className="max-w-[5rem]" />
                <p className="text-[1.8rem] text-center max-w-[22rem]">
                    Tudo bom? Meu nome é Laís Sanseverino - designer e bióloga, encantada
                    pelas relações entre saúde, educação e design informacional.
                </p>
                <Menu isOpen={isOpen} />
            </section>
            <Projects />
        </main>
    );
}