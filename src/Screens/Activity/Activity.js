import React from 'react';
import styles from './activity.module.css';
import { Menu, NavSwitch } from '../../Components';
import classNames from 'classnames';
import { Button, Modal } from '../../Components/UI';
import { useSelector } from 'react-redux';
import fixNum from '../../func.wallet/fixNum';
import { SvgIcon } from '../../Svgs';

export const Activity = () => {
	const { dataWallet } = useSelector((state) => state.wallet);
	const [showModal, setShowModal] = React.useState(false);
	const menuItems = [
		{
			title: 'Copy Address',
			icon: 'copy',
		},
		{
			title: 'View Recovery Phrase',
		},
		{
			title: 'View Private Key',
		},
		{
			title: 'Lock',
			icon: 'lock',
			color: 'var(--red)',
		},
	];
	const [transactionList, setTransactionList] = React.useState([]);

	React.useEffect(() => {
		if (dataWallet !== null) {
			let filtered = dataWallet.transactions.filter(
				(item) =>
					item.attributes.status !== 'failed' && item.attributes.transfers[0]
			);

			setTransactionList(filtered);
		}
	}, [dataWallet]);

	const variants = {
		swap: styles.swap,
		receive: styles.receive,
		send: styles.send,
	};

	const onClear = () => {
		setShowModal(false);
		setTransactionList([]);
	};

	return (
		<div className='screen'>
			<div className='body'>
				<div className='page-header'>
					<div
						onClick={() => setShowModal(true)}
						className={classNames(
							styles.action,
							!transactionList.length ? styles.disabled : ''
						)}
					>
						<SvgIcon type='remove' />
					</div>
					<NavSwitch leftText='Wallet' rightText='Activity' />
					{/* <SwipeToggle
						title1='Wallet'
						title2='Activity'
						active={[2, 1]}
						type='buttons'
					/>
					<MenuActions items={menuItems} /> */}
				</div>
				<div
					style={{ height: '50%' }}
					className={classNames(
						styles.list,
						!transactionList.length ? styles.list_empty : ''
					)}
				>
					{transactionList.length >= 1 ? (
						transactionList.map((item, i) => (
							<div
								className={classNames(
									styles.item,
									variants[
										item.attributes.operation_type === 'trade'
											? 'swap'
											: item.attributes.operation_type === 'send'
											? 'send'
											: 'receive'
									]
								)}
								key={i}
							>
								<SvgIcon type={item.type} />
								<div className={styles.inner}>
									<span className={styles.item_title}>
										{item.attributes.operation_type === 'trade'
											? 'Swap'
											: item.attributes.operation_type === 'send'
											? 'Send'
											: 'Receive'}
									</span>
									<span className={styles.item_subtitle}>
										From:
										{' ' + item.attributes.transfers[0].sender &&
											item.attributes.transfers[0].sender.slice(0, 5) +
												'...' +
												item.attributes.transfers[0].sender.slice(-5)}
									</span>
								</div>
								<div className={styles.inner_right}>
									<span className={styles.item_title}>
										$ {fixNum(item.attributes.transfers[0].value)}
									</span>
									<span className={styles.item_subtitle}>
										{item.attributes.mined_at.slice(0, 10).replace(/-/gi, '.')}
									</span>
								</div>
							</div>
						))
					) : (
						<div className={styles.empty}>
							<span>
								Your activity will
								<br /> appear here!
							</span>
						</div>
					)}
				</div>
			</div>
			<Modal open={showModal} setOpen={setShowModal} title='Clear history'>
				<div className='btns' style={{ marginTop: 20 }}>
					<Button
						style={{ marginBottom: 0 }}
						variant='default'
						onClick={onClear}
					>
						Clear
					</Button>
					<Button variant='outlined' onClick={() => setShowModal(false)}>
						Cancel
					</Button>
				</div>
			</Modal>
			<Menu />
		</div>
	);
};
