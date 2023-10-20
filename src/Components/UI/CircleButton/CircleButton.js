import React from 'react';
import styles from './circleButton.module.css';
import { SvgMenu } from '../../../Svgs/SvgMenu';
import { Par } from '../Par/Par';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';

export const CircleButton = ({
	position = 'center',
	title,
	icon,
	to,
	state = null,
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
			<SvgMenu type={icon} />
			<Par fw={600} mt={8} size='sm' color='black'>
				{title}
			</Par>
		</div>
	);
};
