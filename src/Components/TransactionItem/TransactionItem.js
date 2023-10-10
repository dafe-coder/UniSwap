import React from 'react';
import styles from './transactionItem.module.css';
import { useNavigate } from 'react-router-dom';
import fixNum from '../../func.wallet/fixNum';
import { Par } from '../UI';

export const TransactionItem = ({ data }) => {
	const navigate = useNavigate();

	return (
		<div
			className={styles.item}
			onClick={() => navigate('/assets-info', { state: data })}
		>
			<div className={styles.itemLeft}>
				<div className={styles.img}>
					<img src={data.image.thumb} alt={data.title} />
				</div>
				<div>
					<Par size='sm' fw={600} mb={4}>
						{data.name}
					</Par>
					<Par color='light'>
						{fixNum(data.market_data.balance)}
						{' ' + data.symbol.toUpperCase()}
					</Par>
				</div>
			</div>
			<div className={styles.itemRight}>
				<div className={styles.info}>
					<Par size='m' fw={600}>
						${fixNum(data.market_data.balance_crypto)}
					</Par>
				</div>
			</div>
		</div>
	);
};
