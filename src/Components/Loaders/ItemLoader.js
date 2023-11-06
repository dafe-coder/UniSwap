import React from 'react';
import ContentLoader from 'react-content-loader';

export const ItemLoader = ({ style, px = 40 }) => {
	return (
		<ContentLoader
			style={style}
			speed={2}
			width={window.innerWidth - px}
			height={130}
			viewBox={`0 0 ${window.innerWidth - px} 130`}
			backgroundColor='var(--dark-border)'
			foregroundColor='var(--gray)'
		>
			<rect
				x='0'
				y='0'
				rx='4'
				ry='4'
				width={window.innerWidth - px}
				height='130'
			/>
		</ContentLoader>
	);
};
