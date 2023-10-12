import React from 'react';
import cn from 'classnames';
import styles from './itemExpand.module.css';
import { Par, Title } from '../UI';
import { SvgIcon } from '../../Svgs';

export const ItemExpand = ({
	title,
	ownTitle = false,
	titleSize = 'sm',
	children,
	caretFill,
	fwTitle = 600,
	items = false,
	posRight = false,
}) => {
	const [showBody, setShowBody] = React.useState(false);

	const onChoose = (e) => {
		if (!e.target.classList.value.includes(styles.body)) {
			setShowBody(false);
		}
	};

	return (
		<>
			<div
				onClick={() => setShowBody(false)}
				className={cn(styles.overflow, {
					[styles.showOverflow]: showBody,
				})}
			></div>
			<div className={styles.item}>
				<div className={styles.header} onClick={() => setShowBody(!showBody)}>
					{titleSize === 'sm' ? (
						<Par size='m' fw={fwTitle}>
							{title}
						</Par>
					) : (
						<Title fw={fwTitle} size={titleSize}>
							{title}
						</Title>
					)}
					{!ownTitle && (
						<SvgIcon style={{ marginLeft: 8 }} fill={caretFill} type='caret' />
					)}
				</div>
				<div
					style={!items ? { padding: 16 } : { padding: '14px 8px' }}
					onClick={(e) => onChoose(e)}
					className={cn(styles.body, {
						[styles.show]: showBody,
						[styles.right]: posRight,
					})}
				>
					{items ? <>{children}</> : <Par>{children}</Par>}
				</div>
			</div>
		</>
	);
};
