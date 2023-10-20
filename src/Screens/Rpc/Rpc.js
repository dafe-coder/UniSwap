import React from 'react';
import styles from './rpc.module.css';
import cn from 'classnames';
import { Header, ItemExpand, RpcItem } from '../../Components/';
import { Par, Button, Modal, Input } from '../../Components/UI';
import { useDispatch, useSelector } from 'react-redux';
import { setRpcLinks, setActiveRpcLink } from '../../redux/slices/StorageSlice';

export const Rpc = () => {
	const dispatch = useDispatch();
	const { rpcLinks, activeRpcLink } = useSelector((state) => state.storage);
	const [showModalAdd, setShowModalAdd] = React.useState(false);
	const [showModalSuccess, setShowModalSuccess] = React.useState(false);
	const [showModalRestart, setShowModalRestart] = React.useState(false);
	const [disabledBtnAdd, setDisabledBtnAdd] = React.useState(true);
	const [rpcTitle, setRpcTitle] = React.useState('');

	const addNewRpc = () => {
		const newRpcItem = {
			id: Math.random(),
			title: rpcTitle,
			info: {
				ms: '102ms',
				height: 'Height: 16885049',
				status: 'green',
			},
		};
		dispatch(setRpcLinks(newRpcItem));
	};
	const onAddRpc = () => {
		addNewRpc();
		setShowModalAdd(false);
		setShowModalSuccess(true);
		dispatch(setActiveRpcLink(rpcTitle));
	};

	const chooseRpcLink = (link) => {
		dispatch(setActiveRpcLink(link));
		setShowModalRestart(true);
	};

	const closeModalSuccess = () => {
		setShowModalSuccess(false);
		setShowModalRestart(true);
	};

	React.useEffect(() => {
		if (
			(rpcTitle.length > 5 && rpcTitle.toLowerCase().includes('https:')) ||
			(rpcTitle.length > 5 && rpcTitle.toLowerCase().includes('wc:'))
		) {
			setDisabledBtnAdd(false);
		} else {
			setDisabledBtnAdd(true);
		}
	}, [rpcTitle]);

	return (
		<div className='screen'>
			<div className='body'>
				<Header title='RPC Node' />
				<Par size='sm' color='light'>
					Bitcoin
				</Par>
				<div className={styles.box}>
					<ItemExpand title={`What's the "Height" of nodes?`}>
						The larger number of height means that the nodes have more stable
						and in-time synchronization. When the nodes are connected at similar
						speeds, it is recommended to choose the one which has a higher
						height.
					</ItemExpand>
				</div>
				<Par mt={30} mb={15} tt='uppercase' color='light'>
					Custom
				</Par>
				<Button onClick={() => setShowModalAdd(true)}>Add Node</Button>
				<Par mt={30} mb={15} tt='uppercase' color='light'>
					Default
				</Par>
				<div className={cn(styles.listRpc, 'scroll')}>
					{rpcLinks.map((item) => (
						<RpcItem
							key={item.id}
							{...item}
							active={activeRpcLink}
							onChoose={chooseRpcLink}
						/>
					))}
				</div>
			</div>
			<Modal
				fwTitle={500}
				open={showModalAdd}
				setOpen={setShowModalAdd}
				title='Add Node'
			>
				<Input
					height={55}
					mt={16}
					setValue={setRpcTitle}
					value={rpcTitle}
					title='Add node'
					placeholder='https://'
					size='lg'
				/>
				<div className='btns' style={{ marginTop: 30 }}>
					<Button
						size='sm'
						variant={disabledBtnAdd ? 'disabled' : 'default'}
						onClick={onAddRpc}
					>
						Confirm
					</Button>
					<Button
						size='sm'
						variant='outlined'
						onClick={() => setShowModalAdd(false)}
					>
						Cancel
					</Button>
				</div>
			</Modal>
			<Modal
				setOpen={setShowModalSuccess}
				open={showModalSuccess}
				title='Success'
				par='New custom RPC Node successfully added'
			>
				<Button mt={30} variant='default' onClick={closeModalSuccess}>
					Okay
				</Button>
			</Modal>
			<Modal
				fwTitle={500}
				open={showModalRestart}
				setOpen={setShowModalRestart}
				title='Restart Required'
				par='To finish switching the RPC node, needs to restart.'
			>
				<div className='btns' style={{ marginTop: 30 }}>
					<Button size='sm' variant='default' to='/wallet'>
						Restart
					</Button>
					<Button
						size='sm'
						variant='outlined'
						onClick={() => setShowModalRestart(false)}
					>
						Cancel
					</Button>
				</div>
			</Modal>
		</div>
	);
};
