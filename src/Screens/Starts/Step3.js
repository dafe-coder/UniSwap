import React from 'react';
import { StepProgress, CircleArrowButton, Title } from '../../Components/UI';
import styles from './start.module.css';
import Coins from '../../assets/images/coins.png';

export const Step3 = () => {
	return (
		<div className='screen white-bg' style={{ position: 'relative' }}>
			<div className='body'>
				<Title color='black' size='m'>
					Access the world <br /> of crypto & DeFi
				</Title>
			</div>
			<div className='body-bottom'>
				<div className={styles.bgCoins}>
					<img src={Coins} alt='coins' />
				</div>
			</div>
			<div className='body-bottom footer-step'>
				<StepProgress active={3} />
				<CircleArrowButton to='/start' />
			</div>
		</div>
	);
};
