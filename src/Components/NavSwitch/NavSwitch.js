import React from 'react';
import cn from 'classnames';
import styles from './navSwitch.module.css';

export const NavSwitch = ({ leftText, rightText, active = false }) => {
	return (
		<div className={styles.wrap}>
			<div
				className={cn(styles.item, {
					[styles.active]: active,
				})}
			>
				{leftText}
			</div>
			<div
				className={cn(styles.item, {
					[styles.active]: !active,
				})}
			>
				{rightText}
			</div>
		</div>
	);
};
