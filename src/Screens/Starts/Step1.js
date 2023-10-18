import React from 'react';
import { SvgIcon } from '../../Svgs';
import { CircleArrowButton, Title, StepProgress } from '../../Components/UI';

export const Step1 = () => {
	return (
		<div className='screen black-bg'>
			<div className='body' style={{ paddingTop: 30 }}>
				<SvgIcon type='logo' />
				<Title color='white' mt={30} size='m'>
					The crypto wallet for everyone
				</Title>
			</div>
			<div className='body-bottom footer-step'>
				<StepProgress active={1} />
				<CircleArrowButton to='/step2' />
			</div>
		</div>
	);
};
