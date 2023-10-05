import React from 'react';
import styles from './textarea.module.css';

export const Textarea = ({ placeholder, value, setValue }) => {
	return (
		<div className={styles.inputWrap}>
			<textarea
				value={value}
				onInput={(e) => setValue(e.target.value)}
				placeholder={placeholder}
				type='text'
				className={styles.input}
			/>
		</div>
	);
};
