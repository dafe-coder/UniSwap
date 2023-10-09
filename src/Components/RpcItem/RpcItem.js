import React from 'react';
import styles from './rpcItem.module.css';
import cn from 'classnames';
import { Par } from '../UI';
import { SvgIcon } from '../../Svgs';

export const RpcItem = ({ title, info, active, onChoose }) => {
	return (
		<div className={styles.item} onClick={() => onChoose(title)}>
			<Par size='sm' fw={600} mb={10} className={styles.title}>
				{title}
			</Par>
			<div className={styles.itemBottom}>
				<Par
					className={cn(styles.dotsPar, styles[info.status])}
					color={info.status}
				>
					{info.ms}
				</Par>
				<Par color='light'>{info.height}</Par>
			</div>
			<SvgIcon
				className={cn(styles.circle, {
					[styles.show]: active === title,
				})}
				type='circle-arrow'
			/>
		</div>
	);
};
