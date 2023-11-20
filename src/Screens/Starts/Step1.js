import React from 'react';
import { CircleArrowButton, Title, StepProgress } from '../../Components/UI';
import LogoImg from '../../assets/logo.svg';
import styles from './start.module.css';

export const Step1 = () => {
	return (
		<div className='screen black-bg'>
			<div className='body' style={{ paddingTop: '10vh' }}>
				<img className={styles.logo} src={LogoImg} alt='logo' />
				<Title color='white' mt={40} size='m'>
					The crypto wallet for
					<br /> everyone
				</Title>
			</div>
			<div className='body-bottom footer-step'>
				<StepProgress active={1} />
				<CircleArrowButton to='/step2' />
			</div>
		</div>
	);
};
