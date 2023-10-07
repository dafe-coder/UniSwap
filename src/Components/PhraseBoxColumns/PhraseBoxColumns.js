import React from 'react';
import styles from './phraseBoxColumns.module.css';
import { CopyButton } from '../UI/CopyButton/CopyButton';

export const PhraseBoxColumns = ({ phrase = '' }) => {
	const [leftPart, setLeftPart] = React.useState([]);
	const [rightPart, setRightPart] = React.useState([]);
	const [phrasePart, setPhrasePart] = React.useState(0);

	React.useEffect(() => {
		setLeftPart([]);
		setRightPart([]);
		if (phrase !== '') {
			const phraseArr = phrase.split(' ');
			setPhrasePart(phraseArr.length / 2);

			phraseArr.forEach((item, i) => {
				if (i < phrasePart) {
					setLeftPart((state) => [...state, item]);
				} else {
					setRightPart((state) => [...state, item]);
				}
			});
		}
	}, [phrase, phrasePart]);

	return (
		<div className={styles.wrap}>
			<div className={styles.box} style={{ marginTop: 16 }}>
				<div className={styles.left}>
					{leftPart.length ? (
						leftPart.map((item, i) => (
							<div className={styles.item}>
								{i + 1}. {item}
							</div>
						))
					) : (
						<></>
					)}
				</div>
				<div className={styles.right}>
					{rightPart.length ? (
						rightPart.map((item, i) => (
							<div className={styles.item}>
								{phrasePart + 1 + i}. {item}
							</div>
						))
					) : (
						<></>
					)}
				</div>
			</div>
			<div className={styles.copyBtnWrap}>
				<CopyButton copy={true} textCopied={phrase} />
			</div>
		</div>
	);
};
