import React from 'react';
import { Item } from '../../Components/Item/Item';
import { Header } from '../../Components/Header/Header';
import { Menu } from '../../Components';
import styles from './about.module.css';

const styleWrap = {
	display: 'flex',
	flexDirection: 'column',
	gap: 14,
	marginTop: 30,
};
export const About = () => {
	return (
		<div className='screen'>
			<Header title='About' />
			<div className='body'>
				<div style={styleWrap}>
					<Item
						className={styles.item}
						onClick={() => window.open('https://uniswap.org/privacy-policy')}
						toggle={false}
						size='sm'
						name='Terms of Use'
					/>
					<Item
						className={styles.item}
						onClick={() => window.open('https://uniswap.org/privacy-policy')}
						toggle={false}
						size='sm'
						name='Privacy policy'
					/>
				</div>
			</div>
			<Menu />
		</div>
	);
};
