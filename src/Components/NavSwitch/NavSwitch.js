import React from 'react';
import cn from 'classnames';
import styles from './navSwitch.module.css';

export const NavSwitch = ({
	leftText,
	rightText,
	active = false,
	setActive,
	styleWrap,
	size = 'm',
}) => {
	return (
		<div className={styles.wrap} style={{ ...styleWrap }}>
			<div
				style={size === 'sm' ? { padding: '6px 8px', fontSize: 14 } : {}}
				onClick={() => setActive(true)}
				className={cn(styles.item, {
					[styles.active]: active,
				})}
			>
				{leftText}
			</div>
			<div
				style={size === 'sm' ? { padding: '6px 8px', fontSize: 14 } : {}}
				onClick={() => setActive(false)}
				className={cn(styles.item, {
					[styles.active]: !active,
				})}
			>
				{rightText}
			</div>
		</div>
	);
};
