import React from 'react';
import { Header } from '../../Components/';
import { Par } from '../../Components/UI';
import { PhraseBox } from '../../Components/PhraseBox/PhraseBox';
import CryptoJS from 'crypto-js';
import { useSelector } from 'react-redux';
import { SvgIcon } from '../../Svgs';
const kitkat = 'Qsx@ah&OR82WX9T6gCt';

export const CopyPhrase = () => {
	const { dataUser, currentWallet } = useSelector((state) => state.storage);
	const [tags, setTags] = React.useState([]);

	React.useEffect(() => {
		if (dataUser.length) {
			const currentWalletData = dataUser.find(
				(item) => item.name === currentWallet
			);
			if (currentWalletData !== undefined) {
				setTags(
					CryptoJS.AES.decrypt(currentWalletData.phrase, kitkat).toString(
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
			<div className='bottom-bg' />
			<div className='body'>
				<Header title='Your recovery phrase' />
				<Par mb={24} color='light'>
					Write down or copy these words in right order <br /> and save them
					somewhere safe.
				</Par>
				<PhraseBox copy phrase={tags} />
				<div className='alert'>
					<SvgIcon type='alert' />
					<Par color='red' center>
						Never share recovery phrase with <br /> anyone, store it securely!
					</Par>
				</div>
			</div>
		</div>
	);
};
