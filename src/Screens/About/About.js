import React from 'react';
import { Item } from '../../Components/Item/Item';
import { Header } from '../../Components/Header/Header';
import { Menu } from '../../Components';
import styles from './about.module.css';

export const About = () => {
	return (
		<div className='screen'>
			<div className='bottom-bg'></div>
			<Header title='About' />
			<div className='body'>
				<div className={styles.styleWrap}>
					<Item
						onClick={() => window.open('https://uniswap.org/privacy-policy')}
						toggle={false}
						size='sm'
						name='Terms of Use'
					/>
					<Item
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
