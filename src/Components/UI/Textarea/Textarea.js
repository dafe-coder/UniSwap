import React from 'react';
import styles from './textarea.module.css';

export const Textarea = ({
	height = 53,
	style,
	placeholder,
	value,
	setValue,
}) => {
	return (
		<div className={styles.inputWrap} style={style}>
			<textarea
				style={{ height: height }}
				value={value}
				onInput={(e) => setValue(e.target.value)}
				placeholder={placeholder}
				type='text'
				className={styles.input}
			/>
		</div>
	);
};
