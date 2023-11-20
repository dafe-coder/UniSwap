import React from 'react';
import { Button, Par } from '../../Components/UI';
import { SvgIcon } from '../../Svgs';
import styles from './backup.module.css';

export const BackupSuccess = () => {
	return (
		<div className='screen'>
			<div className='bg-m-light'></div>
			<div className='body content-center'>
				<div
					className={styles.card}
					style={{
						display: 'flex',
						justifyContent: 'center',
						flexDirection: 'column',
						alignItems: 'center',
						padding: 40,
					}}
				>
					<SvgIcon type='success' />
					<Par fw={600} mt={30} color='black' size='m'>
						Manual backup successful
					</Par>
				</div>
			</div>
			<div className='bod-bottom'>
				<Button to='/settings'>Done</Button>
			</div>
		</div>
	);
};
