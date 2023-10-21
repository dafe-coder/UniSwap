import React from 'react';
import { Header } from '../../Components/';
import { Par, Button } from '../../Components/UI';
import { Checkbox } from '../../Components/UI/';

export const BackupStart = () => {
	const [submitValue, setSubmitValue] = React.useState(false);
	return (
		<div className='screen'>
			<Header title='Manual backup' />
			<div className='body' mb={10}>
				<Par color='light'>
					Mew Wallet will display the 12 words of your recovery phrase. This is
					your password and the only way to restore your wallet.
				</Par>
				<Par color='light' mt={24}>
					To backup your recovery phrase
					<br />
					<br />
					Either write it on a paper that you will store in a safe place;
				</Par>
			</div>
			<div className='body-bottom'>
				<Checkbox
					item={submitValue}
					activeItem={true}
					onChangeBoolean={setSubmitValue}
					type='checkbox'
					variant='agreement'
					id='backup'
					label='I understand that if I lose my recovery phrase, I will lose my funds.'
				/>

				<Button
					variant={!submitValue ? 'disabled' : 'default'}
					to='/settings/backup-phrase'
				>
					Continue
				</Button>
			</div>
		</div>
	);
};
