import React from 'react';
import { Title, Button } from '../../Components/UI';
import { SvgIcon } from '../../Svgs';

export const Step1 = () => {
	return (
		<div className='screen blue-bg'>
			<div className='body' style={{ paddingTop: 30 }}>
				<SvgIcon type='logo' />
				<Title color='white' mt={30} size='m'>
					The crypto wallet
					<br />
					for everyone
				</Title>
			</div>
			<div className='body-bottom'>
				<Button style={{ color: 'var(--white)' }} to='/start' variant='inline'>
					Skip
				</Button>
				<Button variant='white' to='/step2'>
					Continue
				</Button>
			</div>
		</div>
	);
};
