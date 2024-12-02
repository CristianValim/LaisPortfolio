import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

export function useHeader(threshold = 150) {
	const [showHeader, setShowHeader] = useState(false);
	const [headerHeight, setHeaderHeight] = useState(0);
	const headerRef = useRef(null);
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === "/") {
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
		}
		setShowHeader(true);
		return undefined;
	}, [threshold, location.pathname]);

	useEffect(() => {
		if (headerRef.current) {
			setHeaderHeight(headerRef.current.offsetHeight);
		}
	}, []);

	return { showHeader, headerHeight, headerRef };
}
