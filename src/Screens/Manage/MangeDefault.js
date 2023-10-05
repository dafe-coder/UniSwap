import React from 'react';
import { Button, Par } from '../../Components/UI';
import { Header } from '../../Components';

export const MangeDefault = () => {
	return (
		<div className='screen'>
			<Header title='Manage cryptos' back={false} />
			<div className='body'>
				<Par center={false} color='light' size='sm'>
					Choose what tokens will be displayed in your wallet by default.
				</Par>
			</div>
			<div className='body-bottom'>
				<Button>Go to my wallet</Button>
			</div>
		</div>
	);
};
