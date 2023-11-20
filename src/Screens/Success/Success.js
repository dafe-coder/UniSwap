import React from 'react';
import { Button, Par, Title } from '../../Components/UI';
import { SvgIcon } from '../../Svgs';
import { useSelector } from 'react-redux';
import styles from './success.module.css';

export const Success = () => {
	const { walletAddress } = useSelector((state) => state.wallet);
	const { password, usePin } = useSelector((state) => state.storage);

	return (
		<div className='screen'>
			<div className='bg-m'></div>
			<div className='body content-center'>
				<div className={styles.card}>
					<SvgIcon type='success' />
					<Title mt={30} fw={600}>
						Congratulations!
						<br />
						You have successfully added a<br /> new wallet
					</Title>
					{walletAddress !== '' && (
						<Par color='light' mt={16} center size='sm'>
							{walletAddress}
						</Par>
					)}
				</div>
			</div>
			<div className='body-bottom'>
				<Button to={password !== '' && usePin ? '/home' : '/create-pin'}>
					Continue
				</Button>
			</div>
		</div>
	);
};
