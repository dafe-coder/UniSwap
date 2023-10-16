import React from 'react';
import { Button, Par } from '../../Components/UI';
import { Menu } from '../../Components/Menu/Menu';

export const Security = () => {
	return (
		<div className='screen'>
			<div className='body content-center'>
				<Button to='/login-pin' state={{ to: '/change-pass' }}>
					Change my PIN code
				</Button>
				<Button mt={16} variant='outlined' style={{ pointerEvents: 'none' }}>
					Authentication & PIN code
				</Button>
			</div>
			<Menu />
		</div>
	);
};
