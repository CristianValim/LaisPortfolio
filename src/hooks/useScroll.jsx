import { useState, useEffect } from "react";

export function useScroll(threshold = 50) {
	const [snapClass, setSnapClass] = useState("snap-start");

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > threshold) {
				setSnapClass("");
			} else {
				setSnapClass("snap-start");
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [threshold]);

	return { snapClass };
}
