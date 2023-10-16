import React from 'react';
import styles from './header.module.css';
import { Title } from '../UI';
import { SvgIcon } from '../../Svgs';
import { useNavigate } from 'react-router-dom';

export const Header = ({ title, back = true, children, mtChild = 15 }) => {
	const navigate = useNavigate();

	return (
		<div className={styles.header}>
			<div className={styles.headerTop}>
				<Title fw={600}>{title}</Title>
				{back && (
					<button onClick={() => navigate(-1)}>
						<SvgIcon type='close' />
					</button>
				)}
			</div>
			{children && <div style={{ marginTop: mtChild }}>{children}</div>}
		</div>
	);
};
