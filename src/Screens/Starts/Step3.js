import React from 'react';
import { Button, Title } from '../../Components/UI';
import styles from './start.module.css';
import Coins from '../../assets/images/coins.png';

export const Step3 = () => {
	return (
		<div className='screen' style={{ position: 'relative' }}>
			<div className='body'>
				<Title color='white' size='m'>
					Access the world of <br />
					crypto & DeFi
				</Title>
			</div>
			<div className='body-bottom'>
				<div className={styles.bgCoins}>
					<img src={Coins} alt='coins' />
				</div>
			</div>
			<div className='body-bottom'>
				<Button to='/start' variant='inline'>
					Skip
				</Button>
				<Button to='/start'>Continue</Button>
			</div>
		</div>
	);
};
