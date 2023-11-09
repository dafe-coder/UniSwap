import React from 'react';
import styles from './assetInfo.module.css';
import { Menu, ButtonActions } from '../../Components';
import { Item } from '../../Components/Item/Item';
import { SvgIcon } from '../../Svgs';
import { Par } from '../../Components/UI';
import { Area, AreaChart, YAxis } from 'recharts';
import { useLocation } from 'react-router-dom';
import fixNum from '../../func.wallet/fixNum';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchChartCoin,
	fetchChartCoinDefault,
} from '../../redux/slices/WalletSlice';
import { ChartLoader } from '../../Components/Loaders/ChartLoader';
import { CircleButton } from '../../Components/UI/CircleButton/CircleButton';
import { Indicators } from '../../Components/Indicators/Indicators';

export const AssetInfo = () => {
	const { state } = useLocation();
	const dispatch = useDispatch();
	const [activeTimeline, setActiveTimeline] = React.useState('All');
	const { chartBitcoin, statusChartBitcoin } = useSelector(
		(state) => state.wallet
	);
	const [width, setWidth] = React.useState(0);
	const wrapRef = React.useRef(null);
	const wrapElem = wrapRef.current;

	const setPeriod = React.useCallback(
		(eth) => {
			const day = eth ? '1' : 'day';
			const week = eth ? '7' : 'week';
			const month = eth ? '30' : 'month';
			const year = eth ? '360' : 'day';
			const all = eth ? 'max' : 'max';
			switch (activeTimeline) {
				case '1D':
					return day;
				case '7D':
					return week;
				case '1M':
					return month;
				case '1Y':
					return year;
				case 'All':
					return all;
				default:
					break;
			}
		},
		[activeTimeline]
	);

	const buttonActions = [
		{
			title: '1D',
		},
		{
			title: '7D',
		},
		{
			title: '1M',
		},
		{
			title: '1Y',
		},
		{
			title: 'All',
		},
	];

	React.useEffect(() => {
		if (state !== null && state.contract_address !== '') {
			dispatch(fetchChartCoin([state.contract_address, setPeriod()]));
		} else {
			dispatch(fetchChartCoinDefault([state.id, setPeriod(true)]));
		}
	}, [activeTimeline, dispatch, setPeriod, state]);

	React.useEffect(() => {
		const observer = new ResizeObserver((entries) => {
			setWidth(entries[0].contentRect.width);
		});

		if (wrapElem) {
			observer.observe(wrapElem);
		}

		return () => {
			wrapElem && observer.unobserve(wrapElem);
		};
	}, [wrapElem]);

	return (
		<div className='screen' ref={wrapRef}>
			<div className='bottom-bg' />
			<div className='body'>
				<div className='header'>
					<div className={styles.title}>
						<div className={styles.title_logo}>
							<img src={state !== null ? state.image.thumb : ''} alt='thumb' />
						</div>
						{state !== null ? state.name : ''}
					</div>
					<div></div>
				</div>

				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'flex-end',
						width: '100%',
						marginBottom: 10,
						marginTop: 24,
					}}
				>
					<div className={styles.info}>
						<div>
							<Par color='white' size='sm' mb={10}>
								Price
							</Par>
							<Par
								size='l'
								fw={500}
								style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
							>
								${' '}
								{state !== null ? fixNum(state.market_data.current_price) : ''}
							</Par>
							<Indicators
								percent={state.changes.percent}
								style={{ position: 'relative', marginTop: 10 }}
							/>
						</div>
						<div className={styles.btnsAction}>
							<CircleButton
								to='/buy'
								state={{ item: state, from: 'swapOne' }}
								icon='buy'
								title='Buy'
							/>
							<CircleButton
								to='/send-amount'
								state={{ item: state, from: 'swapOne' }}
								icon='send'
								title='Send'
							/>
							<CircleButton
								to='/home/receive'
								state={{ item: state }}
								icon='receive'
								title='Receive'
							/>
						</div>
					</div>
				</div>
				{chartBitcoin !== null ? (
					<div className={styles.wrapBlock}>
						<div className={styles.chart}>
							<AreaChart
								width={width}
								height={130}
								data={chartBitcoin}
								margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
							>
								<defs>
									<linearGradient id='value' x1='0' y1='0' x2='0' y2='1'>
										<stop
											offset='5%'
											stopColor='var(--accent)'
											stopOpacity={0.4}
										/>
										<stop
											offset='95%'
											stopColor='var(--accent)'
											stopOpacity={0}
										/>
									</linearGradient>
								</defs>
								<YAxis domain={['auto', 'dataMax']} hide={true} />
								<Area
									type='linear'
									strokeWidth={2}
									dataKey='value'
									stroke='var(--accent)'
									fillOpacity={1}
									fill='url(#value)'
								/>
							</AreaChart>
						</div>
						<ButtonActions
							disabled={statusChartBitcoin !== 'success'}
							activeItem={4}
							type='timeline'
							onClick={setActiveTimeline}
							actions={buttonActions}
						/>
					</div>
				) : (
					<ChartLoader
						width={width}
						style={{ marginBottom: 20, marginTop: 10 }}
					/>
				)}

				<div className={styles.list}>
					<Par color='white' size='sm' fw={500} mb={16}>
						Available Balance
					</Par>

					{state !== null ? (
						<Item
							toggle={false}
							img={state.image.thumb}
							name={state.name}
							symbol={state.symbol}
							amount={fixNum(state.market_data.balance)}
						/>
					) : (
						<></>
					)}
				</div>
			</div>
			<Menu />
		</div>
	);
};
