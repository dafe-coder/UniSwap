import React from 'react';
import cn from 'classnames';
import { Button } from '../../Components/UI';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Menu } from '../../Components';
import Img from '../../assets/images/backup.png';
import styles from './backup.module.css';
import { Header } from '../../Components/Header/Header';

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
			<div className={cn('bg-m', styles.bg)}></div>
			<div className='body content-center'>
				<div className={styles.card}>
					<img src={Img} alt='backup' />
				</div>
				<div
					style={{
						width: '100%',
						padding: '0px 0 70px',
						marginTop: 40,
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<Button size='sm' onClick={goBackUp}>
						Perform manual backup
					</Button>
				</div>
			</div>
			<Menu />
		</div>
	);
};
