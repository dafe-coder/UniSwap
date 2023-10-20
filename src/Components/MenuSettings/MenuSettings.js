import React from 'react';
import styles from './menuSettings.module.css';
import { SvgMenu } from '../../Svgs/SvgMenu';
import { Par } from '../UI';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const MenuSettings = ({ list }) => {
	const navigate = useNavigate();
	const { backup } = useSelector((state) => state.storage);

	return (
		<div className={styles.list}>
			{list.map((item) => (
				<div
					key={item.to}
					className={styles.item}
					onClick={() => navigate(item.to)}
				>
					<div className={styles.itemInfo}>
						<SvgMenu type={item.icon} />
						<Par fw={600} size='m'>
							{item.title}
						</Par>
					</div>
					{item.status && <SvgMenu type={backup ? 'success' : 'error'} />}
				</div>
			))}
		</div>
	);
};
