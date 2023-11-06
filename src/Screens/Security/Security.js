import React from 'react';
import { Button, Par } from '../../Components/UI';
import { Menu } from '../../Components/Menu/Menu';

export const Security = () => {
	return (
		<div className='screen'>
			<div className='bottom-bg'></div>
			<div className='top-bg'></div>
			<div className='body content-center'>
				<Button to='/login-pin' state={{ to: '/change-pass' }}>
					Change my PIN code
				</Button>
				<Button
					style={{ pointerEvent: 'none', cursor: 'default' }}
					variant='outlined'
					mt={10}
				>
					Authentication & PIN code
				</Button>
			</div>
			<Menu />
		</div>
	);
};
