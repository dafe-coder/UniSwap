import React from 'react';
import { useSelector } from 'react-redux';
import CryptoJS from 'crypto-js';
import { Button, Par } from '../../Components/UI';
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
			<div className='body'>
				<Header title='Save your phrase' />
				<Par color='light'>
					Write this 12 words carefully, or save them to a password manager.
				</Par>
				{currentWalletData !== undefined && (
					<PhraseBoxColumns
						phrase={CryptoJS.AES.decrypt(
							currentWalletData.phrase,
							kitkat
						).toString(CryptoJS.enc.Utf8)}
					/>
				)}
			</div>
			<div className='body-bottom'>
				<Par mb={16} center color='red'>
					Never share recovery phrase with anyone,
					<br /> store it securely!
				</Par>
				<Button variant='default' to='/settings/backup-finish'>
					Next
				</Button>
			</div>
		</div>
	);
};
