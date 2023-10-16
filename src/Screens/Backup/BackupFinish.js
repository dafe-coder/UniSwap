import React from 'react';
import styles from './backup.module.css';
import { Header } from '../../Components/';
import { Par, Button, Modal } from '../../Components/UI/';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import { setBackup } from '../../redux/slices/StorageSlice';

const kitkat = 'Qsx@ah&OR82WX9T6gCt';

export const BackupFinish = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { dataUser, currentWallet } = useSelector((state) => state.storage);
	const [currentWalletData, setCurrentWalletData] = React.useState(undefined);
	const [numsWords, setNumsWords] = React.useState([]);
	const [values, setValues] = React.useState(['', '', '', '']);
	const [disabledBtn, setDisabledBtn] = React.useState(true);
	const [showValid, setShowValid] = React.useState(false);
	React.useEffect(() => {
		console.log(values);
	}, [values]);
	React.useEffect(() => {
		const generateRandomNumbers = () => {
			const uniqueNumbers = new Set();

			while (uniqueNumbers.size < 4) {
				uniqueNumbers.add(Math.floor(Math.random() * 12) + 1);
			}

			setNumsWords(Array.from(uniqueNumbers));
		};

		generateRandomNumbers();
	}, []);

	React.useEffect(() => {
		if (dataUser.length && currentWallet !== '') {
			setCurrentWalletData(
				dataUser.find((item) => item.name === currentWallet)
			);
		}
	}, [dataUser, currentWallet]);

	React.useEffect(() => {
		const fullWords = values.filter((item) => item !== '');

		if (fullWords.length === 4) {
			setDisabledBtn(false);
		} else {
			setDisabledBtn(true);
		}
	}, [values]);

	const submitBackup = () => {
		const phrase = CryptoJS.AES.decrypt(currentWalletData.phrase, kitkat)
			.toString(CryptoJS.enc.Utf8)
			.split(' ');
		let w1 = phrase[numsWords[0] - 1].toLowerCase() === values[0].toLowerCase();
		let w2 = phrase[numsWords[1] - 1].toLowerCase() === values[1].toLowerCase();
		let w3 = phrase[numsWords[2] - 1].toLowerCase() === values[2].toLowerCase();
		let w4 = phrase[numsWords[3] - 1].toLowerCase() === values[3].toLowerCase();
		console.log(phrase[numsWords[0] - 1].toLowerCase());
		console.log(phrase[numsWords[1] - 1].toLowerCase());
		console.log(phrase[numsWords[2] - 1].toLowerCase());
		console.log(phrase[numsWords[3] - 1].toLowerCase());
		if (w1 && w2 && w3 && w4) {
			dispatch(setBackup(true));
			navigate('/settings/backup-success');
		} else {
			setShowValid(true);
		}
	};

	const setNewWord = (text, indx) => {
		setValues((state) =>
			state.map((item, i) => (i === indx - 1 ? text : item))
		);
	};

	return (
		<div className='screen'>
			<div className='body'>
				<Header title='Finish backup'>
					<Par color='light'>
						Check you have made a correct backup by <br /> entering the
						corresponding words from your <br /> recovery phrase below.
					</Par>
				</Header>

				<div className={styles.bodyCheck}>
					<div className={styles.checkInput}>
						{numsWords[0]}.
						<input
							onChange={(e) => setNewWord(e.target.value, 1)}
							placeholder='World here'
							type='text'
						/>
					</div>
					<div className={styles.checkInput}>
						{numsWords[1]}.
						<input
							onChange={(e) => setNewWord(e.target.value, 2)}
							placeholder='World here'
							type='text'
						/>
					</div>
					<div className={styles.checkInput}>
						{numsWords[2]}.
						<input
							onChange={(e) => setNewWord(e.target.value, 3)}
							placeholder='World here'
							type='text'
						/>
					</div>
					<div className={styles.checkInput}>
						{numsWords[3]}.
						<input
							onChange={(e) => setNewWord(e.target.value, 4)}
							placeholder='World here'
							type='text'
						/>
					</div>
				</div>
			</div>
			<div className='body-bottom'>
				<Button
					variant={disabledBtn ? 'disabled' : 'default'}
					onClick={submitBackup}
				>
					Done
				</Button>
			</div>

			<Modal
				setOpen={setShowValid}
				open={showValid}
				title='You entered the wrong words'
				par='Please, go back and remember the phrase better.'
			>
				<Button mt={30} variant='default' onClick={() => setShowValid(false)}>
					Okay
				</Button>
			</Modal>
		</div>
	);
};
