import React from 'react';
import { Button } from '../../Components/UI';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Menu } from '../../Components';
import { Header } from '../../Components/Header/Header';
import BgImage from '../../assets/images/backup-bg.png';

export const Backup = () => {
	const { usePin } = useSelector((state) => state.storage);
	const navigate = useNavigate();

	const backupBg = {
		position: 'absolute',
		width: '100%',
		top: 70,
		marginLeft: -30,
		marginRight: -30,
		maxWidth: '100vw',
		display: 'flex',
	};

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
			<div className='body content-center' style={{ paddingTop: 360 }}>
				<img style={backupBg} src={BgImage} alt='bg' />
				<Button onClick={goBackUp}>Perform manual backup</Button>
			</div>
			<Menu />
		</div>
	);
};
