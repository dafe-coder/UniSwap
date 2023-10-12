import React from 'react';
import styles from './textRowsBlock.module.css';
import { NavSwitch } from '../NavSwitch/NavSwitch';
import { Par } from '../UI';

const texts = [
	{
		left: 'Transaction Fee',
		right: '0.34 USD',
	},
	{
		left: 'Reception time',
		right: '⚡ Instant (0 to 30 minutes)',
	},
];
const texts2 = [
	{
		left: 'Transaction Fee',
		right: '0.14 USD',
	},
	{
		left: 'Reception time',
		right: '🌱 2 hours in average',
	},
];
export const TextRowsBlock = ({ style }) => {
	const [textRows, setTextRows] = React.useState(texts);
	const [showText, setShowText] = React.useState(true);

	React.useEffect(() => {
		if (showText) {
			setTextRows(texts);
		} else {
			setTextRows(texts2);
		}
	}, [showText]);
	return (
		<div className={styles.block} style={style}>
			<NavSwitch
				size='sm'
				setActive={setShowText}
				leftText='Fast'
				rightText='Standart'
				active={showText}
				styleWrap={{ position: 'absolute', right: 16, top: 16 }}
			/>
			{textRows.map((item, index) => (
				<div className={styles.row} key={index}>
					<Par size='m' color='light' mb={6}>
						{item.left}
					</Par>
					<Par size='m' fw={600}>
						{item.right}
					</Par>
				</div>
			))}
		</div>
	);
};
