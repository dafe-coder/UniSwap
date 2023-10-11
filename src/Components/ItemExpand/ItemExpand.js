import React from 'react';
import cn from 'classnames';
import styles from './itemExpand.module.css';
import { Par, Title } from '../UI';
import { SvgIcon } from '../../Svgs';

export const ItemExpand = ({
	title,
	titleSize = 'sm',
	children,
	caretFill,
	fwTitle = 600,
	items = false,
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
					<SvgIcon fill={caretFill} type='caret' />
				</div>
				<div
					style={!items ? { padding: 0 } : {}}
					onClick={(e) => onChoose(e)}
					className={cn(styles.body, {
						[styles.show]: showBody,
					})}
				>
					{items ? <>{children}</> : <Par>{children}</Par>}
				</div>
			</div>
		</>
	);
};
