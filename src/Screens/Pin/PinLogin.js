import React from 'react';
import { Header, PinCode } from '../../Components';
import { Button } from '../../Components/UI';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUsePin } from '../../redux/slices/StorageSlice';
import { setPasswordInit } from '../../redux/slices/WalletSlice';

export const PinLogin = () => {
	const { state } = useLocation();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { password, usePin } = useSelector((state) => state.storage);
	const { passwordInit } = useSelector((state) => state.wallet);
	const [validInp, setValidInp] = React.useState(false);
	const [disabledBtnPass, setDisabledBtnPass] = React.useState(true);
	const [clearInputs, setClearInputs] = React.useState(false);

	React.useEffect(() => {
		if (passwordInit !== '' && password !== '') {
			if (
				passwordInit === password &&
				passwordInit.length === 6 &&
				password.length === 6
			) {
				setValidInp(true);
			} else {
				setValidInp(false);
			}

			if (passwordInit.length === 6 && password.length === 6) {
				setDisabledBtnPass(false);
			} else {
				setDisabledBtnPass(true);
			}
		}
	}, [passwordInit, password]);

	const createPass = () => {
		if (validInp) {
			dispatch(setPasswordInit(''));
			if (state !== null && state.to === '/settings') {
				dispatch(setUsePin(!usePin));
			} else if (state !== null && state.to === '/change-pass') {
				navigate('/create-pin');
			} else if (state.to.includes('/wallets')) {
				navigate(state.to, { state: 'openModal' });
			} else {
				navigate(state.to);
			}
		} else {
			dispatch(setPasswordInit(''));
			setClearInputs(true);
			const timerID = setTimeout(() => {
				setClearInputs(false);
				clearTimeout(timerID);
			}, 100);
		}
	};

	return (
		<div className='screen'>
			<div className='bg-top' />

			<div className='body'>
				<Header title='Confirm your PIN code' />
				<PinCode
					clear={clearInputs}
					name='login'
					styleWrap={{ marginTop: 90 }}
				/>
			</div>
			<div className='body-bottom'>
				<Button
					onClick={createPass}
					variant={disabledBtnPass ? 'disabled' : 'default'}
				>
					Confirm
				</Button>
			</div>
		</div>
	);
};
