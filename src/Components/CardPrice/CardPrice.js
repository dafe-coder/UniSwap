import React from 'react';
import styles from './cardPrice.module.css';
import { Par, Title, CircleButton } from '../UI';
import { Indicators } from '../Indicators/Indicators';

export const CardPrice = ({ balance, change, stylesBtn }) => {
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
				style={{ right: 16, top: 15 }}
			/>
			<div className={stylesBtn.btnsCircle}>
				<CircleButton
					to='/swap-coins'
					state={{ to: '/send-amount', from: 'swapOne' }}
					title='Send'
					icon='send'
				/>
				<CircleButton title='Receive' icon='receive' to='/home/receive' />
				<CircleButton title='Buy' icon='buy' to='/buy' />
			</div>
		</div>
	);
};
