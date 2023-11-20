import React from 'react';
import ContentLoader from 'react-content-loader';

export const ItemLoader = ({ style, px = 40 }) => {
	return (
		<ContentLoader
			style={style}
			speed={2}
			width={window.innerWidth - px}
			height={60}
			viewBox={`0 0 ${window.innerWidth - px} 60`}
			backgroundColor='var(--dark-border)'
			foregroundColor='#b4b7ba'
		>
			<rect
				x='0'
				y='0'
				rx='6'
				ry='6'
				width={window.innerWidth - px}
				height='60'
			/>
		</ContentLoader>
	);
};
