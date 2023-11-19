import React from 'react';

function SvgIcon(props) {
	const { type, fill } = props;

	switch (type) {
		case 'logo':
			return (
				<svg
					width='236'
					height='147'
					viewBox='0 0 236 147'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M15 138.612V19.6783L92.687 70.4291V138.612C92.687 142.754 96.0449 146.112 100.187 146.112C104.329 146.112 107.687 142.754 107.687 138.612V67.4525C107.687 64.2447 106.068 61.2535 103.383 59.4991L14.6957 1.56243C8.37699 -2.56538 0 1.96818 0 9.51573V138.612C0 142.754 3.35786 146.112 7.5 146.112C11.6421 146.112 15 142.754 15 138.612ZM220.132 138.612V19.6783L142.445 70.4291V138.612C142.445 142.754 139.087 146.112 134.945 146.112C130.803 146.112 127.445 142.754 127.445 138.612V67.4525C127.445 64.2447 129.063 61.2535 131.749 59.4991L220.436 1.56243C226.755 -2.56538 235.132 1.96818 235.132 9.51573V138.612C235.132 142.754 231.774 146.112 227.632 146.112C223.49 146.112 220.132 142.754 220.132 138.612Z'
						fill='#00C992'
					/>
				</svg>
			);
		case 'arrow-right':
			return (
				<svg
					width={24}
					height={24}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}
				>
					<path
						d='M17.391 12.29l-12.569.018a.974.974 0 01-.716-.292.973.973 0 01-.291-.716c0-.283.097-.522.292-.716a.973.973 0 01.715-.292l12.57.018-5.375-5.374a.97.97 0 01-.301-.707c0-.271.1-.507.301-.707.2-.2.436-.3.707-.301.271 0 .507.1.707.3l7.072 7.072c.2.2.3.436.3.706 0 .272-.1.508-.3.708l-7.072 7.071c-.2.2-.436.3-.707.3a.965.965 0 01-.707-.3c-.2-.2-.3-.436-.3-.707 0-.271.1-.507.3-.707l5.374-5.374z'
						fill={fill ? fill : 'var(--success)'}
					/>
				</svg>
			);
		case 'check-left':
			return (
				<svg
					width={8}
					height={14}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}
				>
					<path
						d='M7 1L1.707 6.293a1 1 0 000 1.414L7 13'
						stroke='var(--accent)'
						strokeWidth={2}
						strokeLinecap='round'
					/>
				</svg>
			);
		case 'copy':
			return (
				<svg
					width={24}
					height={24}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M20 13.125V6a3 3 0 00-3-3H9.875M14 21H7.25A2.25 2.25 0 015 18.75V9a2.25 2.25 0 012.25-2.25H14A2.25 2.25 0 0116.25 9v9.75A2.25 2.25 0 0114 21z'
						stroke={fill ? fill : 'var(--accent)'}
						strokeWidth={2}
						strokeLinecap='round'
					/>
				</svg>
			);
		case 'close':
			return (
				<svg
					width={24}
					height={24}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}
				>
					<path
						d='M13.59 12l4.454-4.453a1.126 1.126 0 00-1.59-1.594L12 10.406 7.547 5.953a1.127 1.127 0 00-1.594 1.594L10.406 12l-4.453 4.453a1.127 1.127 0 001.594 1.594L12 13.594l4.453 4.453a1.127 1.127 0 001.594-1.594L13.59 12z'
						fill='var(--black-text)'
					/>
				</svg>
			);
		case 'circle-arrow':
			return (
				<svg
					width={24}
					height={24}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}
				>
					<path
						d='M22 11.5a9.5 9.5 0 11-19 0 9.5 9.5 0 0119 0z'
						fill='#02FEA4'
					/>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M16.757 8.24c.316.328.325.87.02 1.21l-4.651 5.2a1.008 1.008 0 01-1.55-.03L8.203 11.77a.904.904 0 01.06-1.21.755.755 0 011.122.067l1.993 2.395 4.256-4.76a.754.754 0 011.123-.021z'
						fill='#090D15'
					/>
				</svg>
			);
		case 'caret':
			return (
				<svg
					width='16'
					height='16'
					viewBox='0 0 16 16'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}
				>
					<path
						d='M3.06252 5.9393L7.43065 11.0368C7.50106 11.1189 7.5884 11.1848 7.68668 11.23C7.78496 11.2752 7.89185 11.2986 8.00002 11.2986C8.10819 11.2986 8.21509 11.2752 8.31337 11.23C8.41165 11.1848 8.49899 11.1189 8.5694 11.0368L12.9375 5.9393C13.3544 5.45273 13.0088 4.70117 12.3681 4.70117H3.63065C2.99002 4.70117 2.6444 5.45273 3.06252 5.9393Z'
						fill={fill ? fill : 'var(--black-text)'}
					/>
				</svg>
			);
		case 'check-success':
			return (
				<svg
					width='16'
					height='16'
					viewBox='0 0 16 16'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M14.6666 8.00004C14.6666 11.6819 11.6818 14.6667 7.99992 14.6667C4.31802 14.6667 1.33325 11.6819 1.33325 8.00004C1.33325 4.31814 4.31802 1.33337 7.99992 1.33337C11.6818 1.33337 14.6666 4.31814 14.6666 8.00004ZM10.6868 5.97982C10.8821 6.17508 10.8821 6.49167 10.6868 6.68693L7.35347 10.0203C7.15821 10.2155 6.84163 10.2155 6.64637 10.0203L5.31303 8.68693C5.11777 8.49167 5.11777 8.17508 5.31303 7.97982C5.50829 7.78456 5.82488 7.78456 6.02014 7.97982L6.99992 8.9596L8.48981 7.46971L9.9797 5.97982C10.175 5.78456 10.4915 5.78456 10.6868 5.97982Z'
						fill='var(--success)'
					/>
				</svg>
			);
		case 'share':
			return (
				<svg
					width='25'
					height='24'
					viewBox='0 0 25 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M21.5002 11.459L11.9002 5.09998L11.9002 8.69998C3.5 10.5 3.5 18.9 3.5 18.9C3.5 18.9 7.1 14.1 11.9002 14.7L11.9002 18.42L21.5002 11.459Z'
						stroke='#05C0A5'
						strokeWidth='2'
						strokeLinejoin='round'
					/>
				</svg>
			);
		case 'bell':
			return (
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M18.7491 9.70957V9.00497C18.7491 5.13623 15.7274 2 12 2C8.27256 2 5.25087 5.13623 5.25087 9.00497V9.70957C5.25087 10.5552 5.00972 11.3818 4.5578 12.0854L3.45036 13.8095C2.43882 15.3843 3.21105 17.5249 4.97036 18.0229C9.57274 19.3257 14.4273 19.3257 19.0296 18.0229C20.789 17.5249 21.5612 15.3843 20.5496 13.8095L19.4422 12.0854C18.9903 11.3818 18.7491 10.5552 18.7491 9.70957Z'
						stroke='#202124'
						strokeWidth='1.5'
					/>
					<path
						d='M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19'
						stroke='#05C0A5'
						strokeWidth='1.5'
						strokeLinecap='round'
					/>
				</svg>
			);
		case 'receive':
			return (
				<svg
					width='24'
					height='25'
					viewBox='0 0 24 25'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M4.4545 10.7045C4.89384 10.2652 5.60616 10.2652 6.0455 10.7045L12 16.659L17.9545 10.7045C18.3938 10.2652 19.1062 10.2652 19.5455 10.7045C19.9848 11.1438 19.9848 11.8562 19.5455 12.2955L12.7955 19.0455C12.3562 19.4848 11.6438 19.4848 11.2045 19.0455L4.4545 12.2955C4.01517 11.8562 4.01517 11.1438 4.4545 10.7045Z'
						fill='var(--success)'
					/>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M12 2.5C12.6213 2.5 13.125 3.00368 13.125 3.625V17.3125C13.125 17.9338 12.6213 18.4375 12 18.4375C11.3787 18.4375 10.875 17.9338 10.875 17.3125V3.625C10.875 3.00368 11.3787 2.5 12 2.5Z'
						fill='var(--success)'
					/>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M4 22.625C4 22.0037 4.50368 21.5 5.125 21.5L18.8125 21.5C19.4338 21.5 19.9375 22.0037 19.9375 22.625C19.9375 23.2463 19.4338 23.75 18.8125 23.75L5.125 23.75C4.50368 23.75 4 23.2463 4 22.625Z'
						fill='var(--success)'
					/>
				</svg>
			);
		case 'send':
			return (
				<svg
					width='24'
					height='25'
					viewBox='0 0 24 25'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M19.5455 11.1705C19.1062 11.6098 18.3938 11.6098 17.9545 11.1705L12 5.21599L6.04549 11.1705C5.60616 11.6098 4.89384 11.6098 4.45451 11.1705C4.01517 10.7312 4.01517 10.0188 4.45451 9.57951L11.2045 2.82951C11.6438 2.39017 12.3562 2.39017 12.7955 2.82951L19.5455 9.5795C19.9848 10.0188 19.9848 10.7312 19.5455 11.1705Z'
						fill='var(--error)'
					/>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M12 19.375C11.3787 19.375 10.875 18.8713 10.875 18.25L10.875 4.5625C10.875 3.94118 11.3787 3.4375 12 3.4375C12.6213 3.4375 13.125 3.94118 13.125 4.5625L13.125 18.25C13.125 18.8713 12.6213 19.375 12 19.375Z'
						fill='var(--error)'
					/>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M4 22.625C4 22.0037 4.50368 21.5 5.125 21.5L18.8125 21.5C19.4338 21.5 19.9375 22.0037 19.9375 22.625C19.9375 23.2463 19.4338 23.75 18.8125 23.75L5.125 23.75C4.50368 23.75 4 23.2463 4 22.625Z'
						fill='var(--error)'
					/>
				</svg>
			);
		case 'swap':
			return (
				<svg
					width='24'
					height='25'
					viewBox='0 0 24 25'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M13.7197 2.21967C14.0126 1.92678 14.4874 1.92678 14.7803 2.21967L20.0303 7.46967C20.3232 7.76256 20.3232 8.23744 20.0303 8.53033L14.7803 13.7803C14.4874 14.0732 14.0126 14.0732 13.7197 13.7803C13.4268 13.4874 13.4268 13.0126 13.7197 12.7197L18.4393 8L13.7197 3.28033C13.4268 2.98744 13.4268 2.51256 13.7197 2.21967Z'
						fill='var(--additional-blue)'
					/>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M3.75 8C3.75 7.58579 4.08579 7.25 4.5 7.25H18.697C19.1112 7.25 19.447 7.58579 19.447 8C19.447 8.41421 19.1112 8.75 18.697 8.75H4.5C4.08579 8.75 3.75 8.41421 3.75 8Z'
						fill='var(--additional-blue)'
					/>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M10.2803 11.2197C10.5732 11.5126 10.5732 11.9874 10.2803 12.2803L5.56066 17L10.2803 21.7197C10.5732 22.0126 10.5732 22.4874 10.2803 22.7803C9.98744 23.0732 9.51256 23.0732 9.21967 22.7803L3.96967 17.5303C3.67678 17.2374 3.67678 16.7626 3.96967 16.4697L9.21967 11.2197C9.51256 10.9268 9.98744 10.9268 10.2803 11.2197Z'
						fill='var(--additional-blue)'
					/>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M4.59375 17C4.59375 16.5858 4.92954 16.25 5.34375 16.25H19.5C19.9142 16.25 20.25 16.5858 20.25 17C20.25 17.4142 19.9142 17.75 19.5 17.75H5.34375C4.92954 17.75 4.59375 17.4142 4.59375 17Z'
						fill='var(--additional-blue)'
					/>
				</svg>
			);
		case 'remove':
			return (
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M20.5 6H3.49988'
						stroke='#202124'
						strokeWidth='1.5'
						strokeLinecap='round'
					/>
					<path
						d='M18.8333 8.5L18.3734 15.3991C18.1964 18.054 18.1079 19.3815 17.2429 20.1907C16.3778 21 15.0474 21 12.3866 21H11.6133C8.95248 21 7.62207 21 6.75707 20.1907C5.89206 19.3815 5.80356 18.054 5.62657 15.3991L5.16663 8.5'
						stroke='#202124'
						strokeWidth='1.5'
						strokeLinecap='round'
					/>
					<path
						d='M9.17065 4C9.58249 2.83481 10.6937 2 11.9999 2C13.3062 2 14.4174 2.83481 14.8292 4'
						stroke='#05C0A5'
						strokeWidth='1.5'
						strokeLinecap='round'
					/>
				</svg>
			);
		case 'check':
			return (
				<svg
					width='8'
					height='5'
					viewBox='0 0 8 5'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M7.28033 0.46967C7.57322 0.762563 7.57322 1.23744 7.28033 1.53033L4.28033 4.53033C4.13968 4.67098 3.94891 4.75 3.75 4.75C3.55109 4.75 3.36032 4.67098 3.21967 4.53033L0.21967 1.53033C-0.0732233 1.23744 -0.0732233 0.762564 0.21967 0.46967C0.512563 0.176777 0.987437 0.176777 1.28033 0.46967L3.75 2.93934L6.21967 0.46967C6.51256 0.176777 6.98744 0.176777 7.28033 0.46967Z'
						fill='var(--black-text)'
					/>
				</svg>
			);
		case 'change':
			return (
				<svg
					width={27}
					height={16}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}
				>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M6.667 0C5.93 0 5.333.597 5.333 1.333v10.115L2.276 8.39a1.333 1.333 0 00-1.885 1.885l5.333 5.334a1.334 1.334 0 001.885 0l5.334-5.334a1.333 1.333 0 10-1.886-1.885L8 11.448V1.333C8 .597 7.403 0 6.667 0zM19.583 16c.737 0 1.334-.597 1.334-1.333V4.552l3.057 3.057a1.333 1.333 0 001.886-1.885L20.526.39a1.333 1.333 0 00-1.886 0l-5.333 5.333a1.333 1.333 0 001.886 1.885l3.057-3.057v10.115c0 .736.597 1.333 1.333 1.333z'
						fill='#222126'
					/>
				</svg>
			);
		case 'user':
			return (
				<svg
					width={24}
					height={24}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<circle cx={12} cy={9} r={3} stroke='#202124' strokeWidth={1.5} />
					<circle cx={12} cy={12} r={10} stroke='#202124' strokeWidth={1.5} />
					<path
						d='M17.97 20c-.16-2.892-1.045-5-5.97-5s-5.81 2.108-5.97 5'
						stroke='#202124'
						strokeWidth={1.5}
						strokeLinecap='round'
					/>
				</svg>
			);
		case 'alert':
			return (
				<svg
					width={24}
					height={24}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}
				>
					<path
						d='M12 12.9V8.414m0 7.81v.04M17.67 20H6.33a3.398 3.398 0 01-3.267-2.424c-.176-.598.04-1.22.37-1.751L9.103 5.6c1.328-2.135 4.466-2.135 5.794 0l5.67 10.224c.33.53.546 1.153.37 1.75A3.398 3.398 0 0117.67 20z'
						stroke='var(--error)'
						strokeWidth={2}
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			);
		case 'activity':
			return (
				<svg
					width={24}
					height={24}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}
				>
					<circle cx={4} cy={12} r={2} fill='#202124' />
					<circle cx={12} cy={12} r={2} fill='#202124' />
					<circle cx={20} cy={12} r={2} fill='#202124' />
				</svg>
			);
		case 'pencil':
			return (
				<svg
					width={16}
					height={17}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}
				>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M9.4 2.094a2.597 2.597 0 013.673 3.673L8.01 10.83c-.285.285-.46.46-.654.611a4.002 4.002 0 01-.738.456c-.222.106-.456.184-.84.312l-1.78.594-.429.142a1.066 1.066 0 01-1.348-1.348l.737-2.21c.128-.382.205-.616.311-.838.125-.262.278-.51.457-.738.151-.195.326-.369.61-.654L9.4 2.094zm-5.426 9.662l-.564-.563.486-1.457c.141-.424.2-.597.276-.757.094-.196.208-.382.342-.553.11-.14.238-.27.554-.586l3.927-3.927c.162.406.436.897.899 1.36.462.462.953.737 1.36.899l-3.927 3.927c-.317.316-.446.444-.586.553a2.99 2.99 0 01-.553.343c-.16.076-.333.134-.757.276l-1.457.485zm8.077-6.381a3.024 3.024 0 01-1.45-.81 3.024 3.024 0 01-.81-1.449l.316-.315a1.597 1.597 0 112.259 2.26l-.315.314zm-9.884 9.792a.5.5 0 01.5-.5h10.666v1H2.667a.5.5 0 01-.5-.5z'
						fill='var(--accent)'
					/>
				</svg>
			);
		case 'success':
			return (
				<svg
					width='86'
					height='86'
					viewBox='0 0 86 86'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<circle cx='43' cy='43' r='43' fill='#05C0A5' fillOpacity='0.2' />
					<circle cx='43' cy='43' r='33' fill='#05C0A5' />
					<path
						d='M29 41.2045L37.963 51.1994C38.3508 51.6318 39.0243 51.644 39.4274 51.2258L57 33'
						stroke='white'
						strokeWidth='4'
						strokeLinecap='round'
					/>
				</svg>
			);
		case 'search':
			return (
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M11.5 2.75C6.66751 2.75 2.75 6.66751 2.75 11.5C2.75 16.3325 6.66751 20.25 11.5 20.25C16.3325 20.25 20.25 16.3325 20.25 11.5C20.25 6.66751 16.3325 2.75 11.5 2.75ZM1.25 11.5C1.25 5.83908 5.83908 1.25 11.5 1.25C17.1609 1.25 21.75 5.83908 21.75 11.5C21.75 14.0605 20.8111 16.4017 19.2589 18.1982L22.5303 21.4697C22.8232 21.7626 22.8232 22.2374 22.5303 22.5303C22.2374 22.8232 21.7626 22.8232 21.4697 22.5303L18.1982 19.2589C16.4017 20.8111 14.0605 21.75 11.5 21.75C5.83908 21.75 1.25 17.1609 1.25 11.5Z'
						fill='#6F7684'
					/>
				</svg>
			);
		case 'chevron-right':
			return (
				<svg
					width='31'
					height='31'
					viewBox='0 0 31 31'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M20.1237 15.4072L12.7881 8.07283L11.0625 9.79842L16.6762 15.4121L11.0625 21.0172L12.7881 22.7428L20.1237 15.4072Z'
						fill='#fff'
					/>
				</svg>
			);
		case 'swap-polygon':
			return (
				<svg
					width={400}
					height={64}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}
				>
					<g filter='url(#prefix__filter0_d_402_2989)'>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M400 6a6 6 0 00-6-6H6a6 6 0 00-6 6v18.876a6 6 0 006 6h165a6 6 0 016 6V47c0 5.523 4.477 10 10 10h26c5.523 0 10-4.477 10-10V36.876a6 6 0 016-6h165a6 6 0 006-6V6z'
							fill='#fff'
						/>
					</g>
					<defs>
						<filter
							id='prefix__filter0_d_402_2989'
							x={-5}
							y={-3}
							width={410}
							height={67}
							filterUnits='userSpaceOnUse'
							colorInterpolationFilters='sRGB'
						>
							<feFlood floodOpacity={0} result='BackgroundImageFix' />
							<feColorMatrix
								in='SourceAlpha'
								values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
								result='hardAlpha'
							/>
							<feOffset dy={2} />
							<feGaussianBlur stdDeviation={2.5} />
							<feComposite in2='hardAlpha' operator='out' />
							<feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0' />
							<feBlend
								in2='BackgroundImageFix'
								result='effect1_dropShadow_402_2989'
							/>
							<feBlend
								in='SourceGraphic'
								in2='effect1_dropShadow_402_2989'
								result='shape'
							/>
						</filter>
					</defs>
				</svg>
			);
		default:
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width={50}
					height={50}
					fill='none'
					viewBox='0 0 48 48'
					{...props}
				>
					<path
						stroke='#fff'
						strokeLinecap='round'
						strokeWidth={4}
						d='M12.566 27.183C10.856 28.354 10 30.293 10 33c0 4.06 4.975 11 9.462 11h11.48C35.331 44 38 40.15 38 37.06V24.01a3 3 0 0 0-3-3h-.01A2.99 2.99 0 0 0 32 24'
					/>
					<path
						stroke='#fff'
						strokeLinecap='round'
						strokeWidth={4}
						d='M13.981 29.445V11.006a2.998 2.998 0 0 1 2.998-2.998h.008a3.014 3.014 0 0 1 3.006 3.015v13.57'
					/>
					<path
						stroke='#fff'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={4}
						d='M19.993 24.009V7.016a3.016 3.016 0 0 1 6.03 0v16.992'
					/>
					<path
						stroke='#fff'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={4}
						d='M26 23.716v-2.712a3 3 0 1 1 6 0v3'
					/>
				</svg>
			);
	}
}

export { SvgIcon };
