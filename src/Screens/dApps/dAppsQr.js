import React from 'react';
import QRCode from 'react-qr-code';
import { Header } from '../../Components/Header/Header';

export const DAppsQr = () => {
	return (
		<div className='screen'>
			<Header title='Scan Qr' />
			<div className='body content-center'>
				<QRCode
					size={215}
					viewBox={`0 0 155 155`}
					value='Coming soon!'
					bgColor='var(--white)'
					fgColor='transparent'
				/>
			</div>
		</div>
	);
};
