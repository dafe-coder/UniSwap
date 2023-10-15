import React from 'react';
import { Button, CircleArrowButton, Title } from '../../Components/UI';
import styles from './start.module.css';
import Coins from '../../assets/images/coins.png';
import { StepProgress } from '../../Components';

export const Step3 = () => {
	return (
		<div className='screen' style={{ position: 'relative' }}>
			<div className='body'></div>
			<div className='body-bottom'>
				<div className={styles.bgCoins}>
					<img src={Coins} alt='coins' />
				</div>
				<div className='footer-step'>
					<StepProgress active={3} />
					<CircleArrowButton to='/start' />
				</div>
			</div>
		</div>
	);
};
