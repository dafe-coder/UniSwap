import React from 'react';
import styles from './cardPrice.module.css';
import { Par, Title } from '../UI';
import { Indicators } from '../Indicators/Indicators';

export const CardPrice = ({ balance, change }) => {
	return (
		<div className={styles.card}>
			<div className={styles.cardInfo}>
				<Par size='sm' mb={8}>
					My balance
				</Par>
				<Title size='xl'>$ {balance}</Title>
			</div>
			<Indicators
				usd={change.usd}
				percent={change.percent}
				style={{ right: 16, bottom: 16 }}
			/>
		</div>
	);
};
