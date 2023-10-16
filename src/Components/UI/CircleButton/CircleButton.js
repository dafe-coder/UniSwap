import React from 'react';
import styles from './circleButton.module.css';
import cn from 'classnames';
import { Par } from '../Par/Par';
import { useNavigate } from 'react-router-dom';

export const CircleButton = ({
	title,
	icon,
	to,
	state = null,
	position = 'center',
}) => {
	const navigate = useNavigate();

	const goTo = () => {
		if (state !== null) {
			navigate(to, { state });
		} else {
			navigate(to);
		}
	};

	return (
		<div className={cn(styles.btn, styles[position])} onClick={goTo}>
			<Par size='sm' color='blue'>
				{title}
			</Par>
		</div>
	);
};
