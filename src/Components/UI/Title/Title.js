import React from 'react';
import cn from 'classnames';
import styles from './title.module.css';

export const Title = ({
	children,
	center = true,
	mt = 0,
	mb = 0,
	size = 'sm',
}) => {
	return (
		<div
			style={{ marginTop: mt, marginBottom: mb }}
			className={cn(styles.title, {
				[styles['center']]: center,
				[styles[size]]: size !== 'sm',
			})}
		>
			{children}
		</div>
	);
};
