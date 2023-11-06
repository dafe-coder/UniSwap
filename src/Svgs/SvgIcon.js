import React from 'react';

function SvgIcon(props) {
	const { type, fill } = props;

	switch (type) {
		case 'logo':
			return (
				<svg
					width={170}
					height={203}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}
				>
					<path
						d='M67 44.1c-2.1-.3-2.2-.4-1.2-.5 1.9-.3 6.3.1 9.4.8 7.2 1.7 13.7 6.1 20.6 13.8l1.8 2.1 2.6-.4c11.1-1.8 28.3 5.6 31.3 6.1s7 .4 7.5 1c.2.2-.914 2.438-1.5 4-1.172 3.124-2.5 6-3 8-.602 2.408 4 3 6.9-2 .625-1.078-1.1 9.7 0 9.7 2.4 0 4.9-3.8 6.1-9.1l.5-2.1.9 1c5.1 5.7 9.1 13.6 9.7 19.2l.2 1.5-.9-1.3c-1.5-2.3-2.9-3.8-4.8-5.1-3.4-2.3-7-3-16.5-3.5-8.6-.5-13.5-1.2-18.3-2.8-8.2-2.7-12.4-6.2-22.1-19.1-4.3-5.7-7-8.8-9.7-11.4-5.9-5.7-11.8-8.7-19.5-9.9z'
						fill='#fff'
					/>
					<path
						d='M142.5 55.3c.2-3.8.7-6.3 1.8-8.6.4-.9.8-1.7.9-1.7.1 0-.1.7-.4 1.5-.8 2.2-.9 5.3-.4 8.8.7 4.5 1 5.1 5.8 10 2.2 2.3 4.8 5.2 5.8 6.4l1.7 2.2-1.7-1.6c-2.1-2-6.9-5.8-8-6.3-.7-.4-.8-.4-1.3.1-.4.4-.5 1-.5 3.9-.1 4.5-.7 7.3-2.2 10.2-.8 1.5-.9 1.2-.2-.5.5-1.3.6-1.9.6-6.2 0-8.7-1-10.8-7.1-14.3-1.5-.9-4.1-2.2-5.6-2.9-1.6-.7-2.8-1.3-2.7-1.3.2-.2 6.1 1.5 8.4 2.5 3.5 1.4 4.1 1.5 4.5 1.4.3-.3.5-1.1.6-3.6z'
						fill='#fff'
					/>
					<path
						d='M138.769 63.499c-3.805-.082-6.319-.504-8.652-1.532-.912-.371-1.724-.746-1.727-.846-.004-.1.702.078 1.511.353 2.224.731 5.326.734 8.808.126 4.476-.84 5.067-1.159 9.815-6.11 2.23-2.27 5.048-4.959 6.216-5.996l2.146-1.767-1.546 1.748c-1.934 2.162-5.582 7.078-6.048 8.193-.378.712-.375.812.141 1.296.412.388 1.015.469 3.913.378 4.501-.04 7.319.473 10.264 1.882 1.524.752 1.227.862-.494.215-1.315-.46-1.917-.54-6.215-.407-8.696.272-10.764 1.337-14.072 7.543-.853 1.527-2.071 4.166-2.724 5.687-.65 1.621-1.212 2.84-1.216 2.74-.206-.194 1.31-6.144 2.238-8.474 1.29-3.542 1.371-4.145 1.259-4.542-.31-.29-1.115-.465-3.617-.487zM71.1 71.7c-4.2-5.8-6.9-14.8-6.3-21.5l.2-2.1 1 .2c1.8.3 4.9 1.5 6.4 2.4 4 2.4 5.8 5.7 7.5 13.9.5 2.4 1.2 5.2 1.5 6.1.5 1.5 2.4 5 4 7.2 1.1 1.6.4 2.4-2.1 2.2-3.8-.4-8.9-3.9-12.2-8.4zM136.4 115.2c-19.8-8-26.8-14.9-26.8-26.6 0-1.7.1-3.1.1-3.1.1 0 .8.6 1.7 1.3 4 3.2 8.5 4.6 21 6.4 7.3 1.1 11.5 1.9 15.3 3.2 12.1 4 19.6 12.2 21.4 23.3.5 3.2.2 9.3-.6 12.5-.7 2.5-2.7 7.1-3.2 7.2-.1 0-.3-.5-.3-1.3-.2-4.2-2.3-8.2-5.8-11.3-4.2-3.6-9.6-6.3-22.8-11.6zM122.4 118.5c-.2-1.5-.7-3.4-1-4.2l-.5-1.5.9 1.1c1.3 1.5 2.3 3.3 3.2 5.8.7 1.9.7 2.5.7 5.6 0 3-.1 3.7-.7 5.4-1 2.7-2.2 4.6-4.2 6.7-3.6 3.7-8.3 5.7-15 6.6-1.2.1-4.6.4-7.6.6-7.5.4-12.5 1.2-17 2.8-.6.2-1.2.4-1.3.3-.2-.2 2.9-2 5.4-3.2 3.5-1.7 7.1-2.6 15-4 3.9-.6 7.9-1.4 8.9-1.8 9.9-3.1 14.8-10.8 13.2-20.2z'
						fill='#fff'
					/>
					<path
						d='M131.5 134.6c-2.6-5.7-3.2-11.1-1.8-16.2.2-.5.4-1 .6-1 .2 0 .8.3 1.4.7 1.2.8 3.7 2.2 10.1 5.7 8.1 4.4 12.7 7.8 15.9 11.7 2.8 3.4 4.5 7.3 5.3 12.1.5 2.7.2 9.2-.5 11.9-2.2 8.5-7.2 15.3-14.5 19.2-1.1.6-2 1-2.1 1-.1 0 .3-1 .9-2.2 2.4-5.1 2.7-10 .9-15.5-1.1-3.4-3.4-7.5-8-14.4-5.5-8-6.8-10.1-8.2-13zM118.231 155.676c.033-6.265 1.755-11.418 5.166-15.46.392-.37.783-.74.965-.656.181.084.6.608.976 1.223.754 1.23 2.435 3.55 6.775 9.413 5.505 7.394 8.253 12.411 9.521 17.294 1.114 4.261 1.02 8.514-.269 13.207-.679 2.66-3.68 8.434-5.448 10.591-5.565 6.791-12.957 10.865-21.22 11.34-1.25.083-2.235.069-2.326.027-.091-.042.692-.782 1.74-1.62 4.319-3.621 6.648-7.943 7.323-13.69.429-3.548.062-8.235-1.217-16.428-1.634-9.57-1.932-12.022-1.986-15.241zM97.775 160.737c3.265-5.347 7.401-8.87 12.41-10.568.526-.114 1.052-.229 1.164-.063.112.165.2.83.205 1.552.01 1.442.251 4.297.938 11.559.894 9.174.656 14.89-.781 19.725-1.247 4.225-3.525 7.818-7.053 11.17-1.956 1.927-7.508 5.321-10.136 6.254-8.273 2.941-16.707 2.61-24.028-1.251-1.113-.575-1.948-1.097-2.005-1.179-.056-.083.997-.312 2.327-.488 5.569-.87 9.796-3.367 13.342-7.939 2.2-2.817 4.307-7.019 7.445-14.695 3.544-9.039 4.555-11.292 6.172-14.077z'
						fill='#fff'
					/>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M4.4 4.3c23.3 28.3 59.2 72.3 61 74.7 1.5 2 .9 3.9-1.6 5.3-1.4.8-4.3 1.6-5.7 1.6-1.6 0-3.5-.8-4.8-2.1-.9-.9-4.8-6.6-13.6-20.3C33 53 27.3 44.3 27.2 44.2c-.4-.2-.4-.2 11.8 21.6C46.7 79.5 49.2 84.4 49.2 85c0 1.3-.4 2-2 3.8-2.7 3-3.9 6.4-4.8 13.5-1 7.9-3.7 13.5-11.4 23-4.5 5.6-5.2 6.6-6.3 8.9-1.4 2.8-1.8 4.4-2 8-.2 3.8.2 6.2 1.3 9.8 1 3.2 2.1 5.3 4.8 9.4 2.3 3.6 3.7 6.3 3.7 7.3 0 .8.2.8 3.8 0 8.6-2 15.7-5.4 19.6-9.6 2.4-2.6 3-4 3-7.6 0-2.3-.1-2.8-.7-4.2-1-2.2-2.9-4-7-6.8-5.4-3.7-7.7-6.7-8.3-10.7-.5-3.4.1-5.7 3.1-12 3.1-6.5 3.9-9.2 4.4-15.8.3-4.2.8-5.9 2-7.2 1.3-1.4 2.4-1.9 5.5-2.3 5.1-.7 8.4-2 11-4.5 2.3-2.1 3.3-4.2 3.4-7.3l.1-2.3-1.3-1.4C66.4 71.6 1.3 0 1 0 .9 0 2.5 1.9 4.4 4.3zm30.7 142.2c1.1-1.9.5-4.3-1.3-5.5-1.7-1.1-4.3-.6-4.3.9 0 .4.2.8.8 1 .9.5 1 1 .3 2.1s-.7 2.1.2 2.8c1.4 1.1 3.3.5 4.3-1.3z'
						fill='#fff'
					/>
					<path
						d='M64 86.5l-9.5 2-18-27.5L1 0l35 40 33 38.5v5l-5 3zM81.435 94.907c1.64 1.097 1.968 2.68 1.093 4.143-.656.975-2.624 1.95-4.045 1.95C76.296 101 74 99.294 74 97.71c0-3.168 4.483-4.875 7.435-2.803z'
						fill='#fff'
					/>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M75.6 93.9c-2.4.7-4.7 3.3-5.4 5.9-.4 1.6-.2 4.5.5 5.4 1.1 1.4 2.1 1.8 4.9 1.8 5.5 0 10.2-2.4 10.7-5.3.5-2.4-1.6-5.7-4.5-7.2-1.5-.8-4.6-1.1-6.2-.6zm6.4 5c.8-1.2.5-2.5-1-3.4-2.7-1.7-6.8-.3-6.8 2.3 0 1.3 2.1 2.7 4.1 2.7 1.3 0 3.1-.8 3.7-1.6z'
						fill='#fff'
					/>
					<path
						d='M78.8 96.744c1.5.9 1.8 2.2 1 3.4-.6.8-2.4 1.6-3.7 1.6-2 0-4.1-1.4-4.1-2.7 0-2.6 4.1-4 6.8-2.3z'
						fill='#090D15'
					/>
				</svg>
			);
		case 'arrow-right':
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
						d='M11.5941 8.19329L3.21485 8.20508C3.02629 8.20508 2.86711 8.14018 2.73732 8.01039C2.60784 7.88091 2.5431 7.72189 2.5431 7.53332C2.5431 7.34476 2.60799 7.18559 2.73779 7.05579C2.86727 6.92631 3.02629 6.86157 3.21485 6.86157L11.5941 6.87336L8.01139 3.29068C7.87782 3.15712 7.81089 2.99998 7.81057 2.81928C7.81089 2.63857 7.87782 2.48144 8.01139 2.34788C8.14495 2.21431 8.30209 2.14737 8.48279 2.14706C8.6635 2.14737 8.82063 2.21431 8.9542 2.34788L13.6682 7.06192C13.8018 7.19548 13.8686 7.35246 13.8686 7.53285C13.8686 7.71387 13.8018 7.87116 13.6682 8.00473L8.9542 12.7188C8.82063 12.8523 8.6635 12.919 8.48279 12.9186C8.30209 12.919 8.14495 12.8523 8.01139 12.7188C7.87782 12.5852 7.8112 12.4281 7.81151 12.2474C7.8112 12.0667 7.87783 11.9095 8.01139 11.776L11.5941 8.19329Z'
						fill='white'
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
						stroke='#98A1C0'
						strokeWidth={2}
						strokeLinecap='round'
					/>
				</svg>
			);
		case 'copy':
			return (
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M20 13.125L20 5.99991C20 4.34304 18.6568 2.99989 17 2.99991L9.875 2.99999M14 21L7.25 21C6.00736 21 5 19.9926 5 18.75L5 8.99999C5 7.75735 6.00736 6.74999 7.25 6.74999L14 6.74999C15.2426 6.74999 16.25 7.75735 16.25 8.99999L16.25 18.75C16.25 19.9926 15.2426 21 14 21Z'
						stroke={fill ? fill : '#98A1C0'}
						strokeWidth='2'
						strokeLinecap='round'
					/>
				</svg>
			);
		case 'close':
			return (
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M13.5909 12L18.0441 7.54687C18.2554 7.3359 18.3743 7.04962 18.3746 6.75099C18.3748 6.45237 18.2564 6.16587 18.0455 5.95453C17.8345 5.74319 17.5482 5.62431 17.2496 5.62404C16.951 5.62378 16.6645 5.74215 16.4531 5.95312L12 10.4062L7.54688 5.95312C7.33553 5.74178 7.04889 5.62305 6.75 5.62305C6.45111 5.62305 6.16447 5.74178 5.95313 5.95312C5.74178 6.16447 5.62305 6.45111 5.62305 6.75C5.62305 7.04888 5.74178 7.33553 5.95313 7.54687L10.4063 12L5.95313 16.4531C5.74178 16.6645 5.62305 16.9511 5.62305 17.25C5.62305 17.5489 5.74178 17.8355 5.95313 18.0469C6.16447 18.2582 6.45111 18.3769 6.75 18.3769C7.04889 18.3769 7.33553 18.2582 7.54688 18.0469L12 13.5937L16.4531 18.0469C16.6645 18.2582 16.9511 18.3769 17.25 18.3769C17.5489 18.3769 17.8355 18.2582 18.0469 18.0469C18.2582 17.8355 18.377 17.5489 18.377 17.25C18.377 16.9511 18.2582 16.6645 18.0469 16.4531L13.5909 12Z'
						fill='white'
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
						fill={fill ? fill : 'white'}
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
						fill='#00FFA3'
					/>
				</svg>
			);
		case 'share':
			return (
				<svg
					width='21'
					height='20'
					viewBox='0 0 21 20'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M15.2658 12.6563C14.5528 12.656 13.868 12.9352 13.3584 13.434L8.39082 10.641C8.4929 10.2198 8.4929 9.78025 8.39082 9.359L13.3568 6.56603C13.8208 7.0173 14.4302 7.28872 15.076 7.33168C15.7218 7.37465 16.3618 7.18636 16.8814 6.80052C17.401 6.41468 17.7663 5.85648 17.912 5.22587C18.0576 4.59525 17.974 3.93339 17.6762 3.35876C17.3784 2.78414 16.8858 2.33429 16.2865 2.08973C15.6873 1.84517 15.0206 1.82187 14.4058 2.02402C13.7909 2.22616 13.2681 2.64054 12.9309 3.19298C12.5937 3.74542 12.4642 4.39983 12.5654 5.03908L7.48223 7.89845C7.08296 7.56579 6.59716 7.35381 6.08174 7.28732C5.56632 7.22084 5.04262 7.30262 4.57201 7.52307C4.10139 7.74352 3.70335 8.09352 3.4245 8.53207C3.14566 8.97061 2.99756 9.47954 2.99756 9.99923C2.99756 10.5189 3.14566 11.0279 3.4245 11.4664C3.70335 11.9049 4.10139 12.2549 4.57201 12.4754C5.04262 12.6958 5.56632 12.7776 6.08174 12.7111C6.59716 12.6447 7.08296 12.4327 7.48223 12.1L12.5654 14.9609C12.4776 15.5132 12.5611 16.0791 12.8048 16.5824C13.0486 17.0857 13.4407 17.5022 13.9285 17.7757C14.4162 18.0491 14.9761 18.1665 15.5326 18.112C16.0892 18.0574 16.6156 17.8335 17.0409 17.4705C17.4663 17.1075 17.7701 16.6228 17.9114 16.0817C18.0528 15.5407 18.0248 14.9693 17.8314 14.4447C17.6379 13.92 17.2882 13.4673 16.8295 13.1475C16.3708 12.8277 15.825 12.6563 15.2658 12.6563Z'
						fill='#98A1C0'
					/>
				</svg>
			);
		case 'bell':
			return (
				<svg
					width='20'
					height='20'
					viewBox='0 0 20 20'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M17.5 15.8333V16.6667H2.5V15.8333L4.16667 14.1667V9.16667C4.16667 6.58334 5.85833 4.30834 8.33333 3.57501V3.33334C8.33333 2.89131 8.50893 2.46739 8.82149 2.15483C9.13405 1.84227 9.55797 1.66667 10 1.66667C10.442 1.66667 10.866 1.84227 11.1785 2.15483C11.4911 2.46739 11.6667 2.89131 11.6667 3.33334V3.57501C14.1417 4.30834 15.8333 6.58334 15.8333 9.16667V14.1667L17.5 15.8333ZM11.6667 17.5C11.6667 17.942 11.4911 18.366 11.1785 18.6785C10.866 18.9911 10.442 19.1667 10 19.1667C9.55797 19.1667 9.13405 18.9911 8.82149 18.6785C8.50893 18.366 8.33333 17.942 8.33333 17.5'
						fill='white'
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
						fill='#00FFA3'
					/>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M12 2.5C12.6213 2.5 13.125 3.00368 13.125 3.625V17.3125C13.125 17.9338 12.6213 18.4375 12 18.4375C11.3787 18.4375 10.875 17.9338 10.875 17.3125V3.625C10.875 3.00368 11.3787 2.5 12 2.5Z'
						fill='#00FFA3'
					/>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M4 22.625C4 22.0037 4.50368 21.5 5.125 21.5L18.8125 21.5C19.4338 21.5 19.9375 22.0037 19.9375 22.625C19.9375 23.2463 19.4338 23.75 18.8125 23.75L5.125 23.75C4.50368 23.75 4 23.2463 4 22.625Z'
						fill='#00FFA3'
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
						fill='#FF7272'
					/>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M12 19.375C11.3787 19.375 10.875 18.8713 10.875 18.25L10.875 4.5625C10.875 3.94118 11.3787 3.4375 12 3.4375C12.6213 3.4375 13.125 3.94118 13.125 4.5625L13.125 18.25C13.125 18.8713 12.6213 19.375 12 19.375Z'
						fill='#FF7272'
					/>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M4 22.625C4 22.0037 4.50368 21.5 5.125 21.5L18.8125 21.5C19.4338 21.5 19.9375 22.0037 19.9375 22.625C19.9375 23.2463 19.4338 23.75 18.8125 23.75L5.125 23.75C4.50368 23.75 4 23.2463 4 22.625Z'
						fill='#FF7272'
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
						fill='#7299FF'
					/>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M3.75 8C3.75 7.58579 4.08579 7.25 4.5 7.25H18.697C19.1112 7.25 19.447 7.58579 19.447 8C19.447 8.41421 19.1112 8.75 18.697 8.75H4.5C4.08579 8.75 3.75 8.41421 3.75 8Z'
						fill='#7299FF'
					/>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M10.2803 11.2197C10.5732 11.5126 10.5732 11.9874 10.2803 12.2803L5.56066 17L10.2803 21.7197C10.5732 22.0126 10.5732 22.4874 10.2803 22.7803C9.98744 23.0732 9.51256 23.0732 9.21967 22.7803L3.96967 17.5303C3.67678 17.2374 3.67678 16.7626 3.96967 16.4697L9.21967 11.2197C9.51256 10.9268 9.98744 10.9268 10.2803 11.2197Z'
						fill='#7299FF'
					/>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M4.59375 17C4.59375 16.5858 4.92954 16.25 5.34375 16.25H19.5C19.9142 16.25 20.25 16.5858 20.25 17C20.25 17.4142 19.9142 17.75 19.5 17.75H5.34375C4.92954 17.75 4.59375 17.4142 4.59375 17Z'
						fill='#7299FF'
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
						d='M6.56473 4.09737L18.3031 10.8487C18.8441 11.1599 19.5365 10.9756 19.8487 10.4373C20.1601 9.90036 19.9754 9.21418 19.4358 8.90358L16.9911 7.49635L16.706 6.4441C16.6211 6.13064 16.4147 5.86337 16.1321 5.70072L12.1309 3.39829C11.8452 3.2339 11.5052 3.18999 11.1868 3.27633L10.1489 3.55776L7.69649 2.15073C7.15533 1.84025 6.46341 2.02482 6.15134 2.5629C5.83974 3.10017 6.02471 3.78678 6.56473 4.09737Z'
						fill='white'
					/>
					<path
						d='M5.00597 10.495C4.9082 9.14592 6.02388 8 7.43509 8H9.89801L17 12L16.1993 19.8925C16.078 21.088 15.0292 22 13.7757 22H8.11147C6.83214 22 5.77098 21.0513 5.68235 19.8283L5.00597 10.495Z'
						fill='white'
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
						fill='white'
					/>
				</svg>
			);
		case 'change':
			return (
				<svg
					width='8'
					height='9'
					viewBox='0 0 8 9'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M3.75 0C3.33579 0 3 0.335786 3 0.75V6.43934L1.28033 4.71967C0.987437 4.42678 0.512563 4.42678 0.21967 4.71967C-0.0732233 5.01256 -0.0732233 5.48744 0.21967 5.78033L3.21967 8.78033C3.36032 8.92098 3.55109 9 3.75 9C3.94891 9 4.13968 8.92098 4.28033 8.78033L7.28033 5.78033C7.57322 5.48744 7.57322 5.01256 7.28033 4.71967C6.98744 4.42678 6.51256 4.42678 6.21967 4.71967L4.5 6.43934V0.75C4.5 0.335786 4.16421 0 3.75 0Z'
						fill='white'
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
					{...props}
				>
					<circle cx={12} cy={6} r={4} fill='#2A334C' />
					<ellipse cx={12} cy={17} rx={7} ry={4} fill='#2A334C' />
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
					<g clipPath='url(#prefix__clip0_21_1008)'>
						<path
							d='M17 3.34a10 10 0 11-14.995 8.984L2 12l.005-.324A10 10 0 0117 3.34zM12.01 15l-.127.007a1 1 0 000 1.986L12 17l.127-.007a1 1 0 000-1.986L12.01 15zM12 7a1 1 0 00-.993.883L11 8v4l.007.117a1 1 0 001.986 0L13 12V8l-.007-.117A1 1 0 0012 7z'
							fill='#E61C05'
						/>
					</g>
					<defs>
						<clipPath id='prefix__clip0_21_1008'>
							<path fill='#fff' d='M0 0h24v24H0z' />
						</clipPath>
					</defs>
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
					<circle cx={12.5} cy={12.5} r={8.5} fill='#fff' />
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zM8 13a1 1 0 100-2 1 1 0 000 2zm4 0a1 1 0 100-2 1 1 0 000 2zm4 0a1 1 0 100-2 1 1 0 000 2z'
						fill='#2A334C'
					/>
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
					width={101}
					height={101}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}
				>
					<circle cx={51} cy={51} r={43} fill='#F4C714' fillOpacity={0.2} />
					<circle
						cx={50.5}
						cy={50.5}
						r={50.5}
						fill='#F4C714'
						fillOpacity={0.2}
					/>
					<circle cx={51} cy={51} r={33} fill='#F4C714' />
					<path
						d='M37 49.205l8.963 9.994a1 1 0 001.464.027L65 41'
						stroke='#1F2630'
						strokeWidth={4}
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
						fill='#98A1BD'
					/>
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
