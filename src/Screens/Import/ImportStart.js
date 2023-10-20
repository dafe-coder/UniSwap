import React from 'react';
import { Title } from '../../Components/UI';
import { ButtonBig } from '../../Components';
import Img1 from '../../assets/images/coins/1.png';
import Img2 from '../../assets/images/coins/2.png';
import Img3 from '../../assets/images/coins/3.png';
import Img4 from '../../assets/images/coins/4.png';
import Img5 from '../../assets/images/coins/5.png';
import styles from './import.module.css';
import { useSelector } from 'react-redux';

export const ImportStart = () => {
	const { backup } = useSelector((state) => state.storage);

	return (
		<div className='screen grid-bg'>
			<div className='body'>
				<Title size='m'>Follow these steps to import your wallet</Title>
				<ButtonBig
					to='/settings/backup'
					mt={30}
					title='Create a backup for you current Mew Wallet'
				>
					This step is required, even if your current Mew wallet is empty, for
					security.
				</ButtonBig>
				<ButtonBig
					disabled={!backup}
					bg='bg2'
					to='/import-data'
					mt={30}
					title='Import your other wallet using a recovery phrase'
				>
					<div className={styles.imageIconWrap}>
						<div className={styles.imgIcon}>
							<img src={Img1} alt='eth' />
						</div>
						<div className={styles.imgIcon}>
							<img src={Img2} alt='btc' />
						</div>
						<div className={styles.imgIcon}>
							<img src={Img3} alt='bnb' />
						</div>
						<div className={styles.imgIcon}>
							<img src={Img4} alt='matic' />
						</div>
						<div className={styles.imgIcon}>
							<img src={Img5} alt='avax' />
						</div>
					</div>
				</ButtonBig>
			</div>
		</div>
	);
};
