import { type SVGProps } from 'react';
import { Colors } from '@cooke/style/colors';
import { type IconMargin } from './icon-template';

export const FavoritesIcon = ({
	width = 24,
	height = 24,
	fill = Colors.BLACK,
	...margin
}: SVGProps<SVGSVGElement> & IconMargin): JSX.Element => {
	const { bottom = '0', left = '0', right = '0', top = '0' } = margin;

	return (
		<div style={{ margin: `${top} ${right} ${bottom} ${left}`, height: `${height}px` }}>
			<svg width={width} height={height} viewBox='0 0 24 24' fill='none'>
				<path
					d='M15.2516 10.689C14.265 9.50847 13.7716 8.91821 13.2045 9.00913C12.6375 9.10004 12.3722 9.81193 11.8416 11.2357L11.7043 11.604C11.5535 12.0086 11.4781 12.2109 11.3314 12.3599C11.1848 12.509 10.9834 12.5878 10.5806 12.7456L10.214 12.8892C8.79667 13.4443 8.08803 13.7218 8.00721 14.2891C7.92639 14.8564 8.52692 15.3378 9.72797 16.3004L10.0387 16.5495C10.38 16.8231 10.5507 16.9599 10.6494 17.1471C10.7482 17.3343 10.7639 17.5508 10.7954 17.9837L10.824 18.3779C10.9347 19.9015 10.9901 20.6633 11.5072 20.923C12.0244 21.1827 12.6608 20.7683 13.9337 19.9395L14.263 19.7251C14.6247 19.4896 14.8056 19.3718 15.0133 19.3385C15.2211 19.3052 15.4322 19.3601 15.8543 19.47L16.2387 19.57C17.7244 19.9565 18.4673 20.1498 18.8677 19.743C19.2681 19.3362 19.061 18.5987 18.6466 17.1238L18.5394 16.7422C18.4216 16.3231 18.3628 16.1135 18.3924 15.9057C18.422 15.6979 18.5367 15.5154 18.7662 15.1503L18.9751 14.818C19.7826 13.5332 20.1864 12.8909 19.9167 12.3798C19.647 11.8687 18.8826 11.8273 17.3536 11.7446L16.958 11.7231C16.5235 11.6996 16.3063 11.6879 16.1168 11.5927C15.9274 11.4976 15.7872 11.3299 15.5068 10.9944L15.2516 10.689Z'
					fill={`rgb(${Colors.PRIMARY})`}
				/>
				<path
					d='M10.3312 4.252C11.6467 2.67797 12.3045 1.89095 13.0606 2.01217C13.8167 2.13339 14.1705 3.08257 14.8779 4.98092L15.0609 5.47204C15.262 6.0115 15.3625 6.28122 15.5581 6.47991C15.7537 6.6786 16.0222 6.78376 16.5592 6.99409L17.048 7.18557C18.9378 7.9257 19.8826 8.29576 19.9904 9.05216C20.0982 9.80855 19.2974 10.4503 17.696 11.7339L17.2817 12.066C16.8267 12.4308 16.5991 12.6131 16.4674 12.8628C16.3357 13.1124 16.3147 13.4011 16.2728 13.9783L16.2346 14.5039C16.087 16.5353 16.0132 17.5511 15.3237 17.8973C14.6342 18.2436 13.7856 17.6911 12.0884 16.586L11.6493 16.3001C11.167 15.9861 10.9259 15.8291 10.6489 15.7847C10.3719 15.7403 10.0905 15.8135 9.52753 15.96L9.01504 16.0933C7.0341 16.6087 6.04363 16.8664 5.50972 16.324C4.97581 15.7816 5.25206 14.7983 5.80455 12.8317L5.94749 12.323C6.10449 11.7641 6.18299 11.4847 6.14351 11.2076C6.10404 10.9306 5.95106 10.6872 5.6451 10.2004L5.36654 9.75727C4.28985 8.04433 3.75151 7.18787 4.11106 6.50639C4.4706 5.82491 5.48992 5.76974 7.52857 5.65941L8.05599 5.63086C8.63531 5.59951 8.92497 5.58383 9.17756 5.45699C9.43014 5.33015 9.61705 5.1065 9.99088 4.65922L10.3312 4.252Z'
					fill={`rgb(${Colors.TERNARY})`}
				/>
			</svg>
		</div>
	);
};