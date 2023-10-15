import React from 'react';
import styles from './circleArrowButton.module.css';
import { SvgIcon } from '../../../Svgs';
import { useNavigate } from 'react-router-dom';

export const CircleArrowButton = ({ to }) => {
	const navigate = useNavigate();

	return (
		<div className={styles.btn} onClick={() => navigate(to)}>
			<SvgIcon type='chevron-right' />
		</div>
	);
};
