import React from 'react';
import {
	CircleArrowButton,
	StepProgress,
	Title,
	Par,
} from '../../Components/UI';
import Img1 from '../../assets/images/btc.png';
import Img2 from '../../assets/images/eth.png';
import Img3 from '../../assets/images/bnb.png';
import Img4 from '../../assets/images/matic.png';
import Img5 from '../../assets/images/avax.png';
import styles from './start.module.css';

export const Step2 = () => {
	return (
		<div className='screen white-bg'>
			<div className='body'>
				<Title color='black' size='m'>
					A non-custodial &<br /> secure wallet for
				</Title>
			</div>
			<div className='body content-center'>
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
			</div>
			<div className='body-bottom'></div>
			<div className='body-bottom footer-step'>
				<StepProgress active={2} />
				<CircleArrowButton to='/step3' />
			</div>
		</div>
	);
};
