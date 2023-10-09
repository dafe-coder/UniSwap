import React from 'react';
import { Button, Par } from '../../Components/UI';

export const Security = () => {
	return (
		<div className='screen'>
			<div className='bottom-bg'></div>
			<div className='top-bg'></div>
			<div className='body content-center'>
				<Button>Change my PIN code</Button>
				<Par mt={25} color='light' size='m'>
					Authentication & PIN code
				</Par>
			</div>
		</div>
	);
};
