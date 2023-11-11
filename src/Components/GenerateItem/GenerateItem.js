import React from 'react';
import cn from 'classnames';
import styles from './generateItem.module.css';
import { Par } from '../UI';

export const GenerateItem = ({
	first = false,
	loadWallet = true,
	delay = 10,
	title,
}) => {
	const [showID, setShowID] = React.useState(null);
	const [show, setShow] = React.useState(false);
	const [load, setLoad] = React.useState(true);
	const [loadID, setLoadID] = React.useState(null);

	React.useEffect(() => {
		if (!loadWallet) {
			setShowID(
				setTimeout(() => {
					setShow(true);
				}, delay)
			);
		}

		return () => clearTimeout(showID);
	}, [loadWallet]);

	React.useEffect(() => {
		if (!loadWallet && !first) {
			setLoadID(
				setTimeout(() => {
					setLoad(false);
				}, delay + 3000)
			);
		} else if (!loadWallet && first) {
			setLoadID(
				setTimeout(() => {
					setLoad(false);
				}, 1000)
			);
		}
		return () => clearTimeout(loadID);
	}, [loadWallet, first]);

	return (
		<div
			className={cn(styles.item, {
				[styles.showItem]: show || first,
			})}
		>
			<div>
				{!load ? (
					<div className={cn(styles.circleWrap)}>
						<div className={cn(styles.circle, styles.circle1)} />
						<div className={cn(styles.circle, styles.circle2)} />
						<div className={cn(styles.circle, styles.circle3)} />
					</div>
				) : (
					<div className={cn(styles.circleWrap, styles.animScale)}>
						<div className={cn(styles.circle, styles.circle1)} />
						<div className={cn(styles.circle, styles.circle2)} />
						<div className={cn(styles.circle, styles.circle3)} />
					</div>
				)}
			</div>
			<Par fw={500} size='m' center color={!load ? 'white' : 'white'}>
				{title}
			</Par>
		</div>
	);
};
