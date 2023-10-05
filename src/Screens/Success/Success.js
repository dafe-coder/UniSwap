import React from 'react';
import { Button, Par, Title } from '../../Components/UI';

import { useSelector } from 'react-redux';

export const Success = () => {
	const { walletAddress } = useSelector((state) => state.wallet);
	const { password, usePin } = useSelector((state) => state.storage);

	return (
		<div className='screen'>
			<div className='body'></div>
			<div className='body-bottom'>
				<div style={{ marginBottom: 114 }}>
					<svg
						width='86'
						height='86'
						viewBox='0 0 86 86'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<circle cx='43' cy='43' r='43' fill='#00FFA3' fill-opacity='0.24' />
						<circle cx='43' cy='43' r='33' fill='#00FFA3' />
						<path
							d='M29 41.2045L37.963 51.1994C38.3508 51.6318 39.0243 51.644 39.4274 51.2258L57 33'
							stroke='white'
							stroke-width='4'
							stroke-linecap='round'
						/>
					</svg>
					<Title mt={30}>
						Congratulations!
						<br />
						You have successfully <br /> added a new wallet
					</Title>
					{walletAddress !== '' && <Par mt={16}>{walletAddress}</Par>}
				</div>
				<Button to={password !== '' && usePin ? '/home' : '/create-pin'}>
					Continue
				</Button>
			</div>
		</div>
	);
};
