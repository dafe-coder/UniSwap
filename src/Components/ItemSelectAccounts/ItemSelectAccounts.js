import React from 'react';
import styles from './ItemSelect.module.css';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Par, Title } from '../UI';
import { SvgMenu } from '../../Svgs/SvgMenu';

export const ItemSelectAccounts = ({ title, item, deleteFunc }) => {
	const navigate = useNavigate();
	const { usePin } = useSelector((state) => state.storage);
	const { walletAddress } = useSelector((state) => state.wallet);

	const deleteWallet = (name) => {
		deleteFunc(item.backup, name);
	};

	const goCopy = (to) => {
		if (usePin) {
			navigate('/login-pin', { state: { to: to } });
		} else {
			navigate(to);
		}
	};

	return (
		<div>
			<div className={classNames(styles.card)}>
				<Title center={false} size='xl' className={styles.title}>
					{title}
				</Title>
				<Par mt={10} fw={500} size='sm'>
					{walletAddress.slice(0, 26) + '...' + walletAddress.slice(-4)}
				</Par>
			</div>
			{item.phrase !== '' ? (
				<div
					onClick={() => goCopy('/copy-phrase')}
					className={classNames(styles.dropdown_item)}
				>
					<Par size='m'>View Recovery Phrase</Par>
				</div>
			) : (
				<></>
			)}
			<div
				onClick={() => goCopy('/copy-key')}
				className={classNames(styles.dropdown_item)}
			>
				<Par size='m'>View Private Key</Par>
			</div>
			<div
				onClick={() => deleteWallet(item.name)}
				className={classNames(styles.dropdown_item)}
				style={{ color: 'var(--red)' }}
			>
				<Par size='m'>Delete wallet</Par>
			</div>
		</div>
	);
};
