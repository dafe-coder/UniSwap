import React from 'react';
import styles from './copy.module.css';
import { SvgIcon } from '../../../Svgs';

let timerID = null;
export const CopyButton = ({ copy = false, textCopied = '', setPhrase }) => {
	const text = copy ? 'Copy' : 'Paste';

	const [copied, setCopied] = React.useState(false);

	const onCopy = async () => {
		try {
			await navigator.clipboard.writeText(textCopied);
		} catch (err) {
			console.error('Ошибка при копировании текста: ', err);
		}
		setCopied(true);
		timerID = setTimeout(() => {
			setCopied(false);
			clearTimeout(timerID);
		}, 1000);
	};

	async function paste() {
		try {
			await navigator.clipboard
				.readText()
				.then((textCopied) => setPhrase(textCopied));
		} catch (err) {
			console.error('Ошибка при вставки текста: ', err);
		}
	}

	const onClick = () => {
		if (copy) {
			onCopy();
		} else {
			paste();
		}
	};

	return (
		<button onClick={onClick} className={styles.btn}>
			<SvgIcon type='copy' />
			{copied ? 'Copied!' : text}
		</button>
	);
};
