import React from 'react';
import styles from './input.module.css';
import { SvgIcon } from '../../../Svgs';

export const Input = ({
	placeholder,
	value,
	setValue,
	mt = 0,
	icon = '',
	iconPos = 'right',
	disabled = false,
	height = 33,
}) => {
	return (
		<div
			className={styles.inputWrap}
			style={{ marginTop: mt, pointerEvents: disabled ? 'none' : 'auto' }}
		>
			<input
				style={{ height: height }}
				value={value}
				onInput={(e) => setValue(e.target.value)}
				placeholder={placeholder}
				type='text'
				className={styles.input}
			/>
			{icon !== '' && (
				<SvgIcon className={styles['svg' + iconPos]} type={icon} />
			)}
		</div>
	);
};
