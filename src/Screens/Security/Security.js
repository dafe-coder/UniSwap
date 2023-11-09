import React from 'react';
import { Button } from '../../Components/UI';
import { Menu } from '../../Components/Menu/Menu';
import { Header } from '../../Components';

export const Security = () => {
	return (
		<div className='screen'>
			<Header title='Security' />
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
