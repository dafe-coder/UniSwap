import React from 'react';
import styles from './generate.module.css';
import logo from '../../assets/images/logo.svg';
import { GenerateItem } from './../../components/GenerateItem/GenerateItem';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setDataWallet, setWalletNew } from '../../redux/slices/WalletSlice';
import {
	resetWallet,
	setBackup,
	setCurrentWallet,
	setData,
	setIsLogin,
} from '../../redux/slices/StorageSlice';
import { generateMnemonic } from 'bip39';
import CryptoJS from 'crypto-js';
import generateAddressesFromSeed from '../../func.wallet/generateWallet';

const kitkat = 'Qsx@ah&OR82WX9T6gCt';
export const Generate = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [load1, setLoad1] = React.useState(true);
	const [loadFirst, setLoadFirst] = React.useState(true);

	React.useEffect(() => {
		async function generateWords() {
			dispatch(resetWallet());
			setLoad1(false);
			let code = generateMnemonic();
			const privateKey = generateAddressesFromSeed(code, 12);
			const newAccount = {
				name: 'Wallet 1',
				phrase: CryptoJS.AES.encrypt(code, kitkat).toString(),
				privateKey: CryptoJS.AES.encrypt(privateKey, kitkat).toString(),
				backup: false,
			};
			dispatch(setData(newAccount));
			dispatch(setDataWallet(null));
			dispatch(setCurrentWallet('Wallet 1'));
			dispatch(setWalletNew(true));
			dispatch(setBackup(false));
			dispatch(setIsLogin(true));
		}
		generateWords();
	}, []);

	React.useEffect(() => {
		if (!load1) {
			setLoadFirst(false);
			const timerID = setTimeout(() => {
				navigate('/manage');
				clearTimeout(timerID);
			}, 8000);
		}
	}, [load1]);

	return (
		<div className='page'>
			<div className='page-inner page-align-bottom'>
				<div className={styles.logo}>
					<img src={logo} alt='Ordinals Wallet' />
				</div>
				<div className={styles.row}>
					<GenerateItem first title='Generating your new wallet ...' />
					<GenerateItem
						delay={1000}
						loadWallet={loadFirst}
						title='Accumulating a large amount of random numbers ...'
					/>
					<GenerateItem
						delay={4000}
						loadWallet={loadFirst}
						title='Storing your wallet with secure encryption ...'
					/>
					<GenerateItem
						loadWallet={loadFirst}
						delay={7000}
						title='Almost done ...'
					/>
				</div>
			</div>
		</div>
	);
};
