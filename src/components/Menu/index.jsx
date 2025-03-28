import { MenuNavigation } from "../MenuNavigation";

export function Menu({ isOpen, headerHeight, closeMenu }) {
	return (
		<div
			className={`transition-all duration-300 ease-in-out fixed left-0 w-full bg-primaryBackground ${
				isOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"
			} overflow-hidden`}
			style={{
				top: headerHeight,
			}}
		>
			<MenuNavigation closeMenu={closeMenu} />
		</div>
	);
}
