import React from 'react';
import {
	Step1,
	Step2,
	Step3,
	Start,
	ImportData,
	MangeDefault,
	Success,
	Settings,
	AccountWallets,
	ImportStart,
	Backup,
	BackupStart,
	BackupPhrase,
	BackupFinish,
	BackupSuccess,
	Security,
	Notifications,
	DApps,
	DAppsQr,
	About,
	Rpc,
	PinCreate,
	PinConfirm,
	Wallet,
	PinLogin,
	CopyPhrase,
	CopyKey,
	Swap,
	SwapCoins,
	Buy,
	SendAmount,
	SendAddress,
	SendPreview,
	Activity,
	AssetInfo,
	Receive,
	Manage,
	Generate,
	WelcomeBack,
} from '../Screens';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLockWallet } from '../redux/slices/StorageSlice';

export const Navigation = () => {
	const dispatch = useDispatch();
	const { isLogin, lockWallet, password, autoLock, usePin } = useSelector(
		(state) => state.storage
	);

	React.useEffect(() => {
		if (password !== '' && autoLock) {
			dispatch(setLockWallet(true));
		}
	}, [password, autoLock, dispatch]);
	return (
		<Routes>
			{password !== '' && usePin && lockWallet ? (
				<Route path='/' element={<WelcomeBack />} />
			) : isLogin && usePin === false ? (
				<Route path='/' element={<Wallet />} />
			) : (
				<Route path='/' element={<Step1 />} />
			)}
			<Route path='/step2' element={<Step2 />} />
			<Route path='/step3' element={<Step3 />} />
			<Route path='/start' element={<Start />} />
			<Route path='/import-data' element={<ImportData />} />
			<Route path='/manage-default' element={<MangeDefault />} />
			<Route path='/success' element={<Success />} />
			<Route path='/settings' element={<Settings />} children={<></>} />
			<Route path='/settings/wallets' element={<AccountWallets />} />
			<Route path='/settings/import-start' element={<ImportStart />} />
			<Route path='/settings/backup' element={<Backup />} />
			<Route path='/settings/backup-start' element={<BackupStart />} />
			<Route path='/settings/backup-phrase' element={<BackupPhrase />} />
			<Route path='/settings/backup-finish' element={<BackupFinish />} />
			<Route path='/settings/backup-success' element={<BackupSuccess />} />
			<Route path='/settings/security' element={<Security />} />
			<Route path='/settings/notifications' element={<Notifications />} />
			<Route path='/settings/dapps' element={<DApps />} />
			<Route path='/dapps-qr' element={<DAppsQr />} />
			<Route path='/settings/about' element={<About />} />
			<Route path='/settings/rpc' element={<Rpc />} />
			<Route path='/create-pin' element={<PinCreate />} />
			<Route path='/confirm-pin' element={<PinConfirm />} />
			<Route path='/login-pin' element={<PinLogin />} />
			<Route path='/home' element={<Wallet />} />
			<Route path='/copy-phrase' element={<CopyPhrase />} />
			<Route path='/copy-key' element={<CopyKey />} />
			<Route path='/swap' element={<Swap />} />
			<Route path='/swap-coins' element={<SwapCoins />} />
			<Route path='/buy' element={<Buy />} />
			<Route path='/send-amount' element={<SendAmount />} />
			<Route path='/send-address' element={<SendAddress />} />
			<Route path='/send-preview' element={<SendPreview />} />
			<Route path='/activity' element={<Activity />} />
			<Route path='/home/assets-info' element={<AssetInfo />} />
			<Route path='/home/receive' element={<Receive />} />
			<Route path='/manage' element={<Manage />} />
			<Route path='/generate' element={<Generate />} />
		</Routes>
	);
};
