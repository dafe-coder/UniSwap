import React from 'react';
import styles from './itemList.module.css';
import { Item } from '../Item/Item';
import fixNum from '../../func.wallet/fixNum';

export const ItemList = ({ items, mt }) => {
	return (
		<div className={styles.list} style={{ marginTop: mt }}>
			{items.map((item, i) => (
				<Item
					key={i}
					name={item.name}
					img={item.image.thumb}
					count={fixNum(item.market_data.balance)}
					symbol={item.symbol.toUpperCase()}
				/>
			))}
		</div>
	);
};
