import React from 'react';
import { Button, Title } from '../../Components/UI';
import styles from './start.module.css';
import Coins from '../../assets/images/coins.png';

export const Step3 = () => {
	return (
		<div className='screen' style={{ position: 'relative' }}>
			<div className='top-bg' />
			<div className='body'>
				<Title>Access the world of cryto & DeFi</Title>
			</div>
			<div className='body-bottom'>
				<div className={styles.bgCoins}>
					<img src={Coins} alt='coins' />
				</div>
				<Button variant='inline' to='/start'>
					Skip
				</Button>
				<Button to='/start'>Continue</Button>
			</div>
		</div>
	);
};
