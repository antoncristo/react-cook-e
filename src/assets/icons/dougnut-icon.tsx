import { type SVGProps } from 'react';
import { type IconMargin } from './icon-template';
import { cookeTheme } from '@cooke/style';

export const DoughnutIcon = ({
	width = 18,
	height = 18,
	fill = cookeTheme.colors.primary,
	...margin
}: SVGProps<SVGSVGElement> & IconMargin): JSX.Element => {
	const { bottom = '0', left = '0', right = '0', top = '0' } = margin;

	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				margin: `${top} ${right} ${bottom} ${left}`,
				height: `${height}px`
			}}
		>
			<svg width={width} height={height} viewBox='0 0 24 24' fill='none'>
				<path
					d='M12 2C6.47715 2 2 6.47715 2 12C2 12.3539 2.01839 12.7036 2.05426 13.048C2.40307 13.3523 4.367 15 6 15C7.21199 15 8.60628 14.0924 9.38725 13.5L9.39619 13.4911C9.14413 13.0518 9 12.5427 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 12.8851 14.6167 13.6807 14.007 14.2298C14.4774 14.6425 15.0911 15 15.8053 15C17.4948 15 17.4948 13 19.1842 13C20.2618 13 21.1102 13.8136 21.5835 14.4029L21.6758 14.5353C21.8874 13.7256 22 12.876 22 12C22 6.47715 17.5228 2 12 2Z'
					fill={`rgb(${cookeTheme.colors.orange})`}
				/>
				<path
					d='M19.5272 5.41717C19.5071 5.43348 19.4876 5.45098 19.4689 5.46967L18.4689 6.46967C18.176 6.76256 18.176 7.23744 18.4689 7.53033C18.7618 7.82322 19.2367 7.82322 19.5296 7.53033L20.434 6.62594C20.162 6.19995 19.8586 5.79594 19.5272 5.41717Z'
					fill={`rgb(${cookeTheme.colors.secondary})`}
				/>
				<path
					d='M5.41644 4.47212C5.43274 4.4922 5.45025 4.51164 5.46894 4.53033L6.46894 5.53033C6.76183 5.82322 7.23671 5.82322 7.5296 5.53033C7.82249 5.23744 7.82249 4.76256 7.5296 4.46967L6.62521 3.56528C6.19922 3.83726 5.79521 4.14062 5.41644 4.47212Z'
					fill={`rgb(${cookeTheme.colors.secondary})`}
				/>
				<path
					d='M10.4689 4.53033C10.176 4.23744 10.176 3.76256 10.4689 3.46967C10.7618 3.17678 11.2367 3.17678 11.5296 3.46967L12.5296 4.46967C12.8225 4.76256 12.8225 5.23744 12.5296 5.53033C12.2367 5.82322 11.7618 5.82322 11.4689 5.53033L10.4689 4.53033Z'
					fill={`rgb(${cookeTheme.colors.secondary})`}
				/>
				<path
					d='M16.5993 5.45C16.8478 5.11863 16.7806 4.64853 16.4493 4.4C16.1179 4.15147 15.6478 4.21863 15.3993 4.55L13.8993 6.55C13.6507 6.88137 13.7179 7.35147 14.0493 7.6C14.3806 7.84853 14.8507 7.78137 15.0993 7.45L16.5993 5.45Z'
					fill={`rgb(${cookeTheme.colors.secondary})`}
				/>
				<path
					d='M8.4088 7.56014C8.51601 7.96024 8.92726 8.19768 9.32736 8.09047L10.6934 7.72444C11.0935 7.61724 11.3309 7.20599 11.2237 6.80589C11.1165 6.40579 10.7053 6.16835 10.3052 6.27556L8.93913 6.64158C8.53903 6.74879 8.30159 7.16004 8.4088 7.56014Z'
					fill={`rgb(${cookeTheme.colors.secondary})`}
				/>
				<path
					d='M17.4646 10.354C17.484 10.7678 17.1644 11.119 16.7506 11.1384C16.3368 11.1579 15.9857 10.8382 15.9662 10.4245L15.8998 9.01181C15.8804 8.59806 16.2 8.24688 16.6138 8.22743C17.0276 8.20799 17.3787 8.52764 17.3982 8.94139L17.4646 10.354Z'
					fill={`rgb(${cookeTheme.colors.secondary})`}
				/>
				<path
					d='M18.4361 12.0586C18.7098 12.3694 19.1837 12.3995 19.4946 12.1257L21.1727 10.6479C21.4835 10.3741 21.5136 9.90018 21.2398 9.58933C20.9661 9.27848 20.4921 9.24841 20.1813 9.52217L18.5032 11C18.1924 11.2738 18.1623 11.7477 18.4361 12.0586Z'
					fill={`rgb(${cookeTheme.colors.secondary})`}
				/>
				<path
					d='M5.52372 8.16677C5.35231 7.78969 5.51904 7.34505 5.89613 7.17364C6.27321 7.00223 6.71785 7.16896 6.88926 7.54605L7.47449 8.83349C7.64589 9.21058 7.47916 9.65522 7.10208 9.82662C6.72499 9.99803 6.28035 9.8313 6.10895 9.45422L5.52372 8.16677Z'
					fill={`rgb(${cookeTheme.colors.secondary})`}
				/>
				<path
					d='M6.94222 10.895C7.27648 11.1397 7.34913 11.6089 7.10449 11.9432L6.26926 13.0844C6.02463 13.4187 5.55534 13.4913 5.22109 13.2467C4.88683 13.0021 4.81418 12.5328 5.05881 12.1985L5.89405 11.0573C6.13868 10.723 6.60796 10.6504 6.94222 10.895Z'
					fill={`rgb(${cookeTheme.colors.secondary})`}
				/>
				<path
					d='M2.8547 8.97928C2.83166 8.56571 3.14825 8.21177 3.56182 8.18873C3.97539 8.16569 4.32934 8.48228 4.35238 8.89585L4.43104 10.3079C4.45408 10.7214 4.13749 11.0754 3.72392 11.0984C3.31034 11.1215 2.9564 10.8049 2.93336 10.3913L2.8547 8.97928Z'
					fill={`rgb(${cookeTheme.colors.secondary})`}
				/>
				<path
					d='M6.00043 15C7.21242 15 8.60671 14.0924 9.38768 13.5L9.39662 13.4911C9.91405 14.3927 10.8863 15 12.0004 15C12.7722 15 13.4759 14.7086 14.0075 14.2298C14.4779 14.6425 15.0915 15 15.8058 15C16.6505 15 17.0729 14.5 17.4952 14C17.9176 13.5 18.3399 13 19.1847 13C20.2622 13 21.1107 13.8136 21.5839 14.4029L21.6762 14.5353C21.6604 14.596 21.644 14.6564 21.627 14.7166C21.0865 14.256 20.1866 14.2717 19.4792 14.7949C18.8777 15.2397 18.5862 15.9252 18.6859 16.5211L18.5845 16.6225L18.25 16.1703C17.6343 15.3377 16.3225 15.2638 15.32 16.0052C14.3174 16.7466 14.0039 18.0225 14.6196 18.8551L14.8049 19.1056L14.6196 19.2909C14.1068 19.1294 13.4721 19.2373 12.9445 19.6275C12.1472 20.2171 12.0096 21.3207 12.4919 21.988C12.3291 21.9959 12.1652 21.9999 12.0005 21.9999C6.83158 21.9999 2.57857 18.0783 2.05469 13.048C2.4035 13.3523 4.36743 15 6.00043 15Z'
					fill={`rgb(${cookeTheme.colors.primary})`}
				/>
			</svg>
		</div>
	);
};
