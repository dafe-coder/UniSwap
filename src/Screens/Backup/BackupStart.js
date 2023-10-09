import React from 'react';
import styles from './backup.module.css';
import { Header } from '../../Components/';
import { Par, Button } from '../../Components/UI';

export const BackupStart = () => {
	return (
		<div className='screen'>
			<div className='top-bg' />
			<Header title='Manual backup' />
			<div className='body' mb={10}>
				<Par color='light'>
					Ordinals Wallet will display the 12 words of your recovery phrase.
					This is your password and the only way to restore your wallet.
				</Par>
				<Par color='light' mt={24}>
					To backup your recovery phrase
					<br />
					<br />
					Either write it on a paper that you will store in a safe place;
				</Par>
			</div>
			<div className='body-bottom'>
				<Button to='/backup-phrase'>Continue</Button>
			</div>
		</div>
	);
};
