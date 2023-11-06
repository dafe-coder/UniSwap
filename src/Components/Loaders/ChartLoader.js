import React from 'react';
import ContentLoader from 'react-content-loader';

export const ChartLoader = ({ style, width }) => {
	return (
		<ContentLoader
			style={style}
			speed={2}
			width={width ? width : 350}
			height={158}
			viewBox={width ? `0 0 ${width} 158` : '0 0 350 208'}
			backgroundColor='var(--dark-border)'
			foregroundColor='var(--gray)'
		>
			<rect
				x='0'
				y='0'
				rx='8'
				ry='8'
				width={width ? width : 350}
				height='158'
			/>
		</ContentLoader>
	);
};
