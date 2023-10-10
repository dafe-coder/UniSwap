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
} from '../Screens';
import { Routes, Route } from 'react-router-dom';

export const Navigation = () => {
	return (
		<Routes>
			<Route path='/' element={<Step1 />} />
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
			<Route path='/settings/dapps-qr' element={<DAppsQr />} />
			<Route path='/settings/about' element={<About />} />
			<Route path='/settings/rpc' element={<Rpc />} />
			<Route path='/create-pin' element={<PinCreate />} />
			<Route path='/confirm-pin' element={<PinConfirm />} />
			<Route path='/home' element={<Wallet />} />
		</Routes>
	);
};
