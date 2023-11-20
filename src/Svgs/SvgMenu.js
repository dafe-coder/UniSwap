import React from 'react';

export function SvgMenu(props) {
	const { type, fill } = props;

	switch (type) {
		case 'wallet':
			return (
				<svg
					width={24}
					height={24}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}
				>
					<path
						d='M7.274 6.329a.75.75 0 00.811 1.262l-.81-1.262zm7.126-3.69l.485-.571a.75.75 0 00-.89-.059l.405.63zM8.085 7.592l6.72-4.32-.81-1.262-6.72 4.32.81 1.262zm5.83-4.379l5.1 4.32.97-1.144-5.1-4.32-.97 1.144z'
						fill='#05C0A5'
					/>
					<path
						d='M20.64 10.44V7.92a.96.96 0 00-.96-.96H3.36a.96.96 0 00-.96.96V20.4c0 .53.43.96.96.96h16.32c.53 0 .96-.43.96-.96v-2.9'
						stroke='#05C0A5'
						strokeWidth={1.5}
						strokeLinejoin='round'
					/>
					<path
						d='M18.48 16.56h3.12v-5.28h-3.12a2.64 2.64 0 000 5.28z'
						stroke='#05C0A5'
						strokeWidth={1.5}
						strokeLinejoin='round'
					/>
				</svg>
			);
		case 'import':
			return (
				<svg
					width={24}
					height={24}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}
				>
					<path
						d='M4 18.966v1.417c.405.395.954.617 1.526.617h12.948c.572 0 1.121-.222 1.526-.617v-1.417'
						stroke='#05C0A5'
						strokeWidth={1.5}
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M12.001 14.943V3m0 0L7.068 7.563M12.001 3l4.933 4.563'
						stroke='#05C0A5'
						strokeWidth={1.5}
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			);
		case 'backup':
			return (
				<svg
					width={24}
					height={24}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}
				>
					<path
						d='M12.242 4C16.527 4 20 7.582 20 12s-3.473 8-7.758 8c-3.437 0-6.353-2.306-7.37-5.5M12.242 4C7 4 5.522 8 5.522 8'
						stroke='#05C0A5'
						strokeWidth={1.5}
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M4.871 7.218L5.94 8.25M7.879 9H4V5l3.879 4z'
						stroke='#05C0A5'
						strokeWidth={2}
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			);
		case 'security':
			return (
				<svg
					width={24}
					height={24}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}
				>
					<path
						d='M6.6 7.886C6.6 4.846 9.01 2.4 12 2.4c2.992 0 5.4 2.447 5.4 5.486M12 16.2v-2.4'
						stroke='#05C0A5'
						strokeWidth={1.5}
						strokeLinecap='round'
					/>
					<path
						d='M4.8 10.628c0-1.005.81-1.828 1.8-1.828h10.8c.99 0 1.8.823 1.8 1.828v9.143c0 1.006-.81 1.829-1.8 1.829H6.6c-.99 0-1.8-.823-1.8-1.829v-9.143z'
						stroke='#05C0A5'
						strokeWidth={1.5}
						strokeLinecap='round'
					/>
				</svg>
			);
		case 'bell':
			return (
				<svg
					width={24}
					height={24}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}
				>
					<path
						d='M4.601 16.476l-.615-.429.615.429zm1.09-3.373l-.75-.008v.008h.75zm.023-2.039l.75.009v-.009h-.75zm13.693 5.428l.623-.416-.623.416zm-1.05-3.389l-.75-.008v.008h.75zm.023-1.938l.75.01v-.01h-.75zm-13.163 5.74c.617-.887 1.224-2.202 1.224-3.802h-1.5c0 1.215-.463 2.237-.955 2.944l1.23.857zm1.224-3.793l.023-2.04-1.5-.016-.022 2.039 1.5.017zm13.59 2.964c-.473-.707-.924-1.74-.924-2.973h-1.5c0 1.601.584 2.919 1.176 3.806l1.247-.833zm-.924-2.964l.023-1.938-1.5-.018-.023 1.938 1.5.018zm.023-1.947c0-4.195-3.131-7.71-7.129-7.71v1.5c3.049 0 5.63 2.717 5.63 6.21h1.5zm-.105 7.022c.625 0 .986-.472 1.122-.82.14-.36.167-.866-.117-1.291l-1.247.833a.177.177 0 01-.033-.085v-.004.001s.001-.005.007-.013a.209.209 0 01.036-.04.36.36 0 01.232-.08v1.5zm-12.56-7.123c0-3.437 2.538-6.11 5.536-6.11v-1.5c-3.946 0-7.037 3.47-7.037 7.61h1.5zm-1.487 5.623c.11 0 .192.046.234.083a.198.198 0 01.04.047l.001.002v-.003.003a.18.18 0 01-.036.085l-1.231-.857c-.297.427-.272.942-.135 1.304.132.35.492.836 1.127.836v-1.5zm14.047 0H4.978v1.5h14.047v-1.5z'
						fill='#05C0A5'
					/>
					<path
						d='M9.502 20.152c.663.527 1.539.848 2.5.848.96 0 1.835-.32 2.499-.848M4 6.379C4.548 4.94 5.53 3.731 6.816 3m10.348.01A6.497 6.497 0 0120 6.37'
						stroke='#05C0A5'
						strokeWidth={1.5}
						strokeLinecap='round'
					/>
				</svg>
			);
		case 'rpc':
			return (
				<svg
					width={24}
					height={24}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}
				>
					<path
						d='M16.8 7.2l4.8 4.8-4.8 4.8'
						stroke='#05C0A5'
						strokeWidth={1.5}
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M7.2 16.8L2.4 12l4.8-4.8'
						stroke='#05C0A5'
						strokeWidth={1.5}
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			);
		case 'connect':
			return (
				<svg
					width={24}
					height={24}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}
				>
					<path
						d='M12 20V4M8 17V7'
						stroke='#05C0A5'
						strokeWidth={1.5}
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M4 15V9m16 0v6m-4-8v10'
						stroke='#05C0A5'
						strokeWidth={1.5}
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			);
		case 'about':
			return (
				<svg
					width={24}
					height={24}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}
				>
					<path
						d='M3 12a9 9 0 1118 0 9 9 0 01-18 0z'
						stroke='#05C0A5'
						strokeWidth={1.5}
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M12 12v4.5m0-7.835v-.04'
						stroke='#05C0A5'
						strokeWidth={1.5}
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			);
		case 'success':
			return (
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M22 11.5C22 16.7467 17.7467 21 12.5 21C7.25329 21 3 16.7467 3 11.5C3 6.25329 7.25329 2 12.5 2C17.7467 2 22 6.25329 22 11.5Z'
						fill='#05C0A5'
					/>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M16.7571 8.23978C17.0728 8.56793 17.082 9.10985 16.7776 9.4502L12.126 14.6508C11.6991 15.1281 10.9861 15.1142 10.5755 14.6206L8.20291 11.7687C7.9101 11.4167 7.93743 10.8755 8.26394 10.5598C8.59046 10.2442 9.09253 10.2737 9.38534 10.6256L11.3778 13.0207L15.6342 8.26187C15.9386 7.92153 16.4413 7.91164 16.7571 8.23978Z'
						fill='white'
					/>
				</svg>
			);
		case 'error':
			return (
				<svg
					width={24}
					height={24}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}
				>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M7.843 3.802C9.872 2.601 10.886 2 12 2c1.114 0 2.128.6 4.157 1.802l.686.406c2.029 1.202 3.043 1.803 3.6 2.792.557.99.557 2.19.557 4.594v.812c0 2.403 0 3.605-.557 4.594-.557.99-1.571 1.59-3.6 2.791l-.686.407C14.128 21.399 13.114 22 12 22c-1.114 0-2.128-.6-4.157-1.802l-.686-.407c-2.029-1.2-3.043-1.802-3.6-2.791C3 16.01 3 14.81 3 12.406v-.812C3 9.19 3 7.989 3.557 7c.557-.99 1.571-1.59 3.6-2.792l.686-.406zM13 16a1 1 0 11-2 0 1 1 0 012 0zm-1-9.75a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0V7a.75.75 0 01.75-.75z'
						fill='#E61C05'
					/>
				</svg>
			);
		case 'send':
			return (
				<svg
					width={20}
					height={20}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}
				>
					<g clipPath='url(#prefix__clip0_401_2027)' strokeWidth={1.5}>
						<path
							d='M7.675 12.217a1.05 1.05 0 00-.438-.262l-4.344-1.32c-1.02-.31-.987-1.764.05-2.162l11.45-4.387c.459-.176.9-.052 1.182.23'
							stroke='#202124'
							strokeLinecap='round'
						/>
						<path
							d='M7.675 12.217c.12.12.21.27.261.438l1.32 4.343c.31 1.021 1.765.987 2.162-.05l4.387-11.45c.176-.458.053-.9-.23-1.182'
							stroke='#202124'
						/>
					</g>
					<defs>
						<clipPath id='prefix__clip0_401_2027'>
							<path fill='#202124' d='M0 0h20v20H0z' />
						</clipPath>
					</defs>
				</svg>
			);
		case 'receive':
			return (
				<svg
					width={20}
					height={20}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}
				>
					<g clipPath='url(#prefix__clip0_401_2033)' strokeWidth={1.5}>
						<path
							d='M10 6.667v6.666m0 0l2.5-2.5m-2.5 2.5l-2.5-2.5'
							stroke='#202124'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M1.667 10c0-3.928 0-5.893 1.22-7.113 1.22-1.22 3.185-1.22 7.113-1.22 3.928 0 5.893 0 7.113 1.22 1.22 1.22 1.22 3.185 1.22 7.113 0 3.928 0 5.893-1.22 7.113-1.22 1.22-3.185 1.22-7.113 1.22-3.928 0-5.893 0-7.113-1.22-1.22-1.22-1.22-3.185-1.22-7.113z'
							stroke='#202124'
						/>
					</g>
					<defs>
						<clipPath id='prefix__clip0_401_2033'>
							<path fill='#202124' d='M0 0h20v20H0z' />
						</clipPath>
					</defs>
				</svg>
			);
		case 'buy':
			return (
				<svg
					width={20}
					height={20}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}
				>
					<path
						d='M3.22 13.713c-.715-2.86-1.073-4.29-.322-5.252.75-.961 2.225-.961 5.173-.961h3.858c2.948 0 4.422 0 5.173.961.75.962.393 2.392-.322 5.252-.455 1.819-.682 2.728-1.36 3.258-.678.529-1.616.529-3.49.529H8.07c-1.874 0-2.812 0-3.49-.53-.678-.529-.905-1.438-1.36-3.257z'
						stroke='#202124'
						strokeWidth={1.5}
					/>
					<path
						d='M16.25 7.917l-.592-2.171c-.228-.838-.342-1.256-.576-1.571a2.084 2.084 0 00-.915-.699c-.365-.143-.8-.143-1.667-.143M3.75 7.917l.592-2.171c.228-.838.342-1.256.577-1.571.233-.314.55-.556.914-.699.365-.143.8-.143 1.667-.143'
						stroke='#202124'
						strokeWidth={1.5}
					/>
					<path
						d='M7.5 3.333c0-.46.373-.833.833-.833h3.334a.833.833 0 010 1.667H8.333a.833.833 0 01-.833-.834z'
						stroke='#202124'
					/>
				</svg>
			);
		case 'home':
			return (
				<svg
					width={24}
					height={24}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M13 15.4c0-2.074 0-3.111.659-3.756C14.318 11 15.379 11 17.5 11c2.121 0 3.182 0 3.841.644C22 12.29 22 13.326 22 15.4v2.2c0 2.074 0 3.111-.659 3.756-.659.644-1.72.644-3.841.644-2.121 0-3.182 0-3.841-.644C13 20.71 13 19.674 13 17.6v-2.2zM2 8.6c0 2.074 0 3.111.659 3.756C3.318 13 4.379 13 6.5 13c2.121 0 3.182 0 3.841-.644C11 11.71 11 10.674 11 8.6V6.4c0-2.074 0-3.111-.659-3.756C9.682 2 8.621 2 6.5 2c-2.121 0-3.182 0-3.841.644C2 3.29 2 4.326 2 6.4v2.2z'
						stroke={fill ? fill : '#222126'}
						strokeWidth={1.5}
					/>
					<path
						d='M13 5.5c0-1.087 0-1.63.171-2.06a2.293 2.293 0 011.218-1.262C14.802 2 15.327 2 16.375 2h2.25c1.048 0 1.573 0 1.986.178.551.236.99.69 1.218 1.262.171.43.171.973.171 2.06 0 1.087 0 1.63-.171 2.06a2.293 2.293 0 01-1.218 1.262C20.198 9 19.673 9 18.625 9h-2.25c-1.048 0-1.573 0-1.986-.178a2.293 2.293 0 01-1.218-1.262C13 7.13 13 6.587 13 5.5zM2 18.5c0 1.087 0 1.63.171 2.06a2.293 2.293 0 001.218 1.262c.413.178.938.178 1.986.178h2.25c1.048 0 1.573 0 1.986-.178.551-.236.99-.69 1.218-1.262.171-.43.171-.973.171-2.06 0-1.087 0-1.63-.171-2.06a2.293 2.293 0 00-1.218-1.262C9.198 15 8.673 15 7.625 15h-2.25c-1.048 0-1.573 0-1.986.178-.551.236-.99.69-1.218 1.262C2 16.87 2 17.413 2 18.5z'
						stroke={fill ? fill : '#222126'}
						strokeWidth={1.5}
					/>
				</svg>
			);
		case 'buy-crypto':
			return (
				<svg
					width={24}
					height={24}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M7.274 6.329a.75.75 0 00.811 1.262l-.81-1.262zm7.126-3.69l.485-.571a.75.75 0 00-.89-.059l.405.63zM8.085 7.592l6.72-4.32-.81-1.262-6.72 4.32.81 1.262zm5.83-4.379l5.1 4.32.97-1.144-5.1-4.32-.97 1.144z'
						fill={fill ? fill : '#222126'}
					/>
					<path
						d='M20.64 10.44V7.92a.96.96 0 00-.96-.96H3.36a.96.96 0 00-.96.96V20.4c0 .53.43.96.96.96h16.32c.53 0 .96-.43.96-.96v-2.9'
						stroke={fill ? fill : '#222126'}
						strokeWidth={1.5}
						strokeLinejoin='round'
					/>
					<path
						d='M18.48 16.56h3.12v-5.28h-3.12a2.64 2.64 0 100 5.28z'
						stroke={fill ? fill : '#222126'}
						strokeWidth={1.5}
						strokeLinejoin='round'
					/>
				</svg>
			);
		case 'swap':
			return (
				<svg
					width={24}
					height={24}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M10.2 7.8a5.4 5.4 0 115.916 6.561m-3.516 1.84a5.4 5.4 0 11-10.8 0 5.4 5.4 0 0110.8 0z'
						stroke={fill ? fill : '#222126'}
						strokeWidth={1.5}
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M6.6 6L9 3.6 6.6 1.2M1.8 8.4V6.8A3.2 3.2 0 015 3.6h2.4m10 14.4L15 20.4l2.4 2.4m4.8-7.2v1.6a3.2 3.2 0 01-3.2 3.2h-2.4'
						stroke={fill ? fill : '#222126'}
						strokeWidth={1.5}
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			);
		case 'settings':
			return (
				<svg
					width={24}
					height={24}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M7.843 3.802C9.872 2.601 10.886 2 12 2c1.114 0 2.128.6 4.157 1.802l.686.406c2.029 1.202 3.043 1.803 3.6 2.792.557.99.557 2.19.557 4.594v.812c0 2.403 0 3.605-.557 4.594-.557.99-1.571 1.59-3.6 2.791l-.686.407C14.128 21.399 13.114 22 12 22c-1.114 0-2.128-.6-4.157-1.802l-.686-.407c-2.029-1.2-3.043-1.802-3.6-2.791C3 16.01 3 14.81 3 12.406v-.812C3 9.19 3 7.989 3.557 7c.557-.99 1.571-1.59 3.6-2.792l.686-.406z'
						stroke={fill ? fill : '#222126'}
						strokeWidth={1.5}
					/>
					<circle
						cx={12}
						cy={12}
						r={3}
						stroke={fill ? fill : '#222126'}
						strokeWidth={1.5}
					/>
				</svg>
			);
		case 'phrase':
			return (
				<svg
					width={24}
					height={24}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}
				>
					<path
						d='M15 2.4V6a1.2 1.2 0 001.2 1.2h3.6m-1.8-3a26.487 26.487 0 01-1.438-1.413 1.234 1.234 0 00-.892-.387H6.6a2.4 2.4 0 00-2.4 2.4v14.4a2.4 2.4 0 002.4 2.4h10.8a2.4 2.4 0 002.4-2.4V6.478c0-.307-.117-.602-.33-.823-.394-.408-1.051-1.08-1.47-1.455z'
						stroke='#05C0A5'
						strokeWidth={1.5}
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M8 9h2.4M8 12.6h7.2M8 16.2h7.2'
						stroke='#05C0A5'
						strokeWidth={2}
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			);
		case 'key':
			return (
				<svg
					width={24}
					height={24}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}
				>
					<path
						d='M21.6 16.778a1 1 0 00-.293-.707l-6.689-6.69V8.51a6.11 6.11 0 10-2.352 4.818l3.225 3.036v2.619h2.618V21.6H20.6a1 1 0 001-1v-3.822z'
						stroke='#05C0A5'
						strokeWidth={1.5}
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M9 7h.121'
						stroke='#05C0A5'
						strokeWidth={5}
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			);
		case 'basket':
			return (
				<svg
					width={24}
					height={24}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}
				>
					<path
						d='M20.5 6h-17M18.833 8.5l-.46 6.9c-.177 2.654-.265 3.981-1.13 4.79-.865.81-2.196.81-4.856.81h-.774c-2.66 0-3.99 0-4.856-.81-.865-.809-.953-2.136-1.13-4.79l-.46-6.9'
						stroke='#05C0A5'
						strokeWidth={1.5}
						strokeLinecap='round'
					/>
					<path
						d='M9.17 4a3.001 3.001 0 015.66 0'
						stroke='#05C0A5'
						strokeWidth={1.5}
						strokeLinecap='round'
					/>
				</svg>
			);
		case 'send-future':
			return (
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12'
						stroke='#05C0A5'
						strokeWidth='1.5'
						strokeLinecap='round'
					/>
					<path
						d='M12 4L12 14M12 14L15 11M12 14L9 11'
						stroke='#05C0A5'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			);
		case 'receive-future':
			return (
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12'
						stroke='#05C0A5'
						strokeWidth='1.5'
						strokeLinecap='round'
					/>
					<path
						d='M12 14L12 4M12 4L15 7M12 4L9 7'
						stroke='#05C0A5'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			);
		default:
			break;
	}
}
