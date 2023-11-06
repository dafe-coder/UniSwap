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
					<svg
						className={styles.circleAnim}
						width='29'
						height='29'
						viewBox='0 0 29 29'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<rect
							y='14.1421'
							width='20'
							height='20'
							transform='rotate(-45 0 14.1421)'
							fill='#F4C714'
						/>
					</svg>
				) : (
					<svg
						className={styles.circleAnim}
						width='29'
						height='29'
						viewBox='0 0 29 29'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<rect
							y='14.1421'
							width='20'
							height='20'
							transform='rotate(-45 0 14.1421)'
							fill='#F4C714'
						/>
					</svg>
				)}
			</div>
			<Par fw={500} size='m' center color={!load ? 'green' : 'white'}>
				{title}
			</Par>
		</div>
	);
};
