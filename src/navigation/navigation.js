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
		</Routes>
	);
};
