import React from 'react';
import cn from 'classnames';
import styles from './itemExpand.module.css';
import { Par } from '../UI';
import { SvgIcon } from '../../Svgs';

export const ItemExpand = ({ title, children, caretFill }) => {
	const [showBody, setShowBody] = React.useState(false);

	return (
		<div className={styles.item}>
			<div className={styles.header} onClick={() => setShowBody(!showBody)}>
				<Par size='m' fw={600}>
					{title}
				</Par>
				<SvgIcon fill={caretFill} type='caret' />
			</div>
			<div
				className={cn(styles.body, {
					[styles.show]: showBody,
				})}
			>
				<Par
					fw={500}
					style={{ lineHeight: '20px', letterSpacing: '0.1px' }}
					color='light'
				>
					{children}
				</Par>
			</div>
		</div>
	);
};
