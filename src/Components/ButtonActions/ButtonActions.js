import React, { useState } from 'react';
import styles from './buttonActions.module.css';
import classNames from 'classnames';

export const ButtonActions = ({
	disabled,
	activeItem = '',
	actions,
	onClick,
	type = 'percent',
}) => {
	const [active, setActive] = useState(null);

	React.useEffect(() => {
		if (activeItem !== '') {
			setActive(activeItem);
		}
	}, [activeItem]);

	const handleClick = (index, title) => {
		setActive(index);
		if (type === 'percent') onClick(title.slice(0, -1));
		if (type === 'timeline') onClick(title);
	};

	return (
		<div
			className={styles.block}
			style={disabled ? { pointerEvents: 'none' } : {}}
		>
			{actions.map((item, index) => (
				<div
					className={classNames(
						styles.button,
						active === index ? styles.button_active : ''
					)}
					onClick={() => handleClick(index, item.title)}
					key={index}
				>
					{item.title}
				</div>
			))}
		</div>
	);
};
