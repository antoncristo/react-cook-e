import { useRef, type ReactNode, useEffect, useState } from 'react';

import * as Styled from './popover.styled';

interface PopoverProps {
	children: ReactNode;
	anchor: HTMLButtonElement | null;
	onClose: () => void;
	relativeToAnchorX: 'left' | 'right';
	// Fix: relativeToAnchorY: 'top' | 'bottom';
}

export const Popover = (props: PopoverProps) => {
	const { children, anchor, onClose, relativeToAnchorX } = props;
	const popoverRef = useRef<HTMLDivElement>(null);
	const [position, setPosition] = useState<Record<string, string>>({});

	useEffect(() => {
		if (popoverRef.current && Object.keys(position).length === 0) {
			setPosition({
				left: `${(anchor?.offsetLeft ?? 0) - (popoverRef.current?.clientWidth ?? 0)}px`,
				right: `${(anchor?.offsetLeft ?? 0) + (anchor?.offsetWidth ?? 0)}px`
			});
		}
	});

	useEffect(() => {
		popoverRef.current?.focus();
	});

	return anchor ? (
		<Styled.Popover
			style={{ left: position[relativeToAnchorX] }}
			ref={popoverRef}
			tabIndex={0}
			onBlur={onClose}
		>
			{children}
		</Styled.Popover>
	) : null;
};
