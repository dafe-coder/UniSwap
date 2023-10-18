import React from 'react';
import cn from 'classnames';
import styles from './title.module.css';

export const Title = ({
	children,
	center = true,
	mt = 0,
	mb = 0,
	fw = 700,
	size = 'sm',
	color = 'black',
	className,
}) => {
	return (
		<div
			style={{ marginTop: mt, marginBottom: mb, fontWeight: fw }}
			className={cn(styles.title, className, {
				[styles['center']]: center,
				[styles[size]]: size !== 'sm',
				[styles[color]]: size !== 'black',
			})}
		>
			{children}
		</div>
	);
};
