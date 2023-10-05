import React from 'react';
import styles from './item.module.css';
import { Par } from '../UI/Par/Par';
import { Toggle } from '../UI';

export const Item = ({ img, name, symbol, amount = '0.0' }) => {
	return (
		<div className={styles.item}>
			<div className={styles.infoWrap}>
				<div className={styles.logo}>
					<img src={img} alt={name} />
				</div>
				<div className={styles.info}>
					<Par fw={600}>{name}</Par>
					<Par color='light'>
						{amount}
						{' ' + symbol}
					</Par>
				</div>
			</div>
			<Toggle />
		</div>
	);
};
