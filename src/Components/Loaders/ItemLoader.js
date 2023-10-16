import React from 'react';
import ContentLoader from 'react-content-loader';

export const ItemLoader = ({ style, px = 40 }) => {
	return (
		<ContentLoader
			style={style}
			speed={2}
			width={window.innerWidth - px}
			height={90}
			viewBox={`0 0 ${window.innerWidth - px} 90`}
			backgroundColor='var(--bg-dark)'
			foregroundColor='var(--gray-border)'
		>
			<rect
				x='0'
				y='0'
				rx='0'
				ry='0'
				width={window.innerWidth - px}
				height='90'
			/>
		</ContentLoader>
	);
};
