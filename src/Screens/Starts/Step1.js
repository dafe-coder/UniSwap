import React from 'react';
import { SvgIcon } from '../../Svgs';
import { CircleArrowButton, Title, StepProgress } from '../../Components/UI';

export const Step1 = () => {
	return (
		<div className='screen white-bg'>
			<div className='body content-center'>
				<SvgIcon type='logo' />
				<Title color='black' mt={60} size='m'>
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
