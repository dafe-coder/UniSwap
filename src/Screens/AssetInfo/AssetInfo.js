import React from 'react';
import styles from './assetInfo.module.css';
import { Menu, ButtonActions } from '../../Components';
import { Item } from '../../Components/Item/Item';
import { SvgIcon } from '../../Svgs';
import { Par } from '../../Components/UI';
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
		console.log(width);
	}, [width]);

	React.useEffect(() => {
		if (state !== null && state.contract_address !== '') {
			dispatch(fetchChartCoin([state.contract_address, setPeriod()]));
		} else {
			dispatch(fetchChartCoinDefault([state.id, setPeriod(true)]));
		}
	}, [activeTimeline]);

	React.useEffect(() => {
		const observer = new ResizeObserver((entries) => {
			setWidth(entries[0].contentRect.width);
		});

		if (wrapRef.current) {
			observer.observe(wrapRef.current);
		}

		return () => {
			wrapRef.current && observer.unobserve(wrapRef.current);
		};
	}, []);

	const setPeriod = (eth) => {
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
	};

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
					<div
						className={styles.link}
						onClick={() => navigate('/buy', { state: { item: state } })}
					>
						<Par color='light'>Buy</Par>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M8.25 21C9.07843 21 9.75 20.3284 9.75 19.5C9.75 18.6716 9.07843 18 8.25 18C7.42157 18 6.75 18.6716 6.75 19.5C6.75 20.3284 7.42157 21 8.25 21Z'
								fill='#98A1C0'
							/>
							<path
								d='M18.75 21C19.5784 21 20.25 20.3284 20.25 19.5C20.25 18.6716 19.5784 18 18.75 18C17.9216 18 17.25 18.6716 17.25 19.5C17.25 20.3284 17.9216 21 18.75 21Z'
								fill='#98A1C0'
							/>
							<path
								d='M21.4125 5.66156C21.3071 5.53268 21.1744 5.42888 21.0239 5.35769C20.8734 5.2865 20.709 5.24971 20.5425 5.25H6.27609L5.98875 3.61969C5.95811 3.44603 5.86726 3.28872 5.73216 3.17539C5.59706 3.06206 5.42634 2.99996 5.25 3H2.25C2.05109 3 1.86032 3.07902 1.71967 3.21967C1.57902 3.36032 1.5 3.55109 1.5 3.75C1.5 3.94891 1.57902 4.13968 1.71967 4.28033C1.86032 4.42098 2.05109 4.5 2.25 4.5H4.62094L6.76125 16.6303C6.79189 16.804 6.88274 16.9613 7.01784 17.0746C7.15294 17.1879 7.32366 17.25 7.5 17.25H19.5C19.6989 17.25 19.8897 17.171 20.0303 17.0303C20.171 16.8897 20.25 16.6989 20.25 16.5C20.25 16.3011 20.171 16.1103 20.0303 15.9697C19.8897 15.829 19.6989 15.75 19.5 15.75H8.12906L7.86469 14.25H19.1925C19.4526 14.2497 19.7046 14.1595 19.9058 13.9947C20.1071 13.8299 20.2452 13.6007 20.2969 13.3458L21.6469 6.59578C21.6794 6.43242 21.6753 6.26388 21.6347 6.10232C21.5942 5.94076 21.5183 5.79022 21.4125 5.66156Z'
								fill='#98A1C0'
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
							<Par
								size='m'
								fw={500}
								style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
							>
								${' '}
								{state !== null ? fixNum(state.market_data.current_price) : ''}
								<div className={styles.notification}>
									<SvgIcon type='bell' />
								</div>
							</Par>
							<Indicators
								percent={state.changes.percent}
								style={{ position: 'relative', marginTop: 10 }}
							/>
						</div>
						<div className={styles.btnsAction}>
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
										<stop offset='5%' stopColor='#EA39C4' stopOpacity={0.4} />
										<stop offset='95%' stopColor='#EA39C4' stopOpacity={0} />
									</linearGradient>
								</defs>
								<YAxis domain={['auto', 'dataMax']} hide={true} />
								<Area
									type='linear'
									strokeWidth={2}
									dataKey='value'
									stroke='#EA39C4'
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
					<Par color='light' size='sm' fw={500} mb={16}>
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
