import React from 'react';
import { Header, PinCode } from '../../Components';
import { Button } from '../../Components/UI/';
import { Par } from '../../Components/UI/Par/Par';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PinCreate = () => {
	const { state } = useLocation();
	const navigate = useNavigate();
	const { passwordInit } = useSelector((state) => state.wallet);
	const [disabledBtn, setDisabledBtn] = React.useState(true);

	React.useEffect(() => {
		if (passwordInit.length === 6) {
			setDisabledBtn(false);
		} else {
			setDisabledBtn(true);
		}
	}, [passwordInit]);

	const goConfirm = () => {
		if (state !== null && state.to === '/settings') {
			navigate('/confirm-pin', { state: { to: state.to } });
		} else {
			navigate('/confirm-pin');
		}
	};
	return (
		<div className='screen'>
			<div className='top-bg' />
			<div className='body'>
				<Header title='Create PIN code' />
				<PinCode name='create' styleWrap={{ marginTop: 90 }} />
				<Par fw={500} mt={16} size='sm' color='light' center>
					Create a PIN code to secure your wallet.
				</Par>
			</div>
			<div className='body-bottom'>
				<Button
					onClick={goConfirm}
					variant={disabledBtn ? 'disabled' : 'default'}
				>
					Confirm
				</Button>
			</div>
		</div>
	);
};
