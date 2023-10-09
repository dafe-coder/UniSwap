import React from 'react';
import cn from 'classnames';
import styles from './title.module.css';

export const Title = ({
	children,
	center = true,
	mt = 0,
	mb = 0,
	fw = 600,
	size = 'sm',
	color = 'white',
}) => {
	return (
		<div
			style={{ marginTop: mt, marginBottom: mb, fontWeight: fw }}
			className={cn(styles.title, {
				[styles['center']]: center,
				[styles[size]]: size !== 'sm',
				[styles[color]]: size !== 'white',
			})}
		>
			{children}
		</div>
	);
};
