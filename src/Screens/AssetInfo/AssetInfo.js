import React from 'react';
import styles from './assetInfo.module.css';
import { Menu, ButtonActions } from '../../Components';
import { Item } from '../../Components/Item/Item';
import { SvgIcon } from '../../Svgs';
import { Par } from '../../Components/UI';
import { Area, AreaChart } from 'recharts';
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
			<div className='body'>
				<div className='header'>
					<div className={styles.title}>
						<div className={styles.title_logo}>
							<img src={state !== null ? state.image.thumb : ''} alt='thumb' />
						</div>
						<Par size='m'>{state !== null ? state.name : ''}</Par>
					</div>
					<div></div>
					<div
						className={styles.link}
						onClick={() =>
							navigate('/buy', { state: { item: state, from: 'swapOne' } })
						}
					>
						<Par>Buy</Par>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M2.40002 1.99268C1.84774 1.99268 1.40002 2.44039 1.40002 2.99268C1.40002 3.54496 1.84774 3.99268 2.40002 3.99268V1.99268ZM4.69256 2.99268L5.65779 2.73126C5.53973 2.29536 5.14417 1.99268 4.69256 1.99268V2.99268ZM8.41793 16.7479L7.45271 17.0093C7.58298 17.4903 8.0475 17.802 8.54197 17.7402L8.41793 16.7479ZM19.8806 15.3151L20.0047 16.3073C20.4293 16.2543 20.7732 15.9368 20.8599 15.5177L19.8806 15.3151ZM21.6 7.00462L22.5793 7.20722C22.6402 6.91271 22.5654 6.60641 22.3755 6.37319C22.1856 6.13998 21.9008 6.00462 21.6 6.00462V7.00462ZM5.77913 7.00462L4.8139 7.26603L5.77913 7.00462ZM2.40002 3.99268H4.69256V1.99268H2.40002V3.99268ZM8.54197 17.7402L20.0047 16.3073L19.7566 14.3228L8.2939 15.7556L8.54197 17.7402ZM20.8599 15.5177L22.5793 7.20722L20.6208 6.80201L18.9014 15.1125L20.8599 15.5177ZM3.72733 3.25409L4.8139 7.26603L6.74435 6.7432L5.65779 2.73126L3.72733 3.25409ZM4.8139 7.26603L7.45271 17.0093L9.38316 16.4865L6.74435 6.7432L4.8139 7.26603ZM21.6 6.00462H5.77913V8.00462H21.6V6.00462ZM11 20.4999C11 20.7761 10.7762 20.9999 10.5 20.9999V22.9999C11.8807 22.9999 13 21.8807 13 20.4999H11ZM10.5 20.9999C10.2239 20.9999 10 20.7761 10 20.4999H8.00002C8.00002 21.8807 9.11931 22.9999 10.5 22.9999V20.9999ZM10 20.4999C10 20.2238 10.2239 19.9999 10.5 19.9999V17.9999C9.11931 17.9999 8.00002 19.1192 8.00002 20.4999H10ZM10.5 19.9999C10.7762 19.9999 11 20.2238 11 20.4999H13C13 19.1192 11.8807 17.9999 10.5 17.9999V19.9999ZM19 20.4999C19 20.7761 18.7762 20.9999 18.5 20.9999V22.9999C19.8807 22.9999 21 21.8807 21 20.4999H19ZM18.5 20.9999C18.2239 20.9999 18 20.7761 18 20.4999H16C16 21.8807 17.1193 22.9999 18.5 22.9999V20.9999ZM18 20.4999C18 20.2238 18.2239 19.9999 18.5 19.9999V17.9999C17.1193 17.9999 16 19.1192 16 20.4999H18ZM18.5 19.9999C18.7762 19.9999 19 20.2238 19 20.4999H21C21 19.1192 19.8807 17.9999 18.5 17.9999V19.9999Z'
								fill='white'
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
								style={{ borderRight: 'none' }}
								position='left'
								to='/send-amount'
								state={{ item: state, from: 'swapOne' }}
								icon='send'
								title='Send'
							/>
							<CircleButton
								position='right'
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
								width={width + 60}
								height={130}
								data={chartBitcoin}
								// baseValue={1000}
								margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
							>
								<defs>
									<linearGradient id='value' x1='0' y1='0' x2='0' y2='1'>
										<stop offset='5%' stopColor='#4B74DB' stopOpacity={0.4} />
										<stop offset='95%' stopColor='#4B74DB' stopOpacity={0} />
									</linearGradient>
								</defs>
								<Area
									type='linear'
									dataKey='value'
									stroke='#4B74DB'
									fillOpacity={1}
									strokeWidth={2}
									scale='point'
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
					<Par size='sm' fw={500} mb={16}>
						Available Balance
					</Par>

					{state !== null ? (
						<Item
							className={styles.itemAsset}
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
