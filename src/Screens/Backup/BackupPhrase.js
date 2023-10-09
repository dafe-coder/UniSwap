import React from 'react';
import styles from './backup.module.css';
import { useSelector } from 'react-redux';
import CryptoJS from 'crypto-js';
import { CopyButton, Button, Par } from '../../Components/UI';
import { Header, PhraseBoxColumns } from '../../Components/';

const kitkat = 'Qsx@ah&OR82WX9T6gCt';

export const BackupPhrase = () => {
	const { dataUser, currentWallet } = useSelector((state) => state.storage);
	const [currentWalletData, setCurrentWalletData] = React.useState(undefined);

	React.useEffect(() => {
		if (dataUser.length && currentWallet !== '') {
			setCurrentWalletData(
				dataUser.find((item) => item.name === currentWallet)
			);
		}
	}, [dataUser, currentWallet]);

	return (
		<div className='screen'>
			<div className='top-bg' />
			<div className='body'>
				<Header title='Save your phrase' />
				<Par color='light'>
					Write this 12 words carefully, or save them to a password manager.
				</Par>
				<Par mt={8} color='red'>
					Never share recovery phrase with anyone, store it securely!
				</Par>
				<PhraseBoxColumns phrase='danger whisper educate own honey dizzy alone number surface lift ten theory' />
			</div>
			<div className='body-bottom'>
				<Button variant='default' to='/backup-finish'>
					Next
				</Button>
			</div>
		</div>
	);
};
