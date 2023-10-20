import React from 'react';
import styles from './itemNft.module.css';

export const ItemNft = ({ item }) => {
	return (
		<div className={styles.item}>
			<div className={styles.img}>
				<img src={item.image} alt={item.title} />
			</div>
		</div>
	);
};
