import React from 'react';
import { Button, Par } from '../../Components/UI';
import { SvgIcon } from '../../Svgs';

export const BackupSuccess = () => {
	return (
		<div className='screen'>
			<div className='body content-center'>
				<div>
					<SvgIcon type='success' />
					<Par fw={600} mt={30} color='black' size='m'>
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
