import React from 'react';
import styles from './receive.module.css';
import { Menu, Header } from '../../Components';
import QRCode from 'react-qr-code';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import {
	EmailIcon,
	EmailShareButton,
	FacebookIcon,
	FacebookShareButton,
	TelegramIcon,
	TelegramShareButton,
	TwitterIcon,
	TwitterShareButton,
} from 'react-share';
import { SvgIcon } from '../../Svgs';
import { Par } from '../../Components/UI';

let timerID;

export const Receive = () => {
	const { walletAddress } = useSelector((state) => state.wallet);
	const [copied, setCopied] = React.useState(false);
	const [showShareBody, setShowShareBody] = React.useState(false);

	const handleCopyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(walletAddress);
			setCopied(true);
			timerID = setTimeout(() => {
				setCopied(false);
				clearTimeout(timerID);
			}, 1000);
		} catch (err) {
			console.error('Ошибка при копировании текста: ', err);
		}
	};

	return (
		<div className='screen'>
			<div className='body'>
				<Header title='Receive' />
				<div style={{ marginTop: 40 }}>
					<Par fw={600} size='sm' center mb={10}>
						My Tokenname address
					</Par>
					<Par center size='sm' color='light' fw={500}>
						{walletAddress}
					</Par>
				</div>
				<div style={{ marginTop: 40 }}>
					<QRCode
						bgColor='transparent'
						fgColor='var(--white)'
						size={200}
						value={walletAddress}
					/>
				</div>
				<div
					className={cn('btns', styles.wrapBtn)}
					style={{ marginBottom: 20 }}
				>
					<button className={styles.buttonCopy} onClick={handleCopyToClipboard}>
						{copied ? (
							<SvgIcon type='check-success' fill='var(--success)' />
						) : (
							<SvgIcon type='copy' fill='var(--white)' />
						)}
						{copied ? (
							<Par size='sm' style={{ color: 'var(--success)' }}>
								Address copied
							</Par>
						) : (
							<Par size='sm' color='white'>
								Copy
							</Par>
						)}
					</button>
					<button
						onClick={() => setShowShareBody(!showShareBody)}
						className={styles.buttonCopy}
						style={{ position: 'relative' }}
					>
						<SvgIcon type='share' fill='var(--white)' />
						<Par color='white' size='sm'>
							Share
						</Par>
						<div
							className={cn(styles.bodyShared, {
								[styles.showShareBody]: showShareBody,
							})}
						>
							<TelegramShareButton url={walletAddress}>
								<TelegramIcon />
							</TelegramShareButton>
							<FacebookShareButton url={walletAddress}>
								<FacebookIcon />
							</FacebookShareButton>
							<EmailShareButton>
								<EmailIcon />
							</EmailShareButton>
							<TwitterShareButton>
								<TwitterIcon />
							</TwitterShareButton>
						</div>
					</button>
				</div>
			</div>
			<Menu />
		</div>
	);
};
