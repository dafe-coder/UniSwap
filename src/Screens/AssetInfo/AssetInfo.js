import React from 'react';
import styles from './assetInfo.module.css';
import { Menu, ButtonActions } from '../../Components';
import { Item } from '../../Components/Item/Item';
import { SvgIcon } from '../../Svgs';
import { Par, Title } from '../../Components/UI';
import { Area, AreaChart, YAxis } from 'recharts';
import { useLocation } from 'react-router-dom';
import fixNum from '../../func.wallet/fixNum';
import { useNavigate } from 'react-router-dom';
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
	const navigate = useNavigate();
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
			<div className='body'>
				<div className='header'>
					<Par fw={600} color='black' className={styles.title}>
						<div className={styles.title_logo}>
							<img src={state !== null ? state.image.thumb : ''} alt='thumb' />
						</div>
						{state !== null ? state.name : ''}
					</Par>
					<div></div>
					<div
						className={styles.link}
						onClick={() => navigate('/buy', { state: { item: state } })}
					>
						<Par color='light'>Buy</Par>
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M3.21988 13.7127C2.50493 10.8529 2.14745 9.42294 2.89814 8.46147C3.64883 7.5 5.12275 7.5 8.07059 7.5H11.9295C14.8773 7.5 16.3513 7.5 17.102 8.46147C17.8526 9.42294 17.4952 10.8529 16.7802 13.7127C16.3255 15.5316 16.0981 16.441 15.42 16.9705C14.7418 17.5 13.8044 17.5 11.9295 17.5H8.07059C6.19572 17.5 5.25828 17.5 4.58012 16.9705C3.90197 16.441 3.67461 15.5316 3.21988 13.7127Z'
								stroke='#202124'
								strokeWidth='1.5'
							/>
							<path
								d='M16.25 7.91666L15.658 5.74553C15.4297 4.90837 15.3156 4.48978 15.0815 4.17455C14.8483 3.8606 14.5315 3.61861 14.1673 3.47626C13.8016 3.33333 13.3677 3.33333 12.5 3.33333M3.75 7.91666L4.342 5.74553C4.57027 4.90837 4.6844 4.48978 4.91851 4.17455C5.15166 3.8606 5.46846 3.61861 5.83269 3.47626C6.1984 3.33333 6.63227 3.33333 7.5 3.33333'
								stroke='#05C0A5'
								strokeWidth='1.5'
							/>
							<path
								d='M7.5 3.33333C7.5 2.8731 7.8731 2.5 8.33333 2.5H11.6667C12.1269 2.5 12.5 2.8731 12.5 3.33333C12.5 3.79357 12.1269 4.16667 11.6667 4.16667H8.33333C7.8731 4.16667 7.5 3.79357 7.5 3.33333Z'
								stroke='#202124'
							/>
						</svg>
					</div>
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
							<Par color='light' size='sm' mb={10}>
								Price
							</Par>
							<Title
								size='m'
								fw={500}
								style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
							>
								${' '}
								{state !== null ? fixNum(state.market_data.current_price) : ''}
								<SvgIcon type='bell' />
							</Title>
							<Indicators
								percent={state.changes.percent}
								style={{ position: 'relative', marginTop: 10 }}
							/>
						</div>
						<div className={styles.btnsAction}>
							<CircleButton
								style={{
									width: 40,
									height: 40,
									padding: 0,
									border: '1px solid var(--gray-light)',
									borderRadius: 12,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
								to='/send-amount'
								state={{ item: state, from: 'swapOne' }}
								icon='send-future'
							/>
							<CircleButton
								style={{
									width: 40,
									height: 40,
									padding: 0,
									border: '1px solid var(--gray-light)',
									borderRadius: 12,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
								to='/home/receive'
								state={{ item: state }}
								icon='receive-future'
							/>
						</div>
					</div>
				</div>
				{chartBitcoin !== null ? (
					<div className={styles.wrapBlock}>
						<div className={styles.chart}>
							<AreaChart
								width={width + 60}
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
					<Par mt={10} color='light' size='sm' fw={600} mb={16}>
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
