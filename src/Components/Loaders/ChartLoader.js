import React from 'react';
import ContentLoader from 'react-content-loader';

export const ChartLoader = ({ style, width }) => {
	return (
		<ContentLoader
			style={style}
			speed={2}
			width={width ? width : 350}
			height={208}
			viewBox={width ? `0 0 ${width} 208` : '0 0 350 208'}
			backgroundColor='var(--bg-dark)'
			foregroundColor='var(--gray-border)'
		>
			<rect
				x='0'
				y='0'
				rx='20'
				ry='20'
				width={width ? width : 350}
				height='208'
			/>
		</ContentLoader>
	);
};
