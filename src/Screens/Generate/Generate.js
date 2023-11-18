import React from 'react';
import styles from './generate.module.css';
import { GenerateItem } from '../../Components';
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
			setLoad1(false);
			dispatch(resetWallet());
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
				navigate('/manage-default');
				clearTimeout(timerID);
			}, 11200);
		}
	}, [load1, navigate]);

	return (
		<div className='screen white-bg'>
			<div className='body'>
				<div className={styles.logo}>
					<div className={styles.row} style={{ marginTop: 30 }}>
						<GenerateItem
							first
							loadWallet={load1}
							title='Generating your new'
						/>
						<GenerateItem
							delay={1000}
							loadWallet={loadFirst}
							title={
								<>
									Accumulating a large amount
									<br />
									of random numbers
								</>
							}
						/>
						<GenerateItem
							delay={4000}
							loadWallet={loadFirst}
							title={
								<>
									Storing your wallet with secure
									<br />
									encryption in your phone
								</>
							}
						/>
						<GenerateItem
							loadWallet={loadFirst}
							delay={7000}
							title={`And we're done.`}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
