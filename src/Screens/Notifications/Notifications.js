import React from 'react';
import { Header } from '../../Components/';
import { Item } from '../../Components/Item/Item';
import styles from './notifications.module.css';

export const Notifications = () => {
	return (
		<div className='screen'>
			<div className='bottom-bg' />
			<div className='body'>
				<Header title='Notifications' />
				<div className={styles.wrapItems}>
					<Item name='Activate notifications' size='sm' />
					<Item name='Transactions' size='sm' />
					<Item name='WalletConnect' size='sm' />
				</div>
			</div>
		</div>
	);
};
