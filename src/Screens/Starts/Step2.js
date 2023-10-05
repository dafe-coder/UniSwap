import React from 'react';
import { Button, Title, Par } from '../../Components/UI';
import Img1 from '../../assets/images/btc.png';
import Img2 from '../../assets/images/eth.png';
import Img3 from '../../assets/images/bnb.png';
import Img4 from '../../assets/images/matic.png';
import Img5 from '../../assets/images/avax.png';
import styles from './start.module.css';

export const Step2 = () => {
	return (
		<div className='screen'>
			<div className='top-bg' />
			<div className='body'>
				<Title>A non-custodial & secure wallet for</Title>
			</div>
			<div className='body-bottom'>
				<div className={styles.info}>
					<div className={styles.logoCoinWrap}>
						<img className={styles.logoCoin} src={Img1} alt='btc' />
						<img className={styles.logoCoin} src={Img2} alt='eth' />
						<img className={styles.logoCoin} src={Img3} alt='bnb' />
						<img className={styles.logoCoin} src={Img4} alt='matic' />
						<img className={styles.logoCoin} src={Img5} alt='avax' />
					</div>
					<Par center size='sm' color='light' mt={14}>
						and many more
					</Par>
				</div>
				<Button variant='inline' to='/start'>
					Skip
				</Button>
				<Button to='/step3'>Continue</Button>
			</div>
		</div>
	);
};
