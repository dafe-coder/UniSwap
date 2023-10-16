import React from 'react';
import ContentLoader from 'react-content-loader';

export const PriceLoader = (props) => {
	return (
		<ContentLoader
			speed={2}
			width={window.innerWidth - 40}
			height={150}
			viewBox={`0 0 ${window.innerWidth - 40} 150`}
			backgroundColor='var(--bg-dark)'
			foregroundColor='var(--gray-border)'
			{...props}
		>
			<rect
				x='0'
				y='0'
				rx='0'
				ry='0'
				width={window.innerWidth - 40}
				height='150'
			/>
		</ContentLoader>
	);
};
