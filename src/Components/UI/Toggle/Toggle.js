import React from 'react';
import styles from './toggle.module.css';

export const Toggle = ({ id, onToggle, data, checked, dataFunc }) => {
	const handleChange = () => {
		onToggle(data, dataFunc);
	};

	return (
		<div className={styles.toggle}>
			<input
				type='checkbox'
				id={id}
				checked={checked}
				onChange={handleChange}
				className={styles.input}
			/>
			<label htmlFor={id} className={styles.switch} />
		</div>
	);
};
