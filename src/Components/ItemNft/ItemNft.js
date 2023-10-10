import React from 'react';
import styles from './itemNft.module.css';
import { Par } from '../UI/';

export const ItemNft = ({ item }) => {
	console.log(item);
	return (
		<div className={styles.item}>
			<div className={styles.itemLeft}>
				<div className={styles.img}>
					<img src={item.image} alt={item.title} />
				</div>
				<div>
					<Par className={styles.title} mb={4} size='sm' fw={600}>
						{item.title}
					</Par>
					<Par color='light'>{item.subtitle}</Par>
				</div>
			</div>
			<div className={styles.price}>
				<Par>{item.price}</Par>
			</div>
		</div>
	);
};
