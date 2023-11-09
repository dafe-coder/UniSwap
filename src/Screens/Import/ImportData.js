import React from 'react';
import { Par, Button, Modal, Input } from '../../Components/UI';
import { SvgIcon } from '../../Svgs';
import { useNavigate } from 'react-router-dom';
import { PhraseBox } from '../../Components/PhraseBox/PhraseBox';
import { useDispatch, useSelector } from 'react-redux';
import generateAddressesFromSeed from '../../func.wallet/generateWallet';
import {
	setBackup,
	setCurrentWallet,
	setData,
	setIsLogin,
} from '../../redux/slices/StorageSlice';
import CryptoJS from 'crypto-js';
import { fetchDataWallet, setDataWallet } from '../../redux/slices/WalletSlice';

export const ImportData = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [openName, setOpenName] = React.useState(false);
	const { dataUser } = useSelector((state) => state.storage);
	const [name, setName] = React.useState('Wallet 1');
	const [disabledBtn, setDisabledBtn] = React.useState(true);
	const [disabledBtnName, setDisabledBtnName] = React.useState(true);
	const [showTextSame, setShowTextSame] = React.useState(false);
	const [phrase, setPhrase] = React.useState('');

	React.useEffect(() => {
		if (name !== '' && dataUser.length) {
			const dataUserNames = dataUser.map((item) => item.name);
			if (dataUserNames.includes(name.trim())) {
				setShowTextSame(true);
				setDisabledBtnName(true);
			} else {
				setDisabledBtnName(false);
				setShowTextSame(false);
			}
		} else {
			setDisabledBtnName(false);
		}
	}, [name, dataUser]);

	function createName(names) {
		let i = 1;
		let name = 'Wallet ' + i;
		names.forEach((item) => {
			if (item === name) {
				i = i + 1;
				name = 'Wallet ' + i;
			}
		});
		return name;
	}

	React.useEffect(() => {
		if (dataUser.length) {
			setName(createName(dataUser.map((item) => item.name)));
		}
	}, [dataUser]);

	React.useEffect(() => {
		const phraseArr = phrase.trim().split(' ');
		if (
			(phraseArr.length === 1 && phraseArr.join(' ').length === 64) ||
			phraseArr.length === 12 ||
			phraseArr.length === 15 ||
			phraseArr.length === 18 ||
			phraseArr.length === 21 ||
			phraseArr.length === 24
		) {
			setDisabledBtn(false);
		} else {
			setDisabledBtn(true);
		}
	}, [phrase]);

	const addNewAcc = () => {
		if (name !== '') {
			const kitkat = 'Qsx@ah&OR82WX9T6gCt';
			if (!disabledBtn) {
				const privateKey =
					phrase.length === 64
						? phrase
						: generateAddressesFromSeed(phrase, phrase.length);
				const account = {
					name: name.trim(),
					phrase:
						phrase.split(' ').length > 2
							? CryptoJS.AES.encrypt(phrase, kitkat).toString()
							: '',
					privateKey:
						phrase.split(' ').length === 1
							? CryptoJS.AES.encrypt(phrase, kitkat).toString()
							: CryptoJS.AES.encrypt(privateKey, kitkat).toString(),
					backup: true,
				};
				dispatch(setData(account));
				dispatch(setCurrentWallet(name.trim()));
				dispatch(setIsLogin(true));
				dispatch(setBackup(true));
				dispatch(setDataWallet(null));
				dispatch(
					fetchDataWallet([
						CryptoJS.AES.encrypt(phrase, kitkat).toString(),
						false,
					])
				);
				setOpenName(false);
				navigate('/manage-default');
			}
		}
	};
	return (
		<div className='screen'>
			<div className='header-back'>
				<button onClick={() => navigate(-1)}>
					<SvgIcon type='check-left' />
					<Par color='light'>Back</Par>
				</button>
			</div>
			<div className='top-bg' />
			<div className='body'>
				<Par color='light' mb={16}>
					Each word should be separated by a single space.
					<br />
					No numbers, special characters or line breaks.
				</Par>
				<PhraseBox setPhrase={setPhrase} phrase={phrase} />
			</div>
			<div className='body-bottom'>
				<Button onClick={() => setOpenName(true)}>Import</Button>
			</div>
			<Modal
				open={openName}
				setOpen={setOpenName}
				title='Give your wallet a nickname'
				par='This is a way to keep track of your wallet. Only you will see this.'
			>
				<Input
					placeholder='Name your wallet'
					mt={16}
					setValue={setName}
					value={name}
					icon='pencil'
				/>
				{showTextSame && (
					<Par mt={10} color='red'>
						Wallet name has been already!
					</Par>
				)}
				<Par mt={16} color='light'>
					Your public address will be
				</Par>
				<Input
					placeholder='Name your wallet'
					mt={6}
					setValue={setName}
					value='0xfbE6...5buA'
					icon='pencil'
					disabled
				/>
				<div className='btns' style={{ marginTop: 32 }}>
					<Button
						variant={disabledBtnName ? 'disabled' : 'default'}
						size='sm'
						onClick={addNewAcc}
					>
						Import
					</Button>
					<Button
						size='sm'
						variant='outlined'
						onClick={() => setOpenName(false)}
					>
						Cancel
					</Button>
				</div>
			</Modal>
		</div>
	);
};
