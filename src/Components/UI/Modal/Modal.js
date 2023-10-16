import ReactModal from 'react-modal';
import React from 'react';
import { SvgIcon } from '../../../Svgs';
import styles from './modal.module.css';
import { Par } from '../Par/Par';

export const Modal = ({
	children,
	open,
	setOpen,
	title = '',
	par = '',
	fwTitle = 500,
	warning = false,
}) => {
	return (
		<ReactModal
			closeTimeoutMS={300}
			ariaHideApp={false}
			isOpen={open}
			onRequestClose={() => setOpen(false)}
		>
			{title !== '' && (
				<Par color={warning ? 'red' : ''} fw={fwTitle} size='m' center>
					{title}
				</Par>
			)}
			{par !== '' && (
				<Par color='light' mt={6} center={true}>
					{par}
				</Par>
			)}
			<div className={styles.closeBtn} onClick={() => setOpen(false)}>
				<SvgIcon type='close' />
			</div>
			{children}
		</ReactModal>
	);
};
