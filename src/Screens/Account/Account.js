import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fixNum from '../../func.wallet/fixNum';
import { ItemSelectAccounts, Header, Menu } from '../../Components';
import { setDeleteWallet, resetWallet } from '../../redux/slices/StorageSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { setDataWallet, setDeleteName } from '../../redux/slices/WalletSlice';

export const AccountWallets = () => {
	const { state } = useLocation();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { dataUser, currentWallet, usePin, backup } = useSelector(
		(state) => state.storage
	);
	const { portfolioBalanceUsd, deleteName } = useSelector(
		(state) => state.wallet
	);
	const [openDelete, setOpenDelete] = React.useState(false);
	const [openDeleteWarning, setOpenDeleteWarning] = React.useState(false);
	const [openDeleteBackup, setOpenDeleteBackup] = React.useState(false);
	const [openDeleteBackupWarning, setOpenDeleteBackupWarning] =
		React.useState(false);

	const onDeleteWallet = (backup, name) => {
		dispatch(setDeleteName(name));
		if (backup) {
			setOpenDelete(true);
		} else {
			setOpenDeleteBackup(true);
		}
	};

	React.useEffect(() => {
		if (state !== null) {
			if (backup) {
				setOpenDeleteWarning(true);
			} else {
				setOpenDeleteBackupWarning(true);
			}
		}
	}, [state]);

	const onDeleteWalletWarning = (modal) => {
		if (modal) {
			setOpenDelete(false);
			if (usePin) {
				navigate('/login-pin', { state: { to: '/wallets' } });
			} else {
				setOpenDeleteWarning(true);
			}
		} else {
			setOpenDeleteBackup(false);
			if (usePin) {
				navigate('/login-pin', { state: { to: '/wallets' } });
			} else {
				setOpenDeleteBackupWarning(true);
			}
		}
	};

	const onDeleteAccount = () => {
		if (dataUser !== null && dataUser.length > 1) {
			dispatch(setDeleteWallet(deleteName));
			setOpenDeleteWarning(false);
			setOpenDeleteBackupWarning(false);
			dispatch(setDataWallet(null));
		} else {
			navigate('/');
			dispatch(resetWallet());
		}
	};

	return (
		<div className='screen'>
			<div className='body'>
				<Header title='Wallet' />
				{dataUser.length ? (
					dataUser.map((item, i) => (
						<ItemSelectAccounts
							deleteFunc={onDeleteWallet}
							currentWallet={currentWallet}
							key={i}
							item={item}
							title={
								item.name === currentWallet
									? `$ ${fixNum(portfolioBalanceUsd)}`
									: ''
							}
							subtitle={item.name}
							accountType
							dropdownList={[]}
						/>
					))
				) : (
					<></>
				)}
			</div>
			{/* <Popup
				isOpen={openDeleteBackup}
				title='Delete wallet'
				text='To delete your wallet, you mast perform a manual backup.'>
				<Button variant='default' onClick={() => onDeleteWalletWarning(false)}>
					Okay
				</Button>
				<Button variant='inline' onClick={() => setOpenDeleteBackup(false)}>
					Cancel
				</Button>
			</Popup>
			<Popup
				isOpen={openDelete}
				title='Delete wallet'
				text='Deleting this wallet will erase your current wallet.'>
				<Button
					variant='default'
					colorText='var(--red)'
					onClick={() => onDeleteWalletWarning(true)}>
					Delete
				</Button>
				<Button variant='inline' onClick={() => setOpenDelete(false)}>
					Cancel
				</Button>
			</Popup>
			<Popup
				isOpen={openDeleteWarning}
				type='warning'
				title='Warning'
				titleTextStyled
				text='Are you sure you want to delete the wallet? Please, make sure you saved the phrase. Funds associated with the wallet will not be affected.'>
				<Button
					variant='default'
					colorText='var(--red)'
					onClick={onDeleteAccount}>
					Delete
				</Button>
				<Button variant='inline' onClick={() => setOpenDeleteWarning(false)}>
					Cancel
				</Button>
			</Popup>
			<Popup
				isOpen={openDeleteBackupWarning}
				type='warning'
				title='Warning'
				titleTextStyled
				text='Without the manual backup of your current wallet, you will lose access to its funds forever.'>
				<Button
					variant='default'
					colorText='var(--red)'
					onClick={onDeleteAccount}>
					Delete
				</Button>
				<Button
					variant='inline'
					onClick={() => setOpenDeleteBackupWarning(false)}>
					Cancel
				</Button>
			</Popup> */}
			<Menu />
		</div>
	);
};
