import React, { useState } from 'react';
import styles from './ItemSelect.module.css';
import { SvgIcon } from '../../Svgs/SvgIcon';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentWallet } from '../../redux/slices/StorageSlice';
import { fetchDataWallet } from '../../redux/slices/WalletSlice';
import { setMenuChoose } from '../../redux/slices/SettingsSlice';

export const ItemSelectAccounts = ({
	title,
	subtitle,
	item,
	accountType,
	text,
	dropdownList,
	currentWallet,
	deleteFunc,
}) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [status, setStatus] = useState(false);
	const { dataUser, usePin } = useSelector((state) => state.storage);

	const itemClasses = classNames(styles.icon, status ? styles.opened : '');

	const handleClick = () => {
		if (dropdownList || text) {
			setStatus(!status);
		}
	};
	const deleteWallet = (name) => {
		deleteFunc(item.backup, name);
	};

	const chooseAccount = (e) => {
		const target = e.target;
		if (
			!target.closest(`.${styles.icon}`) &&
			!target.closest(`.${styles.dropdown}`)
		) {
			const wallet = dataUser.find((user) => user.name == item.name);
			dispatch(setCurrentWallet(item.name));
			dispatch(fetchDataWallet([wallet.phrase, true]));
			navigate('/home');
			dispatch(setMenuChoose(0));
		}
	};

	const goCopy = (to) => {
		if (usePin) {
			navigate('/login-pin', { state: { to: to } });
		} else {
			navigate(to);
		}
	};

	return (
		<div
			onClick={(e) => chooseAccount(e)}
			className={classNames(accountType ? styles.box_any : '', {
				[styles.activeBox]: item.name == currentWallet,
			})}
		>
			<div className={classNames(styles.trigger)}>
				<div className={styles.text}>
					<div className={styles.heading}>{subtitle}</div>
					<div className={styles.title}>{title}</div>
				</div>
				{dropdownList || text ? (
					<div className={itemClasses} onClick={handleClick}>
						<SvgIcon type='item-arrow' className='dropdown-icon' />
					</div>
				) : (
					''
				)}
			</div>
			{status && dropdownList ? (
				<div className={styles.dropdown}>
					{item.phrase !== '' ? (
						<div
							onClick={() => goCopy('/copy-phrase')}
							className={classNames(styles.dropdown_item)}
						>
							View Recovery Phrase
						</div>
					) : (
						<></>
					)}
					<div
						onClick={() => goCopy('/copy-key')}
						className={classNames(styles.dropdown_item)}
					>
						View Private Key
					</div>
					<div
						onClick={() => deleteWallet(item.name)}
						className={classNames(styles.dropdown_item)}
						style={{ color: 'var(--red)' }}
					>
						Delete wallet
					</div>
				</div>
			) : status && text ? (
				<div className={styles.content_text}>{text}</div>
			) : (
				''
			)}
		</div>
	);
};
