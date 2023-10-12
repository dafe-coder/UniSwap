import React from 'react';
import styles from './manage.module.css';
import { Header } from '../../Components';
import { Par } from '../../Components/UI';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setChooseAssets } from '../../redux/slices/StorageSlice';
import { ItemLoader } from '../../Components';
import { SvgIcon } from '../../Svgs';
import fixNum from '../../func.wallet/fixNum';
import { Item } from '../../Components/Item/Item';

export const Manage = () => {
	const dispatch = useDispatch();
	const { allCoins } = useSelector((state) => state.wallet);
	const [filtered, setFiltered] = React.useState([]);
	const [value, setValue] = React.useState('');

	React.useEffect(() => {
		if (allCoins !== null) {
			if (value !== '') {
				const filteredCoins = allCoins.filter(
					(item) =>
						item.name.toLowerCase().includes(value.toLowerCase()) ||
						item.symbol.toLowerCase().includes(value.toLowerCase())
				);
				setFiltered(filteredCoins);
			} else {
				setFiltered(allCoins);
			}
		}
	}, [allCoins, value]);

	const handleToggle = (item) => {
		dispatch(setChooseAssets(item));
	};

	return (
		<div className='screen'>
			<div className='body'>
				<Header title='Manage cryptos' />

				<Par color='light'>Choose what cryptos will be in your wallet.</Par>
				<div className={styles.search}>
					<SvgIcon type='search' />
					<input
						value={value}
						onChange={(e) => setValue(e.target.value)}
						type='text'
						placeholder='Search Crypto'
						className={styles.search_input}
					/>
				</div>
				<div className={styles.list}>
					{allCoins.length ? (
						filtered.length ? (
							filtered.map((item, index) => (
								<Item
									id={item.symbol}
									key={index}
									onChange={handleToggle}
									img={item.image.thumb}
									name={item.name}
									symbol={item.symbol}
									amount={fixNum(item.market_data.balance)}
								/>
							))
						) : (
							<></>
						)
					) : (
						<div className='items-loader'>
							<ItemLoader />
							<ItemLoader />
							<ItemLoader />
							<ItemLoader />
							<ItemLoader />
							<ItemLoader />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
