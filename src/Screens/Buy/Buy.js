import React from 'react';
import { Button, Par, Title } from '../../Components/UI';
import { Menu } from '../../Components/';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setChooseCoinOne } from '../../redux/slices/TransactionsSlice';
import styles from './buy.module.css';
import { Header } from '../../Components/Header/Header';

export const Buy = () => {
	const dispatch = useDispatch();
	const { state } = useLocation();
	const { chooseCoinOne } = useSelector((state) => state.transaction);
	const [amountBuy, setAmountBuy] = React.useState('');

	React.useEffect(() => {
		if (state !== null) {
			if (state.from === 'swapOne') {
				dispatch(setChooseCoinOne(state.item));
			}
		}
	}, [state, dispatch]);

	return (
		<div className='screen'>
			<Header title='Add Cash' back={false} />
			<div className={styles.wrapInput}>
				<div className={styles.wrapInp}>
					{String(amountBuy).length !== 0 && '$'}
					<input
						size={
							String(amountBuy).length > 0 &&
							String(amountBuy).length !== undefined
								? String(amountBuy).length
								: '4'
						}
						onInput={(e) => setAmountBuy(e.target.value)}
						type='text'
						placeholder='$ 0.0'
						value={`${amountBuy}`}
					/>
				</div>
				<Par center color='light' fw={600}>
					{chooseCoinOne !== null ? chooseCoinOne.name : 'Ethereum'}
				</Par>
			</div>
			<div className='body'></div>

			<div className='body-bottom'>
				<Button
					mb={40}
					variant='default'
					onClick={() => window.open('https://www.moonpay.com/buy')}
				>
					Buy
				</Button>
			</div>
			<Menu />
		</div>
	);
};
