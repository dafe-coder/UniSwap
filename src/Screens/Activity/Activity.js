import React from 'react';
import styles from './activity.module.css';
import { Menu, NavSwitch } from '../../Components';
import classNames from 'classnames';
import { Button, Modal, Title } from '../../Components/UI';
import { useSelector } from 'react-redux';
import fixNum from '../../func.wallet/fixNum';
import { SvgIcon } from '../../Svgs';
import EmptyImg from '../../assets/images/empty.png';
import { useNavigate } from 'react-router-dom';

export const Activity = () => {
	const navigate = useNavigate();
	const { dataWallet } = useSelector((state) => state.wallet);
	const [showModal, setShowModal] = React.useState(false);
	const [transactionList, setTransactionList] = React.useState([]);

	React.useEffect(() => {
		if (dataWallet !== null) {
			let filtered = dataWallet.transactions.filter(
				(item) =>
					item.attributes.status !== 'failed' &&
					item.attributes.transfers[0] &&
					item.attributes.operation_type !== 'mint'
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
			<div className='bottom-bg' />
			<div className='body'>
				<div className='header'>
					<div>
						<div
							onClick={() => setShowModal(true)}
							className={classNames(
								styles.action,
								!transactionList.length ? styles.disabled : ''
							)}
						>
							<SvgIcon type='remove' />
						</div>
					</div>
					<NavSwitch
						setActive={() => navigate('/home')}
						leftText='Wallet'
						rightText='Activity'
					/>
					<div></div>
				</div>
				<div
					style={{ height: 'max-content', marginTop: 40 }}
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
								<div className={styles.icon}>
									<SvgIcon type={item.attributes.operation_type} />
								</div>
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
							<img
								src={EmptyImg}
								alt='empty'
								style={{ maxWidth: '100%', maxHeight: '100%' }}
							/>
							<Title
								fw={500}
								size='sm'
								center
								color='light'
								className={styles.emptyText}
							>
								Your activity will
								<br /> appear here!
							</Title>
						</div>
					)}
				</div>
			</div>
			<Modal open={showModal} setOpen={setShowModal} title='Clear history'>
				<div className='btns' style={{ marginTop: 30 }}>
					<Button
						size='sm'
						style={{ marginBottom: 0 }}
						variant='default'
						onClick={onClear}
					>
						Clear
					</Button>
					<Button
						size='sm'
						variant='outlined'
						onClick={() => setShowModal(false)}
					>
						Cancel
					</Button>
				</div>
			</Modal>
			<Menu />
		</div>
	);
};
