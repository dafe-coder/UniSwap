import React from 'react';
import ContentLoader from 'react-content-loader';

export const PriceLoader = (props) => {
	return (
		<ContentLoader
			speed={2}
			width={window.innerWidth - 40}
			height={180}
			viewBox={`0 0 ${window.innerWidth - 40} 180`}
			backgroundColor='var(--dark-border)'
			foregroundColor='var(--gray)'
			{...props}
		>
			<rect
				x='0'
				y='0'
				rx='8'
				ry='8'
				width={window.innerWidth - 40}
				height='180'
			/>
		</ContentLoader>
	);
};
