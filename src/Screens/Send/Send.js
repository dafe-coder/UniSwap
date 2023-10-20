import React from 'react';
import styles from './send.module.css';
import { Header, TextRowsBlock } from '../../Components';
import { Button, Par } from '../../Components/UI';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import transactionsSend from '../../func.wallet/transaction';
import { setDataWallet } from '../../redux/slices/WalletSlice';
import CryptoJS from 'crypto-js';
import fixNum from '../../func.wallet/fixNum';
import { Modal } from '../../Components/UI/Modal/Modal';

const kitkat = 'Qsx@ah&OR82WX9T6gCt';

export const SendPreview = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { dataUser, currentWallet } = useSelector((state) => state.storage);
	const { chooseCoinOne, addressTo, amountSend } = useSelector(
		(state) => state.transaction
	);
	const { walletAddress } = useSelector((state) => state.wallet);
	const [disabledBtn, setDisabledBtn] = React.useState(true);
	const [checkEther, setCheckEther] = React.useState(false);
	const [hash, setHash] = React.useState('');
	const [openModalSuccess, setOpenModalSuccess] = React.useState(false);
	const [openModalGas, setOpenModalGas] = React.useState(false);
	const [loading, setLoading] = React.useState(false);
	const [currentAccount, setCurrentAccount] = React.useState(null);

	React.useEffect(() => {
		setCurrentAccount(dataUser.find((item) => item.name === currentWallet));
	}, [dataUser, currentWallet]);
	React.useEffect(() => {
		console.log(hash);
	}, [hash]);
	const goHome = () => {
		dispatch(setDataWallet(null));
		navigate('/home');
	};

	React.useEffect(() => {
		if (chooseCoinOne != null && chooseCoinOne.symbol.toLowerCase() === 'eth') {
			setCheckEther(true);
		} else {
			setCheckEther(false);
		}
	}, [chooseCoinOne]);

	function onOpenModalSuccess(value) {
		setOpenModalSuccess(value);
		setLoading(false);
	}
	function onOpenModalGas(value) {
		setOpenModalGas(value);
		setLoading(false);
	}

	const onSentToken = () => {
		if (!loading) {
			if (
				amountSend !== '' &&
				amountSend > 0 &&
				addressTo !== '' &&
				chooseCoinOne != null
			) {
				setLoading(true);
				transactionsSend(
					walletAddress,
					addressTo,
					chooseCoinOne.contract_address,
					amountSend.toString(),
					checkEther,
					setHash,
					onOpenModalSuccess,
					onOpenModalGas,
					CryptoJS.AES.decrypt(currentAccount.privateKey, kitkat).toString(
						CryptoJS.enc.Utf8
					)
				);
			}
		}
	};

	React.useEffect(() => {
		if (amountSend !== '' && amountSend > 0 && addressTo !== '') {
			setDisabledBtn(false);
		} else {
			setDisabledBtn(true);
		}
	}, [amountSend, addressTo]);

	// const setValue = (value) => {
	// 	dispatch(setAddressTo(value));
	// };

	// const setAmount = (value) => {
	// 	dispatch(setAmountSend(value));
	// };

	// const onChoosePercent = (value) => {
	// 	if (chooseCoinOne != null) {
	// 		dispatch(
	// 			setAmountSend(
	// 				((chooseCoinOne.market_data.balance / 100) * Number(value)).toString()
	// 			)
	// 		);
	// 	}
	// };

	return (
		<div className='screen'>
			<div className='body'>
				<Header title='Preview Details' />
				<div className={styles.wrapCoin} style={{ marginTop: 50 }}>
					<span className={styles.coinPrice}>
						{amountSend !== '' ? amountSend : '0'}
					</span>
					<Par size='sm' mt={10}>
						<span>{fixNum(chooseCoinOne.market_data.balance)}</span>{' '}
						{chooseCoinOne.symbol}
					</Par>
				</div>
				<div
					className={styles.wrapAddress}
					style={{ pointerEvents: 'none', marginTop: 40 }}
				>
					<Par color='light' mb={16}>
						Send to address
					</Par>
					<input
						placeholder='Paste address'
						className={styles.inputAddress}
						type='text'
						value={addressTo.slice(0, 30) + '...' + addressTo.slice(-7)}
					/>
				</div>
				<TextRowsBlock style={{ marginTop: 10 }} />
			</div>
			<div className='body-bottom'>
				<Par color='red' center mt={0} mb={16}>
					Wallet cannot recover any lost funds.
				</Par>
				<Button
					variant={disabledBtn ? 'disabled' : 'default'}
					onClick={onSentToken}
				>
					Confirm transaction
				</Button>
			</div>
			<Modal
				setOpen={setOpenModalGas}
				open={openModalGas}
				title='Not enough funds.'
			>
				<Button
					style={{
						width: 110,
						margin: '30px auto 0',
					}}
					size='sm'
					variant='default'
					onClick={() => setOpenModalGas(false)}
				>
					Ok
				</Button>
			</Modal>
			<Modal
				setOpen={setOpenModalSuccess}
				open={openModalSuccess}
				title='Success'
				par='Your transaction has been sent.'
			>
				<Button
					style={{
						width: 110,
						margin: '30px auto 0',
					}}
					size='sm'
					mt={30}
					variant='default'
					onClick={goHome}
				>
					Ok
				</Button>
			</Modal>
		</div>
	);
};
