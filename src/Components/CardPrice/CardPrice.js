import React from 'react';
import styles from './cardPrice.module.css';
import { Par, Title } from '../UI';
import { Indicators } from '../Indicators/Indicators';

export const CardPrice = ({ balance, change }) => {
	return (
		<div className={styles.card}>
			<div className={styles.cardInfo}>
				<Par color='light' fw={500} size='sm' mb={8} center={false}>
					My balance
				</Par>
				<Title color='black' center={false} size='xxl'>
					$ {balance}
				</Title>
			</div>
			<Indicators
				usd={change.usd}
				percent={change.percent}
				style={{ position: 'relative' }}
			/>
		</div>
	);
};
