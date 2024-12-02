import { useState } from "react";

export function useMenu() {
	const [isOpen, setIsOpen] = useState(false);

	function toggleMenu() {
		setIsOpen((prevState) => !prevState);
	}

	function closeMenu() {
		setIsOpen(false);
	}

	function openMenu() {
		setIsOpen(true);
	}

	return {
		isOpen,
		toggleMenu,
		closeMenu,
		openMenu,
	};
}
