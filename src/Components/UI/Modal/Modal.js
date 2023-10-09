import ReactModal from 'react-modal';
import React from 'react';
import { SvgIcon } from '../../../Svgs';
import styles from './modal.module.css';
import { Title } from '../Title/Title';
import { Par } from '../Par/Par';

export const Modal = ({
	children,
	open,
	setOpen,
	title = '',
	par = '',
	fwTitle,
}) => {
	return (
		<ReactModal
			closeTimeoutMS={300}
			ariaHideApp={false}
			isOpen={open}
			onRequestClose={() => setOpen(false)}
		>
			{title !== '' && <Title fw={fwTitle}>{title}</Title>}
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
