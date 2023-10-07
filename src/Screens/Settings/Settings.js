import React from 'react';
import { MenuSettings } from '../../Components';

export const Settings = () => {
	const list = [
		{
			title: 'Wallets',
			to: '/wallets',
			icon: 'wallet',
		},
		{
			title: 'Import existing wallet',
			to: '/import-start',
			icon: 'import',
		},
		{
			title: 'Backup',
			to: '/backup',
			icon: 'backup',
			status: true,
		},
		{
			title: 'Security',
			to: '/settings',
			icon: 'security',
		},
		{
			title: 'Notifications',
			to: '/notifications',
			icon: 'bell',
		},
		{
			title: 'RPC Node ',
			to: '/rpc',
			icon: 'rpc',
		},
		{
			title: 'Wallet Connect',
			to: '/dapps',
			icon: 'connect',
		},
		{
			title: 'About',
			to: '/about',
			icon: 'about',
		},
	];
	return (
		<div className='screen'>
			<div className='bottom-bg' />
			<div className='center-bg' />
			<div className='body' style={{ margin: 0 }}>
				<MenuSettings list={list} />
			</div>
		</div>
	);
};
