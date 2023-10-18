import React from 'react';
import cn from 'classnames';
import styles from './step.module.css';

const count = Array.from(new Array(3).keys());

export const StepProgress = ({ active }) => {
	return (
		<div className={styles.wrap}>
			{count.map((_, i) => (
				<div
					key={i}
					className={cn(styles.indicator, {
						[styles.active]: active === i + 1,
					})}
				/>
			))}
		</div>
	);
};
