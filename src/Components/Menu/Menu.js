import React from 'react';
import cn from 'classnames';
import styles from './menu.module.css';
import { SvgMenu } from '../../Svgs/SvgMenu';
import { useNavigate, useLocation } from 'react-router-dom';

export const Menu = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const menus = [
		{
			icon: 'home',
			to: '/home',
		},
		{
			icon: 'buy-crypto',
			to: '/buy',
		},
		{
			icon: 'swap',
			to: '/swap',
		},
		{
			icon: 'settings',
			to: '/settings',
		},
	];

	return (
		<div className={styles.menu}>
			{menus.map((item) => (
				<div
					key={item.icon}
					className={cn(styles.item, {
						[styles['active']]: location.pathname.includes(item.to),
					})}
					onClick={() => navigate(item.to)}
				>
					<SvgMenu
						type={item.icon}
						fill={
							location.pathname.includes(item.to)
								? 'var(--accent)'
								: 'var(--black-text)'
						}
					/>
				</div>
			))}
		</div>
	);
};
