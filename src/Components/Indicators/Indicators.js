import React from 'react';
import styles from './indicators.module.css';
import classNames from 'classnames/bind';
import fixNum from '../../func.wallet/fixNum';

export const Indicators = ({ percent, usd, style }) => {
	const variants = {
		green: styles.green,
		red: styles.red,
	};
	return (
		<div
			style={style}
			className={classNames(
				styles.row,
				variants[percent > 0 ? 'green' : 'red']
			)}
		>
			{usd && (
				<div className={styles.text}>
					{percent > 0 ? '+' : ''}
					{fixNum(usd)} $
				</div>
			)}
			<div className={styles.block}>
				{percent > 0 ? '+' : ''}
				{fixNum(percent)}%
			</div>
		</div>
	);
};
