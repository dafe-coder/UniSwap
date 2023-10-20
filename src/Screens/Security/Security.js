import React from 'react';
import { Button } from '../../Components/UI';
import { Menu, Header } from '../../Components';

export const Security = () => {
	return (
		<div className='screen'>
			<Header title='Security' />
			<div className='body content-center' style={{ padding: '0 30px' }}>
				<Button to='/login-pin' state={{ to: '/change-pass' }}>
					Change my PIN code
				</Button>
				<Button style={{ pointerEvents: 'none' }} mt={8} variant='outlined'>
					Authentication & PIN code
				</Button>
			</div>
			<Menu />
		</div>
	);
};
