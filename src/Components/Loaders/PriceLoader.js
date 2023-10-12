import React from 'react';
import ContentLoader from 'react-content-loader';

export const PriceLoader = (props) => {
	return (
		<ContentLoader
			speed={2}
			width={window.innerWidth - 40}
			height={180}
			viewBox={`0 0 ${window.innerWidth - 40} 180`}
			backgroundColor='#09202A'
			foregroundColor='var(--primary-light)'
			{...props}
		>
			<rect
				x='0'
				y='0'
				rx='16'
				ry='16'
				width={window.innerWidth - 40}
				height='180'
			/>
		</ContentLoader>
	);
};
