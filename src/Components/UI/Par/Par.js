import React from 'react';
import styles from './par.module.css';
import cn from 'classnames';

export const Par = ({
	children,
	size = 'xs',
	color = 'black',
	mt = 0,
	mb = 0,
	fw = 400,
	center = false,
	tt = '',
	className = '',
	style,
}) => {
	return (
		<div
			style={{
				marginBottom: mb,
				marginTop: mt,
				fontWeight: fw,
				textTransform: tt,
				...style,
			}}
			className={cn(styles.par, className, [styles[size]], {
				[styles[color]]: color !== 'white',
				[styles.center]: center,
			})}
		>
			{children}
		</div>
	);
};
