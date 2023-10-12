import React from 'react';
import styles from './swap.module.css';
import { Header } from '../../Components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ItemLoader } from '../../Components';
import { SvgIcon } from '../../Svgs';
import { Item } from '../../Components/Item/Item';

export const SwapCoins = () => {
	const { state } = useLocation();
	const navigate = useNavigate();
	const { allCoins } = useSelector((state) => state.wallet);
	const [searchValue, setSearchValue] = React.useState('');
	const [filtered, setFiltered] = React.useState([]);

	React.useEffect(() => {
		if (allCoins !== null) {
			if (searchValue !== '') {
				setFiltered(
					allCoins.filter(
						(item) =>
							item.symbol.toLowerCase().includes(searchValue.toLowerCase()) ||
							item.name.toLowerCase().includes(searchValue.toLowerCase())
					)
				);
			} else {
				setFiltered(allCoins);
			}
		}
	}, [searchValue, allCoins]);

	const onChooseCoin = (item) => {
		navigate(state.to, { state: { item, from: state.from } });
	};

	function title() {
		switch (state.to) {
			case '/swap':
				return 'Swap';
			case '/buy':
				return 'Buy';
			default:
				return 'Send';
		}
	}

	return (
		<div className='screen'>
			<div className='body'>
				<Header title={'Choose a crypto to ' + title()} />
				<div className={styles.search}>
					<SvgIcon type='search' />
					<input
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
						type='text'
						placeholder='Search'
						className={styles.search_input}
					/>
				</div>
				<div className={styles.list}>
					{allCoins.length ? (
						filtered.length ? (
							filtered.map((item, index) => (
								<Item
									key={index}
									onClick={() => onChooseCoin(item)}
									toggle={false}
									img={item.image.thumb}
									symbol={item.symbol}
									name={item.name}
									amount={item.market_data.balance}
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
