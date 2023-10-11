import React from 'react';
import styles from './item.module.css';
import { Par } from '../UI/Par/Par';
import { Toggle } from '../UI';

export const Item = ({
	img = '',
	name,
	symbol = '',
	amount = '',
	size = 'xs',
	toggle = true,
	onChange,
	id,
	onClick = null,
}) => {
	const onClickItem = () => {
		if (onClick !== null) {
			onClick();
		}
	};
	return (
		<div className={styles.item} onClick={onClickItem}>
			<div className={styles.infoWrap}>
				{img !== '' ? (
					<div className={styles.logo}>
						<img src={img} alt={name} />
					</div>
				) : (
					<></>
				)}
				<div className={styles.info}>
					<Par fw={600} size={size}>
						{name}
					</Par>
					{symbol !== '' ? (
						<Par color='light'>
							{amount}
							{' ' + symbol}
						</Par>
					) : (
						<></>
					)}
				</div>
			</div>
			{toggle && <Toggle id={id} onToggle={onChange} />}
		</div>
	);
};
