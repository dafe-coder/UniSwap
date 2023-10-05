import React from 'react';
import styles from './par.module.css';
import cn from 'classnames';

export const Par = ({
	children,
	size = 'xs',
	color = 'white',
	mt = 0,
	mb = 0,
	center = true,
}) => {
	return (
		<div
			style={{ marginBottom: mb, marginTop: mt }}
			className={cn(styles.par, [styles[size]], {
				[styles[color]]: color !== 'white',
				[styles.center]: center,
			})}
		>
			{children}
		</div>
	);
};
