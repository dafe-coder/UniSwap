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
						width={44}
						height={44}
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<circle cx={22} cy={22} r={22} fill='#fff' fillOpacity={0.08} />
						<circle cx={22} cy={22} r={18.674} fill='#fff' fillOpacity={0.1} />
						<circle
							cx={21.936}
							cy={21.936}
							r={16.564}
							fill='#fff'
							fillOpacity={0.16}
						/>
						<circle cx={22} cy={22} r={14.198} fill='#fff' />
						<rect
							x={17.012}
							y={17.012}
							width={9.977}
							height={9.849}
							rx={1.535}
							fill='#3773F5'
						/>
					</svg>
				) : (
					<svg
						width={44}
						height={44}
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<circle cx={22} cy={22} r={22} fill='#fff' fillOpacity={0.08} />
						<circle cx={22} cy={22} r={18.674} fill='#fff' fillOpacity={0.1} />
						<circle
							cx={21.936}
							cy={21.936}
							r={16.564}
							fill='#fff'
							fillOpacity={0.16}
						/>
						<circle cx={22} cy={22} r={14.198} fill='#fff' />
						<rect
							x={17.012}
							y={17.012}
							width={9.977}
							height={9.849}
							rx={1.535}
							fill='#3773F5'
						/>
					</svg>
				)}
			</div>
			<Par fw={500} size='m' center color={!load ? 'white' : 'white'}>
				{title}
			</Par>
		</div>
	);
};
