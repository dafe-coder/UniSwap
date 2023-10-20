import React from 'react';
import { PinCode } from '../../Components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetWallet } from '../../redux/slices/StorageSlice';
import { Modal, Button, Par, Title } from '../../Components/UI';

export const WelcomeBack = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { password } = useSelector((state) => state.storage);
	const { passwordInit } = useSelector((state) => state.wallet);
	const [openReset, setOpenReset] = React.useState(false);
	const [timerIDs, setTimerIDs] = React.useState(null);
	const [timer, setTimer] = React.useState(null);
	const [activeBtn, setActiveBtn] = React.useState(null);
	const [goPage, setGoPage] = React.useState('');
	const [clearPass, setClearPass] = React.useState(false);

	const onLogin = () => {
		if (password === passwordInit) {
			navigate('/home');
		} else {
			setClearPass(true);
			const timerID = setTimeout(() => {
				setClearPass(false);
				clearTimeout(timerID);
			}, 10);
		}
	};

	const onResetWallet = (e, page) => {
		e.preventDefault();
		goDeleteWallets();
		setOpenReset(true);
		setGoPage(page);
	};

	const goDeleteWallets = () => {
		setOpenReset(true);
		setTimer(10);
		setActiveBtn(false);
		clearInterval(timerIDs);
		setTimerIDs(setInterval(timerDisabled, 1000));
		function timerDisabled() {
			setTimer((state) => {
				if (state === 0) {
					setActiveBtn(true);
					clearInterval(timerIDs);
					return 0;
				} else {
					return state - 1;
				}
			});
		}
	};

	const onreset = () => {
		if (activeBtn) {
			dispatch(resetWallet());
			navigate(`/${goPage}`);
		}
	};

	return (
		<div className='screen'>
			<div className='body'>
				<Title mt={50} size='m' mb={40}>
					Enter a password
				</Title>
				<PinCode name='login' clear={clearPass} />
			</div>
			<div className='body-bottom'>
				<Button variant='default' onClick={onLogin}>
					Continue
				</Button>
				<Par center mt={20} color='light'>
					Unable to Log in? <br />
					<a onClick={(e) => onResetWallet(e, 'start')} href='!#'>
						Import
					</a>
					or
					<a onClick={(e) => onResetWallet(e, 'start')} href='!#'>
						create a new wallet
					</a>
					.
				</Par>
			</div>
			<Modal title='Risk Alert' open={openReset} setOpen={setOpenReset}>
				<Par center mb={30} mt={10}>
					All your existing wallets will be removed and replaced with the new
					one. Please make sure you have backed up your mnemonic phrases
					or private keys, otherwise you will not be able to recover the assets
					in your wallets.
				</Par>
				<div className='btns'>
					<Button
						size='sm'
						variant='outlined'
						onClick={() => setOpenReset(false)}
					>
						Back
					</Button>
					<Button size='sm' variant='default' onClick={onreset}>
						Continue {activeBtn === false ? `(${timer}s)` : ''}
					</Button>
				</div>
			</Modal>
		</div>
	);
};
