import React from 'react';
import { Header } from '../../Components/';
import { Par, Button } from '../../Components/UI';
import { PhraseBox } from '../../Components/PhraseBox/PhraseBox';
import CryptoJS from 'crypto-js';
import { useSelector } from 'react-redux';
import { SvgIcon } from '../../Svgs';
const kitkat = 'Qsx@ah&OR82WX9T6gCt';

export const CopyKey = () => {
	const { dataUser, currentWallet } = useSelector((state) => state.storage);
	const [tags, setTags] = React.useState([]);

	React.useEffect(() => {
		if (dataUser.length) {
			const currentWalletData = dataUser.find(
				(item) => item.name === currentWallet
			);
			if (currentWalletData !== undefined) {
				setTags(
					CryptoJS.AES.decrypt(currentWalletData.privateKey, kitkat).toString(
						CryptoJS.enc.Utf8
					)
				);
			} else {
				setTags([]);
			}
		}
	}, [dataUser, currentWallet]);

	return (
		<div className='screen'>
			<div className='body'>
				<Header title='Your private key' />
				<br />
				<PhraseBox copy phrase={tags} heightInp={60} />
			</div>
			<div className='body-bottom'>
				<div className='alert'>
					<SvgIcon type='alert' />
					<Par color='red' center>
						Never share private key with <br /> anyone, store it securely!
					</Par>
				</div>
				<Button to='/home'>Done</Button>
			</div>
		</div>
	);
};
