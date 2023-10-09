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
			<Route path='/settings' element={<Settings />} />
			<Route path='/wallets' element={<AccountWallets />} />
			<Route path='/import-start' element={<ImportStart />} />
			<Route path='/backup' element={<Backup />} />
			<Route path='/backup-start' element={<BackupStart />} />
			<Route path='/backup-phrase' element={<BackupPhrase />} />
			<Route path='/backup-finish' element={<BackupFinish />} />
			<Route path='/backup-success' element={<BackupSuccess />} />
			<Route path='/security' element={<Security />} />
			<Route path='/notifications' element={<Notifications />} />
			<Route path='/dapps' element={<DApps />} />
			<Route path='/dapps-qr' element={<DAppsQr />} />
			<Route path='/about' element={<About />} />
			<Route path='/rpc' element={<Rpc />} />
		</Routes>
	);
};
