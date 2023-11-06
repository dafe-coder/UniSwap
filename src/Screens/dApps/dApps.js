import React from 'react';
import { Title, Button, Par } from '../../Components/UI';
import { Header } from '../../Components/';

export const DApps = () => {
	return (
		<div className='screen'>
			<Header title='dApps' />
			<div className='body content-center'>
				<Title size='sm' fw={600} color='white'>
					No dApp connected yet.
				</Title>
			</div>
			<div className='body-bottom'>
				<Par size='sm' color='light' mb={30}>
					Your Wallet is compatible with WalletConnect.
				</Par>
				<Button to='/dapps-qr'>Continue</Button>
			</div>
		</div>
	);
};
