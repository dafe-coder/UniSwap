import React from 'react';
import { Title, Button } from '../../Components/UI';
import LogoImg from '../../assets/logo.svg';

export const Step1 = () => {
	return (
		<div className='screen blue-bg'>
			<div className='body' style={{ paddingTop: 0 }}>
				<img
					styles={{ maxWidth: 220, width: '100%' }}
					src={LogoImg}
					alt='logo'
				/>
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
