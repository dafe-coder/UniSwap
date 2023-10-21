import React from 'react';
import ContentLoader from 'react-content-loader';

export const PriceLoader = (props) => {
	return (
		<ContentLoader
			speed={2}
			width={window.innerWidth - 40}
			height={221}
			viewBox={`0 0 ${window.innerWidth - 40} 221`}
			backgroundColor='var(--light)'
			foregroundColor='var(--gray-light)'
			{...props}
		>
			<rect
				x='0'
				y='0'
				rx='20'
				ry='20'
				width={window.innerWidth - 40}
				height='221'
			/>
		</ContentLoader>
	);
};
