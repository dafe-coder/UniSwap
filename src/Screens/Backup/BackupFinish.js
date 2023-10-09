import React from 'react';
import cn from 'classnames';
import styles from './backup.module.css';
import { Header } from '../../Components/';
import { Par, Button } from '../../Components/UI/';

export const BackupFinish = () => {
	return (
		<div className='screen'>
			<div className='top-bg' />
			<div className='body'>
				<Header title='Finish backup' />
				<Par color='light'>
					Check you have made a correct backup by <br /> entering the
					corresponding words from your <br /> recovery phrase below.
				</Par>
				<div className={styles.bodyCheck}>
					<div className={styles.checkInput}>
						1.
						<input type='text' />
					</div>
					<div className={styles.checkInput}>
						1.
						<input type='text' />
					</div>
					<div className={styles.checkInput}>
						1.
						<input type='text' />
					</div>
					<div className={styles.checkInput}>
						1.
						<input type='text' />
					</div>
				</div>
			</div>
			<div className='body-bottom'>
				<Button to='/backup-success'>Done</Button>
			</div>
		</div>
	);
};
