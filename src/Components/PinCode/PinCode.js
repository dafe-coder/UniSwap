import React from 'react';
import classNames from 'classnames';
import styles from './pinCode.module.css';
import { useDispatch } from 'react-redux';
import {
	setPasswordInit,
	setPasswordConfirm,
} from '../../redux/slices/WalletSlice';

export const PinCode = ({ styleWrap, className, name, clear }) => {
	const dispatch = useDispatch();
	const inputClasses = classNames(styles.digits, className);
	const formRef = React.useRef(null);
	const [passwordValue, setPasswordValue] = React.useState('');
	const hasOnlyDigits = (v) => /^\d+$/.test(v);

	React.useEffect(() => {
		if (passwordValue.length && name === 'create') {
			dispatch(setPasswordInit(passwordValue));
		} else if (passwordValue.length && name === 'confirm') {
			dispatch(setPasswordConfirm(passwordValue));
		} else if (passwordValue.length && name === 'login') {
			dispatch(setPasswordInit(passwordValue));
		}
	}, [passwordValue, dispatch, name]);

	React.useEffect(() => {
		if (clear) {
			setPasswordValue('');
			const form = formRef?.current;
			form.querySelectorAll('input').forEach((item) => (item.value = ''));
			form.querySelectorAll('input')[0].focus();
		}
	}, [clear]);

	function handleEnter(event) {
		event.preventDefault();
		const form = formRef?.current;
		const index = [...form].indexOf(event.target);
		if (event.target.value.length && hasOnlyDigits(event.target.value)) {
			form[index + 1]?.focus();
			setPasswordValue((state) => state + event.target.value);
		} else {
			event.target.value = '';
		}
	}

	function handleEnterKeyboard(event) {
		if (event.key === 'Backspace') {
			const form = formRef?.current;
			const index = [...form].indexOf(event.target);
			event.target.value = '';
			form[index - 1]?.focus();
			setPasswordValue((state) =>
				state
					.split('')
					.filter((_, i) => i !== index && i !== index - 1)
					.join('')
			);
		}
	}
	return (
		<div style={styleWrap} className={classNames(styles.wrap, inputClasses)}>
			<form ref={formRef} className={styles.inner}>
				<div className={styles.box}>
					<input
						placeholder=' '
						autoFocus
						type='password'
						className={styles.input}
						id={name + `01`}
						name={name}
						maxLength='1'
						onChange={(e) => handleEnter(e)}
						onKeyDown={(e) => handleEnterKeyboard(e)}
					/>
					<label className={styles.label} htmlFor={name + `01`}></label>
				</div>
				<div className={styles.box}>
					<input
						placeholder=' '
						type='password'
						className={styles.input}
						id={name + `02`}
						name={name}
						maxLength='1'
						onChange={(e) => handleEnter(e)}
						onKeyDown={(e) => handleEnterKeyboard(e)}
					/>
					<label className={styles.label} htmlFor={name + `02`}></label>
				</div>
				<div className={styles.box}>
					<input
						placeholder=' '
						type='password'
						className={styles.input}
						id={name + `03`}
						name={name}
						maxLength='1'
						onChange={(e) => handleEnter(e)}
						onKeyDown={(e) => handleEnterKeyboard(e)}
					/>
					<label className={styles.label} htmlFor={name + `03`}></label>
				</div>
				<div className={styles.box}>
					<input
						placeholder=' '
						type='password'
						className={styles.input}
						id={name + `04`}
						name={name}
						maxLength='1'
						onChange={(e) => handleEnter(e)}
						onKeyDown={(e) => handleEnterKeyboard(e)}
					/>
					<label className={styles.label} htmlFor={name + `04`}></label>
				</div>
				<div className={styles.box}>
					<input
						placeholder=' '
						type='password'
						className={styles.input}
						id={name + `05`}
						name={name}
						maxLength='1'
						onChange={(e) => handleEnter(e)}
						onKeyDown={(e) => handleEnterKeyboard(e)}
					/>
					<label className={styles.label} htmlFor={name + `05`}></label>
				</div>
				<div className={styles.box}>
					<input
						placeholder=' '
						type='password'
						className={styles.input}
						id={name + `06`}
						name={name}
						maxLength='1'
						onChange={(e) => handleEnter(e)}
						onKeyDown={(e) => handleEnterKeyboard(e)}
					/>
					<label className={styles.label} htmlFor={name + `06`}></label>
				</div>
			</form>
		</div>
	);
};
