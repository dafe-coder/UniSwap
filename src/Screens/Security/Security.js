import React from 'react';
import { Button } from '../../Components/UI';
import { Menu, Header } from '../../Components';
import styles from './security.module.css';

export const Security = () => {
	return (
		<div className='screen'>
			<div className='bg-m-light'></div>
			<Header title='Security' />
			<div className='body content-center'>
				<div className={styles.card}>
					<Button to='/login-pin' state={{ to: '/change-pass' }}>
						Change my PIN code
					</Button>
					<Button style={{ pointerEvents: 'none' }} mt={8} variant='outlined'>
						Authentication & PIN code
					</Button>
				</div>
			</div>
			<Menu />
		</div>
	);
};
