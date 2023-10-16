import React from 'react';
import { Header, Menu } from '../../Components/';
import { Item } from '../../Components/Item/Item';
import styles from './notifications.module.css';

export const Notifications = () => {
	return (
		<div className='screen'>
			<div className='body'>
				<Header title='Notifications' />
				<div className={styles.wrapItems}>
					<Item
						onChange={() => {}}
						name='Activate notifications'
						size='sm'
						id='not124124'
					/>
					<Item
						id='tran2141'
						onChange={() => {}}
						name='Transactions'
						size='sm'
					/>
					<Item
						onChange={() => {}}
						name='WalletConnect'
						size='sm'
						id='connect124124'
					/>
				</div>
			</div>
			<Menu />
		</div>
	);
};
