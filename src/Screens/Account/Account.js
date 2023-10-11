import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fixNum from '../../func.wallet/fixNum';
import { ItemSelectAccounts, Header, Menu } from '../../Components';
import { setDeleteWallet, resetWallet } from '../../redux/slices/StorageSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { setDataWallet, setDeleteName } from '../../redux/slices/WalletSlice';
import { Modal, Button } from '../../Components/UI';

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
	}, [state, backup]);

	const onDeleteWalletWarning = (modal) => {
		if (modal) {
			setOpenDelete(false);
			if (usePin) {
				navigate('/login-pin', { state: { to: '/settings/wallets' } });
			} else {
				setOpenDeleteWarning(true);
			}
		} else {
			setOpenDeleteBackup(false);
			if (usePin) {
				navigate('/login-pin', { state: { to: '/settings/wallets' } });
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
			<div className='bottom-bg' />
			<div className='body'>
				<Header title='Wallet' />
				{dataUser.length ? (
					dataUser.map((item, i) => (
						<ItemSelectAccounts
							deleteFunc={onDeleteWallet}
							key={i}
							item={item}
							title={
								item.name === currentWallet
									? `$ ${fixNum(portfolioBalanceUsd)}`
									: ''
							}
						/>
					))
				) : (
					<></>
				)}
			</div>
			<Modal
				setOpen={setOpenDeleteBackup}
				open={openDeleteBackup}
				title='Delete wallet'
				par='To delete your wallet, you mast perform a manual backup.'
			>
				<div className='btns' style={{ marginTop: 30 }}>
					<Button
						size='sm'
						variant='default'
						onClick={() => onDeleteWalletWarning(false)}
					>
						Okay
					</Button>
					<Button
						size='sm'
						variant='outlined'
						onClick={() => setOpenDeleteBackup(false)}
					>
						Cancel
					</Button>
				</div>
			</Modal>
			<Modal
				setOpen={setOpenDelete}
				open={openDelete}
				title='Delete wallet'
				par='Deleting this wallet will erase your current wallet.'
			>
				<div className='btns' style={{ marginTop: 30 }}>
					<Button
						size='sm'
						variant='default'
						colorText='var(--red)'
						onClick={() => onDeleteWalletWarning(true)}
					>
						Delete
					</Button>
					<Button
						size='sm'
						variant='outlined'
						onClick={() => setOpenDelete(false)}
					>
						Cancel
					</Button>
				</div>
			</Modal>
			<Modal
				setOpen={setOpenDeleteWarning}
				open={openDeleteWarning}
				warning
				title='Warning'
				par='Are you sure you want to delete the wallet? Please, make sure you saved the phrase. Funds associated with the wallet will not be affected.'
			>
				<div className='btns' style={{ marginTop: 30 }}>
					<Button
						size='sm'
						variant='default'
						colorText='var(--red)'
						onClick={onDeleteAccount}
					>
						Delete
					</Button>
					<Button
						size='sm'
						variant='outlined'
						onClick={() => setOpenDeleteWarning(false)}
					>
						Cancel
					</Button>
				</div>
			</Modal>
			<Modal
				setOpen={setOpenDeleteBackupWarning}
				open={openDeleteBackupWarning}
				title='Warning'
				warning
				par='Without the manual backup of your current wallet, you will lose access to its funds forever.'
			>
				<div className='btns' style={{ marginTop: 30 }}>
					<Button
						size='sm'
						variant='default'
						colorText='var(--red)'
						onClick={onDeleteAccount}
					>
						Delete
					</Button>
					<Button
						size='sm'
						variant='outlined'
						onClick={() => setOpenDeleteBackupWarning(false)}
					>
						Cancel
					</Button>
				</div>
			</Modal>
			<Menu />
		</div>
	);
};
