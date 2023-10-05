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
					width={24}
					height={24}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}
				>
					<path
						d='M17.391 12.29l-12.569.018a.974.974 0 01-.716-.292.973.973 0 01-.291-.716c0-.283.097-.522.292-.716a.973.973 0 01.715-.292l12.57.018-5.375-5.374a.97.97 0 01-.301-.707c0-.271.1-.507.301-.707.2-.2.436-.3.707-.301.271 0 .507.1.707.3l7.072 7.072c.2.2.3.436.3.706 0 .272-.1.508-.3.708l-7.072 7.071c-.2.2-.436.3-.707.3a.965.965 0 01-.707-.3c-.2-.2-.3-.436-.3-.707 0-.271.1-.507.3-.707l5.374-5.374z'
						fill='#fff'
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
					width={24}
					height={24}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}
				>
					<path
						d='M15.24 2h-3.894c-1.764 0-3.162 0-4.255.148-1.126.152-2.037.472-2.755 1.193-.719.721-1.038 1.636-1.189 2.766C3 7.205 3 8.608 3 10.379v5.838c0 1.508.92 2.8 2.227 3.342-.067-.91-.067-2.185-.067-3.247v-5.01c0-1.281 0-2.386.118-3.27.127-.948.413-1.856 1.147-2.593.734-.737 1.639-1.024 2.583-1.152.88-.118 1.98-.118 3.257-.118h3.07c1.276 0 2.374 0 3.255.118A3.601 3.601 0 0015.24 2z'
						fill={fill ? fill : '#98A1C0'}
					/>
					<path
						d='M6.6 11.397c0-2.726 0-4.089.844-4.936.843-.847 2.2-.847 4.916-.847h2.88c2.715 0 4.073 0 4.917.847.843.847.843 2.21.843 4.936v4.82c0 2.726 0 4.089-.843 4.936-.844.847-2.202.847-4.917.847h-2.88c-2.715 0-4.073 0-4.916-.847-.844-.847-.844-2.21-.844-4.936v-4.82z'
						fill={fill ? fill : '#98A1C0'}
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
						fill='#2F3343'
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
						fill='#5D6785'
					/>
				</svg>
			);
		default:
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width={800}
					height={800}
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