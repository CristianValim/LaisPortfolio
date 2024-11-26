import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Menu } from "../Menu";

export function Header() {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <header className="bg-primaryBackground flex items-center justify-center p-6 gap-6 fixed top-0 left-0 w-full z-50">
                <Hamburger toggled={isOpen} toggle={setOpen} color="#D9D9D9" />
                <h1 className="font-title uppercase font-extrabold text-[2.4rem]">
                    Laís Sanseverino
                </h1>
            </header>
            <Menu isOpen={isOpen} />
        </>
    );
}