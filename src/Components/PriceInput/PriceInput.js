import React, { useState } from 'react';
import styles from './priceInput.module.css';
import classNames from 'classnames/bind';
import { SvgIcon } from '../../Svgs';
import { useNavigate } from 'react-router-dom';
import { Par } from '../UI';

export const PriceInput = ({
	value,
	setValue,
	title,
	chooseItem,
	from,
	disabled,
	to,
}) => {
	const [isFocused, setIsFocused] = useState(false);
	// const [update, setUpdate] = React.useState({});
	const navigate = useNavigate();
	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleBlur = () => {
		setIsFocused(false);
	};

	// const onMax = () => {
	// 	setValue(chooseItem.market_data.balance);
	// 	setUpdate({});
	// };

	return (
		<div
			className={classNames(styles.box, isFocused ? styles.box_focused : '')}
		>
			<div className={styles.left}>
				<Par size='sm' color='light'>
					{from === 'swapOne' ? 'You sell' : 'You buy'}
				</Par>
				<div
					className={styles.row}
					style={disabled ? { pointerEvents: 'none' } : {}}
				>
					<div className={styles.inputWrap}>
						<input
							style={
								value.toString().length > 2
									? { width: value.toString().length + 'ch' }
									: { width: 49 }
							}
							onInput={(e) => setValue(e.target.value)}
							value={value}
							type='text'
							className={styles.input}
							placeholder='0.0'
							onFocus={handleFocus}
							onBlur={handleBlur}
						/>
					</div>
				</div>
			</div>
			<div className={styles.right}>
				{chooseItem !== null && (
					<div
						className='choose-item'
						onClick={() => navigate('/swap-coins', { state: { from, to: to } })}
					>
						<img src={chooseItem.image.thumb} alt={chooseItem.name} />
						<Par size='m' fw={500}>
							{chooseItem.symbol.toUpperCase()}
						</Par>
						<SvgIcon type='check' />
					</div>
				)}
			</div>
		</div>
	);
};
