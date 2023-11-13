import React from 'react';
import { Title, Button } from '../../Components/UI';
import BgImg from '../../assets/images/bg-steps.svg';

export const Step1 = () => {
	return (
		<div className='screen'>
			<div className='body' style={{ paddingTop: 30 }}>
				<img
					src={BgImg}
					alt='bg'
					style={{
						maxWidth: '100vw',
						width: '100vw',
						marginLeft: -30,
						marginRight: -30,
						position: 'relative',
					}}
				/>
				<Title color='white' mt={30} size='m'>
					The crypto wallet
					<br />
					for everyone
				</Title>
			</div>
			<div className='body-bottom'>
				<Button to='/start' variant='inline'>
					Skip
				</Button>
				<Button to='/step2'>Continue</Button>
			</div>
		</div>
	);
};
