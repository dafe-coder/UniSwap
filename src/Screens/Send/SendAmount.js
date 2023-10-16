import React from 'react';
import styles from './send.module.css';
import { Button, Par } from '../../Components/UI';
import { Header } from '../../Components';
import {
	setChooseCoinOne,
	setChooseCoinTwo,
	setAmountSend,
} from '../../redux/slices/TransactionsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import fixNum from '../../func.wallet/fixNum';
import { ItemLoader } from '../../Components';
import { SvgIcon } from '../../Svgs';
import cn from 'classnames';

export const SendAmount = () => {
	const { state } = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { chooseCoinOne, amountSend } = useSelector(
		(state) => state.transaction
	);
	const [disabledBtn, setDisabledBtn] = React.useState(true);
	const [amountBuy, setAmountBuy] = React.useState('');
	React.useEffect(() => {
		if (amountSend !== '') {
			setAmountBuy(amountSend);
		}
	}, [amountSend]);

	React.useEffect(() => {
		if (
			amountBuy !== '' &&
			amountBuy > 0 &&
			chooseCoinOne.market_data.balance >= amountBuy
		) {
			setDisabledBtn(false);
		} else {
			setDisabledBtn(true);
		}
	}, [amountBuy, chooseCoinOne]);

	React.useEffect(() => {
		if (state !== null) {
			if (state.from === 'swapOne') {
				dispatch(setChooseCoinOne(state.item));
			}
			if (state.from === 'swapTwo') {
				dispatch(setChooseCoinTwo(state.item));
			}
		}
	}, [state, dispatch]);

	const setValue = () => {
		dispatch(setAmountSend(amountBuy));
		navigate('/send-address');
	};

	const onMax = () => {
		setAmountBuy(chooseCoinOne.market_data.balance);
	};

	return (
		<div className='screen'>
			<div className='body'>
				<Header title='Send a crypto' />

				{chooseCoinOne !== null ? (
					<div className={styles.wrapCoin}>
						<button onClick={onMax} className={styles.maxBtn}>
							MAX
						</button>
						<div className={cn(styles.wrapInput, styles.wrapInp)}>
							<input
								className={styles.input}
								size={
									String(amountBuy).length > 0 &&
									String(amountBuy).length !== undefined
										? String(amountBuy).length
										: '4'
								}
								type='text'
								placeholder='0.0'
								value={amountBuy}
								onInput={(e) => setAmountBuy(e.target.value.replace(/\D/g, ''))}
							/>
						</div>
						<div
							className={styles.row}
							style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
						>
							<Par size='sm' color='light'>
								<span>{fixNum(chooseCoinOne.market_data.balance)}</span>{' '}
								{chooseCoinOne.symbol}
							</Par>
						</div>
					</div>
				) : (
					<ItemLoader style={{ marginTop: 20 }} />
				)}
				<div className={styles.chooseCoin}>
					<div
						className={styles.chooseCoinInfo}
						onClick={() =>
							navigate('/swap-coins', { state: { to: '/send-amount' } })
						}
					>
						<img src={chooseCoinOne.image.thumb} alt={chooseCoinOne.symbol} />
						<p className={styles.chooseTitle}>
							{chooseCoinOne?.name || chooseCoinOne?.symbol}
						</p>
						<SvgIcon type='check' />
					</div>
					<span className={styles.chooseCoinPrice}>
						$ {fixNum(chooseCoinOne.market_data.balance_crypto)}
					</span>
				</div>
			</div>
			<div className='body-bottom'>
				<Button
					mb={40}
					onClick={setValue}
					variant={disabledBtn ? 'disabled' : 'default'}
				>
					Continue
				</Button>
			</div>
		</div>
	);
};
