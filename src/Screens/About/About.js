import React from 'react';
import { Item } from '../../Components/Item/Item';
import { Header } from '../../Components/Header/Header';

const styleWrap = {
	display: 'flex',
	flexDirection: 'column',
	gap: 14,
	marginTop: 30,
};
export const About = () => {
	return (
		<div className='screen'>
			<div className='bottom-bg'></div>
			<Header title='About' />
			<div className='body'>
				<div style={styleWrap}>
					<Item toggle={false} size='sm' name='Terms of Use' />
					<Item toggle={false} size='sm' name='Privacy policy' />
				</div>
			</div>
		</div>
	);
};
