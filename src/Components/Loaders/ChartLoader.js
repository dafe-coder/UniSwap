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
			backgroundColor='var(--light)'
			foregroundColor='var(--gray-light)'
		>
			<rect
				x='0'
				y='0'
				rx='20'
				ry='20'
				width={width ? width : 350}
				height='158'
			/>
		</ContentLoader>
	);
};
