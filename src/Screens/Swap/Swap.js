import React from 'react';
import cn from 'classnames';
import styles from './swap.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
	setChooseCoinOne,
	setChooseCoinTwo,
} from '../../redux/slices/TransactionsSlice';
import { Menu } from '../../Components';
import { Button, Par } from '../../Components/UI';
import { ItemExpand } from '../../Components/ItemExpand/ItemExpand';
import { ChooseInputSwap, TextRowsBlock } from '../../Components';

export const Swap = () => {
	const dispatch = useDispatch();
	const { state } = useLocation();
	const { chooseCoinOne, chooseCoinTwo } = useSelector(
		(state) => state.transaction
	);
	const [value, setValue] = React.useState('');
	const [valueOut, setValueOut] = React.useState('');
	const [network, setNetwork] = React.useState('Bitcoin');

	React.useEffect(() => {
		if (value !== '') {
			const usdCount = chooseCoinOne.market_data.current_price * +value;
			setValueOut(usdCount / chooseCoinTwo.market_data.current_price);
		} else {
			setValueOut('');
		}
	}, [value, chooseCoinOne, chooseCoinTwo]);

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

	const onSwap = () => {
		if (chooseCoinOne !== null && chooseCoinTwo !== null) {
			const frst = chooseCoinOne;
			const scnd = chooseCoinTwo;
			dispatch(setChooseCoinOne(scnd));
			dispatch(setChooseCoinTwo(frst));
		}
	};

	const mockList = [
		{
			title: 'Blockchain Network',
		},
		{
			title: 'Ethereum Mainnet',
		},
		{
			title: 'BNB Smart Chain',
		},
		{
			title: 'Avalanche Network',
		},
		{
			title: 'Arbitrum Internal',
		},
	];

	return (
		<div className='screen'>
			<div className='body'>
				<div>
					<Par color='light' mb={8}>
						Swap in:
					</Par>

					<div className={styles.chooseItem}>
						<ItemExpand
							items
							fwTitle={700}
							caretFill={'var(--success)'}
							titleSize='m'
							title={network}
						>
							{mockList.map((item) => (
								<div
									key={item.title}
									onClick={() => setNetwork(item.title)}
									className={cn('item-expand', {
										active: item.title === network,
									})}
								>
									{item.title}
								</div>
							))}
						</ItemExpand>
					</div>
					<div>
						<ChooseInputSwap
							valueTwo={valueOut}
							valueOne={value}
							setValueOne={setValue}
							onSwap={onSwap}
							chooseItemOne={chooseCoinOne}
							chooseItemTwo={chooseCoinTwo}
						/>
					</div>
					{value > 0 && (
						<div className={styles.wrapBody}>
							<TextRowsBlock style={{ marginTop: 40 }} />
						</div>
					)}
					<Button mb={40} mt={30}>
						Swap
					</Button>
				</div>
			</div>
			<Menu />
		</div>
	);
};
