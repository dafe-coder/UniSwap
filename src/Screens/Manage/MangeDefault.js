import React from 'react';
import { Button, Par } from '../../Components/UI';
import { Header } from '../../Components';
import Img1 from '../../assets/images/coins/1.png';
import Img2 from '../../assets/images/coins/2.png';
import Img3 from '../../assets/images/coins/3.png';
import Img4 from '../../assets/images/coins/4.png';
import Img5 from '../../assets/images/coins/5.png';
import { ItemList } from '../../Components/';
import { useDispatch } from 'react-redux';
import { setChooseAssets } from '../../redux/slices/StorageSlice';

const items = [
	{
		name: 'ETHEREUM',
		symbol: 'ETH',
		image: {
			thumb: Img1,
		},
		market_data: {
			balance: '0.0',
		},
	},
	{
		name: 'Bitcoin',
		symbol: 'Btc',
		image: {
			thumb: Img2,
		},
		market_data: {
			balance: '0.0',
		},
	},
	{
		name: 'Bnb',
		symbol: 'Bnb',
		image: {
			thumb: Img3,
		},
		market_data: {
			balance: '0.0',
		},
	},
	{
		name: 'Polygon',
		symbol: 'Matic',
		image: {
			thumb: Img4,
		},
		market_data: {
			balance: '0.0',
		},
	},
	{
		name: 'Avalanche',
		symbol: 'Avax',
		image: {
			thumb: Img5,
		},
		market_data: {
			balance: '0.0',
		},
	},
];

export const MangeDefault = () => {
	const dispatch = useDispatch();

	const handleToggle = (data) => {
		dispatch(setChooseAssets(data.amount.split(' ')[1].toLowerCase()));
	};

	return (
		<div className='screen'>
			<div className='bottom-bg-light' />
			<Header title='Manage cryptos' back={false} />
			<div className='body'>
				<Par center={false} color='light' size='sm'>
					Choose what tokens will be displayed in your wallet by default.
				</Par>
				<ItemList mt={38} items={items} handleToggle={handleToggle} />
				<Par mt={16} mb={15} color='light'>
					You can always change this later! ☺️
				</Par>
			</div>
			<div className='body-bottom'>
				<Button to='/success'>Go to my wallet</Button>
			</div>
		</div>
	);
};
