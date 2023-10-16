import React from 'react';
import { SvgIcon } from '../../../Svgs';
import classNames from 'classnames/';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import styles from './checkbox.module.css';
import { Par } from '../Par/Par';

export const Checkbox = ({
	type,
	name,
	variant,
	id,
	label,
	tooltip,
	subtext,
	onChange,
	onChangeBoolean,
	item,
	activeItem,
}) => {
	const handleInputChange = () => {
		if (onChangeBoolean) {
			onChangeBoolean(!item);
		} else {
			onChange(item);
		}
	};

	const variants = {
		boxed: styles.outlined,
		boxed_inline: styles.inline,
		agreement: styles.agreement,
	};

	const inputClasses = classNames(
		styles.checkbox,
		variants[variant],
		type === 'radio' ? styles.radio : ''
	);

	return (
		<>
			<div className={inputClasses}>
				<input
					type={type}
					className={styles.input}
					id={id}
					name={name}
					checked={activeItem === item}
					onChange={handleInputChange}
				/>
				{typeof activeItem === 'string' && activeItem === item && (
					<SvgIcon type='circle-arr' />
				)}
				{typeof activeItem === 'boolean' && (
					<label htmlFor={id} className={styles.label}>
						<Par color='white'>{label}</Par>
					</label>
				)}
				{tooltip && (
					<>
						<div className={styles.tooltip} data-tooltip-content={tooltip}>
							<SvgIcon type='question-circle' />
						</div>
						<Tooltip anchorSelect='[data-tooltip-content]' />
					</>
				)}
			</div>

			{/* {subtext && isChecked ? (
				<div className={styles.subtext}>{subtext}</div>
			) : (
				''
			)} */}
		</>
	);
};
