import React from 'react';
import { CircleArrowButton, Title } from '../../Components/UI';
import { StepProgress } from '../../Components/StepProgress/StepProgress';
import LogoImg from '../../assets/logo.svg';

export const Step1 = () => {
	return (
		<div className='screen'>
			<div className='body' style={{ paddingTop: '10vh' }}>
				<img
					styles={{ maxWidth: 220, width: '100%' }}
					src={LogoImg}
					alt='logo'
				/>
				<Title mt={30}>The crypto wallet for everyone</Title>
			</div>
			<div className='body-bottom footer-step'>
				<StepProgress active={1} />
				<CircleArrowButton to='/step2' />
			</div>
		</div>
	);
};
