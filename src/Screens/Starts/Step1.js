import React from 'react';
import { SvgIcon } from '../../Svgs';
import { CircleArrowButton, Title } from '../../Components/UI';
import { StepProgress } from '../../Components/StepProgress/StepProgress';

export const Step1 = () => {
	return (
		<div className='screen'>
			<div className='body' style={{ paddingTop: 30 }}>
				<SvgIcon type='logo' />
				<Title mt={30}>The crypto wallet for everyone</Title>
			</div>
			<div className='body-bottom footer-step'>
				<StepProgress active={1} />
				<CircleArrowButton to='/step2' />
			</div>
		</div>
	);
};
