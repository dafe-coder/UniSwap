import React from 'react';
import ContentLoader from 'react-content-loader';

export const PriceLoader = (props) => {
	return (
		<ContentLoader
			speed={2}
			width={window.innerWidth - 40}
			height={300}
			viewBox={`0 0 ${window.innerWidth - 40} 300`}
			backgroundColor='var(--gray)'
			foregroundColor='var(--dark-border)'
			{...props}
		>
			<rect
				x='0'
				y='0'
				rx='16'
				ry='16'
				width={window.innerWidth - 40}
				height='300'
			/>
		</ContentLoader>
	);
};
