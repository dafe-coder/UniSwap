import React from 'react';
import styles from './wallet.module.css';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
	fetchDataWallet,
	setAllCoins,
	fetchAllCoins,
	setDataWallet,
} from '../../redux/slices/WalletSlice';
import {
	setAddressTo,
	setAmountSend,
	setChooseCoinOne,
	setChooseCoinTwo,
} from '../../redux/slices/TransactionsSlice';
import { SvgIcon } from '../../Svgs';
import {
	CardPrice,
	PriceLoader,
	TransactionItem,
	ItemLoader,
	ItemExpand,
	NavSwitch,
	ItemNft,
	Menu,
} from '../../Components';
import fixNum from '../../func.wallet/fixNum';
import { Par } from '../../Components/UI';
import { CircleButton } from '../../Components/UI/';
import { setCurrentWallet } from '../../redux/slices/StorageSlice';

export const Wallet = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {
		portfolioCoins,
		portfolioBalanceUsd,
		portfolioBalanceChange,
		allCoins,
		dataWallet,
		walletNew,
		coins,
		status,
	} = useSelector((state) => state.wallet);
	const { dataUser, currentWallet, chooseAssets, usePin } = useSelector(
		(state) => state.storage
	);
	const [portfolioCoinsFiltered, setPortfolioCoinsFiltered] = React.useState(
		[]
	);
	const [showTab, setShowTab] = React.useState(false);
	const [dataCurrentWallet, setDataCurrentWallet] = React.useState(undefined);

	React.useEffect(() => {
		const wallet = dataUser.find((item) => item.name === currentWallet);
		setDataCurrentWallet(wallet);
		if (wallet !== undefined && dataWallet === null && status !== 'loading') {
			dispatch(
				fetchDataWallet([
					wallet.phrase !== '' ? wallet.phrase : wallet.privateKey,
					walletNew,
				])
			);
		}
	}, [dataUser, dataWallet, dispatch, currentWallet, walletNew, status]);

	React.useEffect(() => {
		dispatch(setAmountSend(0));
		dispatch(setAddressTo(''));
		if (coins === null) {
			dispatch(fetchAllCoins());
		}
	}, [coins, dispatch]);

	React.useEffect(() => {
		if (portfolioCoins !== null && coins !== null) {
			const portfolioSymbols = portfolioCoins.map((item) =>
				item.symbol.toLowerCase()
			);
			const filterAssets = chooseAssets.filter(
				(item) => !portfolioSymbols.includes(item)
			);
			const coinsFilter = coins.filter((item) =>
				filterAssets.includes(item.symbol.toLowerCase())
			);
			const coinsFilterDefault = coins.filter(
				(item) => !portfolioSymbols.includes(item.symbol.toLowerCase())
			);

			setPortfolioCoinsFiltered([...portfolioCoins, ...coinsFilter]);

			dispatch(setAllCoins([...portfolioCoins, ...coinsFilterDefault]));
		}
	}, [portfolioCoins, coins, chooseAssets, dispatch]);

	React.useEffect(() => {
		if (allCoins.length) {
			dispatch(setChooseCoinOne(allCoins[0]));
			dispatch(setChooseCoinTwo(allCoins[1]));
		}
	}, [allCoins, dispatch]);

	const menuItems = [
		{
			title: 'View Recovery Phrase',
			to: '/copy-phrase',
			icon: 'view',
			pass: true,
		},
		{
			title: 'View Private Key',
			to: '/copy-key',
			icon: 'key',
			pass: true,
		},
		{
			title: 'Lock',
			icon: 'lock-red',
			color: 'var(--red)',
			to: '/welcome-back',
			pass: false,
		},
	];

	const mockNft = [
		{
			image:
				'https://cdn.ordinalswallet.com/inscription/preview/47c1d21c508f6d49dfde64d958f' +
				'14acd041244e1bb616f9b78114b8d9dc7b945i0',
			title: 'Pixel Pepes #170111-171690',
			subtitle: 'image/png',
			price: '0.06000000',
		},
		{
			image:
				'https://cdn.ordinalswallet.com/inscription/preview/d19981a198e4a8419c8be18588d' +
				'9e4919cea294deefdb5f9261a30242df578b7i0',
			title: 'Bitcoin Frogs #381224-412389',
			subtitle: 'image/png',
			price: '0.149999',
		},
		{
			image:
				'https://cdn.ordinalswallet.com/inscription/preview/a4dd23ce0651cca0683983dc641' +
				'1616e8ef9b38658266b641f53b66e2bfc9e7di0',
			title: 'DogePunks #383632-641330',
			subtitle: 'image/png',
			price: '0.00418042',
		},
		{
			image:
				'https://cdn.ordinalswallet.com/inscription/preview/27a7729374514061a18a085b091' +
				'56d3ead71e2337854f251a0ca0034caaf77eci0',
			title: 'Ordinal Otters #81714-91593',
			subtitle: 'image/png',
			price: '0.01099994',
		},
		{
			image:
				'https://cdn.ordinalswallet.com/inscription/preview/b9b7a284924d74df5e8a405f997' +
				'd7cad37dadb5949ad687234a22d9e5383f80bi0',
			title: 'Bitcoin Monkes #180273-352484',
			subtitle: 'image/png',
			price: '0.01099994',
		},
	];

	const chooseAccount = (item) => {
		dispatch(setCurrentWallet(item.name));
		dispatch(setDataWallet(null));
		navigate('/home');
		setPortfolioCoinsFiltered([]);
	};

	const handleItemClick = (item) => {
		if (item.to && item.pass) {
			if (usePin) {
				navigate('/login-pin', { state: { to: item.to } });
			} else {
				navigate(item.to);
			}
		} else if (item.to && !item.pass) {
			navigate(item.to);
		}
	};

	return (
		<div className='screen'>
			<div className='bg-top' />
			<div className='body'>
				<div className='header' style={{ marginBottom: 25 }}>
					<div style={{ cursor: 'pointer' }} className='header-item'>
						<ItemExpand
							items
							caretFill='var(--black-text)'
							title={
								<div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
									<Par
										fw={700}
										size='m'
										style={{ marginRight: 2 }}
										color='black'
									>
										{currentWallet}
									</Par>
								</div>
							}
						>
							{dataUser.map((item) => (
								<div
									key={item.name}
									className={cn('item-expand', {
										active: item.name === currentWallet,
									})}
									onClick={() => chooseAccount(item)}
								>
									{item.name}
								</div>
							))}
						</ItemExpand>
					</div>
					<div></div>
					<div>
						<ItemExpand
							posRight
							ownTitle
							items
							title={
								<div style={{ cursor: 'pointer' }} className='header-item'>
									<SvgIcon type='activity' />
								</div>
							}
						>
							{menuItems.map((item) => {
								if (
									item.title === 'View Recovery Phrase' &&
									dataCurrentWallet !== undefined &&
									dataCurrentWallet.phrase === ''
								) {
									return <></>;
								} else {
									return (
										<div
											key={item.title}
											className='item-expand'
											onClick={() => handleItemClick(item)}
										>
											{item.title}
										</div>
									);
								}
							})}
						</ItemExpand>
					</div>
				</div>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<NavSwitch
						setActive={() => navigate('/activity')}
						active={true}
						leftText='Wallet'
						rightText='Activity'
					/>
				</div>
				{portfolioBalanceUsd !== null ? (
					<CardPrice
						balance={fixNum(portfolioBalanceUsd)}
						change={portfolioBalanceChange}
					/>
				) : (
					<PriceLoader style={{ width: '100%', marginTop: 30 }} />
				)}
				<div className={styles.btnsCircle}>
					<CircleButton
						position='left'
						to='/swap-coins'
						state={{ to: '/send-amount', from: 'swapOne' }}
						title='Send'
						icon='send'
					/>
					<CircleButton title='Receive' icon='receive' to='/home/receive' />
					<CircleButton position='right' title='Buy' icon='buy' to='/buy' />
				</div>
				<div className={cn(styles.listTitle)}>
					<div className={styles.nav}>
						<div
							onClick={() => setShowTab(false)}
							className={cn(styles.navItem, {
								[styles.active]: !showTab,
							})}
						>
							Wallet
						</div>
						<div
							onClick={() => setShowTab(true)}
							className={cn(styles.navItem, {
								[styles.active]: showTab,
							})}
						>
							NFT
						</div>
					</div>
					{!showTab && (
						<span
							className='list-title-link'
							onClick={() => navigate('/manage')}
						>
							<Par fw={600} color='light'>
								Manage Account
							</Par>
						</span>
					)}
				</div>
				{!showTab ? (
					<div className={styles.list}>
						{portfolioCoinsFiltered.length ? (
							portfolioCoinsFiltered.map((item, i) => (
								<TransactionItem data={item} key={i} />
							))
						) : (
							<div className='items-loader'>
								<ItemLoader width={window.innerWidth - 40} />
								<ItemLoader width={window.innerWidth - 40} />
								<ItemLoader width={window.innerWidth - 40} />
								<ItemLoader width={window.innerWidth - 40} />
							</div>
						)}
					</div>
				) : (
					<div className={styles.listNft}>
						{mockNft.map((item, i) => (
							<ItemNft item={item} key={i} />
						))}
					</div>
				)}
			</div>
			<Menu />
		</div>
	);
};
