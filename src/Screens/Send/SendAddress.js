import React from 'react';
import { Header } from '../../Components';
import { useDispatch, useSelector } from 'react-redux';
import { setAddressTo } from '../../redux/slices/TransactionsSlice';
import styles from './send.module.css';
import { SvgIcon } from '../../Svgs';
import { Button, Par } from '../../Components/UI';

export const SendAddress = () => {
	const dispatch = useDispatch();
	const { addressTo } = useSelector((state) => state.transaction);
	const [disabledBtn, setDisabledBtn] = React.useState(true);

	React.useEffect(() => {
		if (
			(addressTo !== '' && addressTo.length === 42) ||
			addressTo.length === 34 ||
			addressTo.length === 62
		) {
			setDisabledBtn(false);
		} else {
			setDisabledBtn(true);
		}
	}, [addressTo]);

	const setValueAddress = (value) => {
		dispatch(setAddressTo(value));
	};

	async function pasteWords(e) {
		e.preventDefault();
		navigator.clipboard
			.readText()
			.then((text) => {
				dispatch(setAddressTo(text));
			})
			.catch((err) => {
				console.error('Failed to read clipboard contents: ', err);
			});
	}

	return (
		<div className='screen'>
			<div className='body'>
				<Header title='Send to address' />

				<div className={styles.wrapAddress}>
					<input
						placeholder='Paste address'
						className={styles.inputAddress}
						type='text'
						value={addressTo}
						onInput={(e) => setValueAddress(e.target.value)}
					/>
					<a
						href='!#'
						className={styles.copyButton}
						onClick={(e) => pasteWords(e)}
					>
						<SvgIcon fill='var(--black-text)' type='copy' />
						Paste from clipboard
					</a>
				</div>
			</div>
			<div className='body-bottom'>
				{addressTo !== '' && (
					<Par fw={500} color='red' mb={20} center size='sm'>
						Check the address you have copied
					</Par>
				)}
				<Button
					variant={disabledBtn ? 'disabled' : 'default'}
					to='/send-preview'
				>
					Preview Transaction
				</Button>
			</div>
		</div>
	);
};
