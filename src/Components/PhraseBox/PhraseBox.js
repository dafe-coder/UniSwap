import React from 'react';
import { Textarea, Par, CopyButton } from '../UI';
import styles from './phraseBox.module.css';

export const PhraseBox = ({ setPhrase, phrase }) => {
	return (
		<div>
			<Textarea
				value={phrase}
				setValue={setPhrase}
				placeholder='Enter or paste here the 12 or 24 words from your recovery phrase, private key.'
			/>
			<Par color='light' mt={8}>
				Enter your recovery phrase <br /> Your recovery phrase will only be
				stored on your device.
			</Par>
			<div className={styles.copyButtonBody}>
				<CopyButton setPhrase={setPhrase} />
			</div>
		</div>
	);
};
