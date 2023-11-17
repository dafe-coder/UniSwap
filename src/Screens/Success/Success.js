import React from 'react';
import { Button, Par, Title } from '../../Components/UI';
import { SvgIcon } from '../../Svgs';
import { useSelector } from 'react-redux';

export const Success = () => {
	const { walletAddress } = useSelector((state) => state.wallet);
	const { password, usePin } = useSelector((state) => state.storage);

	return (
		<div className='screen'>
			<div className='top-bg' />
			<div className='body content-center'>
				<div>
					<SvgIcon type='success' />
					<Title mt={30}>
						Congratulations!
						<br />
						You have successfully added
						<br /> a new wallet
					</Title>
					{walletAddress !== '' && (
						<Par center mt={25}>
							{walletAddress}
						</Par>
					)}
				</div>
			</div>
			<div className='body-bottom '>
				<Button to={password !== '' && usePin ? '/home' : '/create-pin'}>
					Continue
				</Button>
			</div>
		</div>
	);
};
