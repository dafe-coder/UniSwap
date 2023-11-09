import React from 'react';
import ContentLoader from 'react-content-loader';

export const ItemLoader = ({ style, px = 40 }) => {
	return (
		<ContentLoader
			style={style}
			speed={2}
			width={window.innerWidth - px}
			height={100}
			viewBox={`0 0 ${window.innerWidth - px} 100`}
			backgroundColor='var(--gray)'
			foregroundColor='var(--dark-border)'
		>
			<rect
				x='0'
				y='0'
				rx='16'
				ry='16'
				width={window.innerWidth - px}
				height='100'
			/>
		</ContentLoader>
	);
};
