import React from 'react';
import { Item } from '../../Components/Item/Item';
import { Header } from '../../Components/Header/Header';
import { Menu } from '../../Components';

const styleWrap = {
	display: 'flex',
	flexDirection: 'column',
	gap: 14,
	marginTop: 30,
};
export const About = () => {
	return (
		<div className='screen'>
			<Header title='About' />
			<div className='body'>
				<div style={styleWrap}>
					<Item
						onClick={() => window.open('https://www.coinomi.com/privacy/')}
						toggle={false}
						size='sm'
						name='Terms of Use'
					/>
					<Item
						onClick={() => window.open('https://www.coinomi.com/privacy/')}
						toggle={false}
						size='sm'
						name='Privacy policy'
					/>
				</div>
			</div>
			<Menu />
		</div>
	);
};
