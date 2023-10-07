import React from 'react';
import { Button, Par } from '../../Components/UI';
import { SvgIcon } from '../../Svgs';

export const BackupSuccess = () => {
	return (
		<div className='screen'>
			<div className='bottom-bg-light' />
			<div className='top-bg' />
			<div className='body content-center'>
				<div>
					<SvgIcon type='success' />
					<Par mt={30} color='light' size='m'>
						Manual backup successful
					</Par>
				</div>
			</div>
			<div className='bod-bottom'>
				<Button to='/settings'>Done</Button>
			</div>
		</div>
	);
};
