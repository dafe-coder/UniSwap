import React from 'react';
import { Button } from '../../Components/UI';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Menu } from '../../Components';
import Img from '../../assets/images/backup.png';

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
		<div className='screen' style={{ padding: 0 }}>
			<div className='body content-center'>
				<img
					style={{
						width: '100%',
						objectFit: 'cover',
					}}
					src={Img}
					alt='backup'
				/>
				<div style={{ width: '100%', padding: '0 30px', marginTop: 40 }}>
					<Button onClick={goBackUp}>Perform manual backup</Button>
				</div>
			</div>
			<Menu />
		</div>
	);
};
