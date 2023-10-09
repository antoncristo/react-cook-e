import { useEffect, useRef } from 'react';

export const useDebounce = ({ cb, delay = 500 }: { cb: Function; delay?: number }) => {
	const timeout = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		clearTimeout(timeout.current!);

		timeout.current = setTimeout(() => {
			cb();
		}, delay);
	}, [cb]);
};
