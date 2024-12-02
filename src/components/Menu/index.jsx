import { MenuNavigation } from "../MenuNavigation";

export function Menu({ isOpen, headerHeight, setOpen }) {
	return (
		<div
			className={`transition-all duration-300 ease-in-out fixed left-0 w-full bg-primaryBackground ${
				isOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"
			} overflow-hidden`}
			style={{
				top: headerHeight,
			}}
		>
			<MenuNavigation setOpen={setOpen} />
		</div>
	);
}
