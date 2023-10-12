import React from 'react';
import { Button } from '../../Components/UI';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Menu } from '../../Components';

export const Backup = () => {
	const { usePin } = useSelector((state) => state.storage);
	const navigate = useNavigate();

	const goBackUp = () => {
		if (usePin) {
			navigate('/login-pin', { state: { to: '/settings/backup-start' } });
		} else {
			navigate('/settings/backup-start');
		}
	};

	return (
		<div className='screen'>
			<div className='bottom-bg' />
			<div className='body content-center'>
				<Button onClick={goBackUp}>Perform manual backup</Button>
			</div>
			<Menu />
		</div>
	);
};
