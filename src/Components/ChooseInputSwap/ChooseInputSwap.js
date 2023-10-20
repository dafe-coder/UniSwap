import React from 'react';
import styles from './chooseInputSwap.module.css';
import { PriceInput } from '../PriceInput/PriceInput';
import { ItemLoader } from '../Loaders/ItemLoader';
import { SvgIcon } from '../../Svgs';

export const ChooseInputSwap = ({
	setValueOne,
	valueOne,
	valueTwo,
	chooseItemOne,
	chooseItemTwo,
	onSwap,
}) => {
	return (
		<div className={styles.block}>
			<SvgIcon className={styles.svgPol} type='swap-polygon' />
			{chooseItemOne !== null ? (
				<PriceInput
					setValue={setValueOne}
					value={valueOne}
					from='swapOne'
					chooseItem={chooseItemOne}
					title='You sell'
					to='/swap'
				/>
			) : (
				<ItemLoader px={80} />
			)}
			<div
				className={styles.action}
				onClick={onSwap}
				style={{ cursor: 'pointer' }}
			>
				<SvgIcon type='change' />
			</div>
			{chooseItemTwo !== null ? (
				<PriceInput
					disabled
					value={valueTwo}
					from='swapTwo'
					chooseItem={chooseItemTwo}
					title='You Buy'
					to='/swap'
				/>
			) : (
				<ItemLoader px={80} />
			)}
			<div className={styles.boxBg}></div>
		</div>
	);
};
