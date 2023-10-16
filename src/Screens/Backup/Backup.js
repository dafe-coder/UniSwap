import React from 'react';
import { Button } from '../../Components/UI';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Menu, Header } from '../../Components';
import BackupImage from '../../assets/images/backup.png';

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
			<Header title='Manual backup' />
			<div className='body content-center'>
				<img src={BackupImage} alt='backup' />
				<Button onClick={goBackUp}>Perform manual backup</Button>
			</div>
			<Menu />
		</div>
	);
};
