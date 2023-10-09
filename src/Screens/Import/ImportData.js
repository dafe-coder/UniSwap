import React from 'react';
import { Par, Button, Modal, Input } from '../../Components/UI';
import { SvgIcon } from '../../Svgs';
import { useNavigate } from 'react-router-dom';
import { PhraseBox } from '../../Components/PhraseBox/PhraseBox';

export const ImportData = () => {
	const navigate = useNavigate();
	const [phrase, setPhrase] = React.useState('');
	const [name, setName] = React.useState('');
	const [openName, setOpenName] = React.useState(false);

	return (
		<div className='screen'>
			<div className='header-back'>
				<button onClick={() => navigate(-1)}>
					<SvgIcon type='check-left' />
					<Par color='light'>Back</Par>
				</button>
			</div>
			<div className='top-bg' />
			<div className='body'>
				<PhraseBox setPhrase={setPhrase} phrase={phrase} />
			</div>
			<div className='body-bottom'>
				<Button onClick={() => setOpenName(true)}>Import</Button>
			</div>
			<Modal
				open={openName}
				setOpen={setOpenName}
				title='Give your wallet a nickname'
				par='This is a way to keep track of your wallet. Only you will see this.'
			>
				<Input
					placeholder='Name your wallet'
					mt={16}
					setValue={setName}
					value={name}
					icon='pencil'
				/>
				<Par mt={16} color='light'>
					Your public address will be
				</Par>
				<Input
					placeholder='Name your wallet'
					mt={6}
					setValue={setName}
					value='0xfbE6...5buA'
					icon='pencil'
					disabled
				/>
				<div className='btns' style={{ marginTop: 32 }}>
					<Button to='/manage-default' size='sm'>
						Import
					</Button>
					<Button
						size='sm'
						variant='outlined'
						onClick={() => setOpenName(false)}
					>
						Cancel
					</Button>
				</div>
			</Modal>
		</div>
	);
};
