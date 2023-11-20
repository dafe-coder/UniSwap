import React from 'react';
import { Header, PinCode } from '../../Components';
import { Button } from '../../Components/UI';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	setPassword,
	setUsePin,
	setIsLogin,
} from '../../redux/slices/StorageSlice';
import {
	setPasswordInit,
	setPasswordConfirm,
} from '../../redux/slices/WalletSlice';

export const PinConfirm = () => {
	const { state } = useLocation();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { passwordInit, passwordConfirm } = useSelector(
		(state) => state.wallet
	);
	const [validInp, setValidInp] = React.useState(false);
	const [disabledBtnPass, setDisabledBtnPass] = React.useState(true);

	React.useEffect(() => {
		// alert(passwordConfirm.length)
		if (passwordInit !== '' && passwordConfirm !== '') {
			if (
				passwordInit === passwordConfirm &&
				passwordInit.length === 6 &&
				passwordConfirm.length === 6
			) {
				setValidInp(true);
			} else {
				setValidInp(false);
			}

			if (passwordInit.length === 6 && passwordConfirm.length === 6) {
				setDisabledBtnPass(false);
			} else {
				setDisabledBtnPass(true);
			}
		}
	}, [passwordInit, passwordConfirm]);

	const createPass = () => {
		if (validInp) {
			dispatch(setPassword(passwordInit));
			if (state !== null && state.to === '/settings') {
				dispatch(setUsePin(true));
				navigate(state.to);
			} else {
				dispatch(setUsePin(true));
				navigate('/home');
			}
		} else {
			dispatch(setPasswordInit(''));
			dispatch(setPasswordConfirm(''));
			navigate('/create-pin');
		}
		dispatch(setIsLogin(true));
	};

	return (
		<div className='screen'>
			<div className='bg-top' />

			<div className='body'>
				<Header title='Confirm your PIN code' />
				<PinCode name='confirm' styleWrap={{ marginTop: 90 }} />
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
