import React from 'react';
import styles from './circleButton.module.css';
import { SvgMenu } from '../../../Svgs/SvgMenu';
import { Par } from '../Par/Par';
import { useNavigate } from 'react-router-dom';

export const CircleButton = ({ title, icon, to, state = null }) => {
	const navigate = useNavigate();

	const goTo = () => {
		if (state !== null) {
			navigate(to, { state });
		} else {
			navigate(to);
		}
	};

	return (
		<div className={styles.btn} onClick={goTo}>
			<div className={styles.circle}>
				<SvgMenu type={icon} />
			</div>
			<Par mt={8} size='sm' color='light'>
				{title}
			</Par>
		</div>
	);
};
