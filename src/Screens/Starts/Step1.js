import React from 'react';
import { SvgIcon } from '../../Svgs';
import { Button, Title } from '../../Components/UI';

export const Step1 = () => {
	return (
		<div className='screen'>
			<div className='top-bg' />
			<div className='body' style={{ paddingTop: 30 }}>
				<SvgIcon type='logo' />
				<Title mt={30}>The crypto wallet for everyone</Title>
			</div>
			<div className='body-bottom'>
				<Button variant='inline' to='/start'>
					Skip
				</Button>
				<Button to='/step2'>Continue</Button>
			</div>
		</div>
	);
};
