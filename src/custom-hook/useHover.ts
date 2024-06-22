import { useState, useRef, useEffect } from 'react';

type UseHoverResult = {
	hovered: boolean;
	ref: React.RefObject<HTMLDivElement>;
};

const useHover = (): UseHoverResult => {
	const [hovered, setHovered] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	const handleMouseEnter = () => setHovered(true);
	const handleMouseLeave = () => setHovered(false);

	useEffect(() => {
		const node = ref.current;
		if (node) {
			node.addEventListener('mouseenter', handleMouseEnter);
			node.addEventListener('mouseleave', handleMouseLeave);

			return () => {
				node.removeEventListener('mouseenter', handleMouseEnter);
				node.removeEventListener('mouseleave', handleMouseLeave);
			};
		}
	}, [ref]);

	return { hovered, ref };
};

export default useHover;