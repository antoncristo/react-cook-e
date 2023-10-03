import { useCallback, useEffect, useState } from 'react';

interface BreakPointSwitchProps {
	switchAt: string;
	before: JSX.Element | null;
	after: JSX.Element | null;
}

export const BreakPointSwitch = (props: BreakPointSwitchProps) => {
	const { after, before, switchAt } = props;

	const [isMatch, setIsMatch] = useState(
		window.matchMedia(`(min-width:${switchAt})`).matches
	);

	const handleResize = useCallback(() => {
		if (window.matchMedia(`(min-width:${switchAt})`).matches) {
			setIsMatch(true);
		} else {
			setIsMatch(false);
		}
	}, []);

	useEffect(() => {
		addEventListener('resize', handleResize);

		return () => {
			removeEventListener('resize', handleResize);
		};
	}, []);

	return isMatch ? after : before;
};
