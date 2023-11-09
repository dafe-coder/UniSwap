import React from 'react';
import { Title, Button } from '../../Components/UI';
import BgImg from '../../assets/images/bg-step1.png';

export const Step1 = () => {
	return (
		<div className='screen'>
			<div className='body' style={{ paddingTop: 30 }}>
				<Title color='white' size='m'>
					The crypto wallet
					<br />
					for everyone
				</Title>
				<img
					src={BgImg}
					alt='bg'
					style={{
						maxWidth: '100vw',
						width: '100%',
						position: 'absolute',
						top: '50%',
						transform: 'translate(-50%, -50%)',
					}}
				/>
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
