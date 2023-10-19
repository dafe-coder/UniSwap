import React from 'react';
import { Textarea, Par, CopyButton } from '../UI';
import styles from './phraseBox.module.css';

export const PhraseBox = ({ heightInp, setPhrase, phrase, copy = false }) => {
	return (
		<div>
			<Textarea
				height={heightInp}
				style={copy ? { pointerEvents: 'none' } : {}}
				value={phrase}
				setValue={setPhrase}
				placeholder='Enter or paste here the 12 or 24 words from your recovery phrase, private key.'
			/>
			<div className={styles.copyButtonBody}>
				<CopyButton copy={copy} setPhrase={setPhrase} textCopied={phrase} />
			</div>
		</div>
	);
};
