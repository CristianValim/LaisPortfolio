import { useState, useEffect, useRef } from "react";

export function useHeader(threshold = 150) {
	const [showHeader, setShowHeader] = useState(false);
	const [headerHeight, setHeaderHeight] = useState(0);
	const headerRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > threshold) {
				setShowHeader(true);
			} else {
				setShowHeader(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [threshold]);

	useEffect(() => {
		if (headerRef.current) {
			setHeaderHeight(headerRef.current.offsetHeight);
		}
	}, []);

	return { showHeader, headerHeight, headerRef };
}
