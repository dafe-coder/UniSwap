import React from 'react';
import cn from 'classnames';
import styles from './button.module.css';
import { Par } from '../UI';
import { SvgIcon } from '../../Svgs';
import { useNavigate } from 'react-router-dom';

export const ButtonBig = ({
	to = '',
	mb = 0,
	mt = 0,
	children,
	title,
	disabled = false,
}) => {
	const navigate = useNavigate();

	return (
		<div
			onClick={() => navigate(to)}
			style={{ marginBottom: mb, marginTop: mt }}
			className={cn(styles.btn, {
				[styles['disabled']]: disabled,
			})}
		>
			<span className={styles.title}>{title}</span>
			<Par>{children}</Par>
			<SvgIcon className={styles.arrow} type='arrow-right' />
		</div>
	);
};
