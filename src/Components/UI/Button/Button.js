import React from 'react';
import cn from 'classnames';
import styles from './button.module.css';
import { useNavigate } from 'react-router-dom';

export const Button = ({
	children,
	variant = 'default',
	to = '',
	onClick = () => console.log('coming soon!'),
	size = 'm',
	mt = 0,
	mb = 0,
	state = null,
	style,
}) => {
	const navigate = useNavigate();

	const handleClick = (e) => {
		e.preventDefault();

		if (to !== '' && state != null) {
			navigate(to, { state: state });
		} else if (to !== '') {
			navigate(to);
		} else {
			onClick();
		}
	};

	return (
		<button
			style={{ marginTop: mt, marginBottom: mb, ...style }}
			onClick={(e) => handleClick(e)}
			className={cn(styles.btn, styles[variant], {
				[styles.sm]: size === 'sm',
			})}
		>
			{children}
		</button>
	);
};
