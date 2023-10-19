import React from 'react';
import { Button, Par, Title } from '../../Components/UI';
import { SvgIcon } from '../../Svgs';
import { useSelector } from 'react-redux';

export const Success = () => {
	const { walletAddress } = useSelector((state) => state.wallet);
	const { password, usePin } = useSelector((state) => state.storage);

	return (
		<div className='screen'>
			<div className='body'></div>
			<div className='body-bottom'>
				<div style={{ marginBottom: 114 }}>
					<SvgIcon type='success' />
					<Title mt={30} fw={600}>
						Congratulations!
						<br />
						You have successfully <br /> added a new wallet
					</Title>
					{walletAddress !== '' && (
						<Par color='light' mt={16} center size='sm'>
							{walletAddress}
						</Par>
					)}
				</div>
				<Button to={password !== '' && usePin ? '/home' : '/create-pin'}>
					Continue
				</Button>
			</div>
		</div>
	);
};
