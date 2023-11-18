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
	}, [loadWallet]);

	return (
		<div
			className={cn(styles.item, {
				[styles.showItem]: show || first,
			})}
		>
			<div>
				{!load ? (
					<svg
						width={31}
						height={31}
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<circle
							cx={15.5}
							cy={15.5}
							r={15.5}
							fill='#006DEB'
							fillOpacity={0.1}
						/>
						<circle
							cx={15.5}
							cy={15.5}
							r={11.5}
							fill='#006DEB'
							fillOpacity={0.1}
						/>
						<circle cx={15.5} cy={15.5} r={7.5} fill='#006DEB' />
					</svg>
				) : (
					<svg
						width={31}
						height={31}
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<circle
							cx={15.5}
							cy={15.5}
							r={15.5}
							fill='#006DEB'
							fillOpacity={0.1}
						/>
						<circle
							cx={15.5}
							cy={15.5}
							r={11.5}
							fill='#006DEB'
							fillOpacity={0.1}
						/>
						<circle cx={15.5} cy={15.5} r={7.5} fill='#006DEB' />
					</svg>
				)}
			</div>
			<Par fw={500} size='m' center color='black'>
				{title}
			</Par>
		</div>
	);
};
