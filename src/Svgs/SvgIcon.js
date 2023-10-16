import React from 'react';

function SvgIcon(props) {
	const { type, fill } = props;

	switch (type) {
		case 'logo':
			return (
				<svg
					width={208}
					height={219}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}
				>
					<path
						d='M70.69 195.437l-36.038-58.216'
						stroke='#00BEF2'
						strokeWidth={4}
					/>
					<path
						d='M24.95 105.342V36.038'
						stroke='url(#prefix__paint0_linear_201_791)'
						strokeWidth={4}
					/>
					<path
						d='M31.88 31.88L92.866 6.93'
						stroke='url(#prefix__paint1_linear_201_791)'
						strokeWidth={2.772}
					/>
					<path
						d='M97.025 11.089l90.095 40.196'
						stroke='url(#prefix__paint2_linear_201_791)'
						strokeWidth={4}
					/>
					<path
						d='M191.278 62.373l-9.702 54.057'
						stroke='url(#prefix__paint3_linear_201_791)'
						strokeWidth={4}
					/>
					<path
						d='M181.576 126.133l9.702 45.74'
						stroke='url(#prefix__paint4_linear_201_791)'
						strokeWidth={4}
					/>
					<path
						d='M185.734 176.032l-49.899 5.544'
						stroke='url(#prefix__paint5_linear_201_791)'
						strokeWidth={4}
					/>
					<path
						d='M130.291 182.962l-56.83 22.177'
						stroke='url(#prefix__paint6_linear_201_791)'
						strokeWidth={4}
					/>
					<path
						d='M133.063 182.962l-91.481-54.057'
						stroke='url(#prefix__paint7_linear_201_791)'
						strokeWidth={4}
					/>
					<path
						d='M133.063 180.19l-4.158-59.601'
						stroke='url(#prefix__paint8_linear_201_791)'
						strokeWidth={4}
					/>
					<path
						d='M126.133 119.203h47.126'
						stroke='url(#prefix__paint9_linear_201_791)'
						strokeWidth={4}
					/>
					<path
						d='M120.588 119.203H27.721'
						stroke='url(#prefix__paint10_linear_201_791)'
						strokeWidth={4}
					/>
					<path
						d='M126.133 115.044L88.709 60.987'
						stroke='url(#prefix__paint11_linear_201_791)'
						strokeWidth={4}
					/>
					<path
						d='M88.709 54.057l99.797 2.772'
						stroke='url(#prefix__paint12_linear_201_791)'
						strokeWidth={4}
					/>
					<path
						d='M80.392 63.76l-44.354 44.354'
						stroke='url(#prefix__paint13_linear_201_791)'
						strokeWidth={4}
					/>
					<path
						d='M90.095 52.67V13.86'
						stroke='url(#prefix__paint14_linear_201_791)'
						strokeWidth={4}
					/>
					<circle cx={26.335} cy={120.589} r={26.335} fill='#F89200' />
					<circle cx={26.335} cy={34.652} r={12.475} fill='#CE0003' />
					<circle cx={91.481} cy={8.316} r={8.316} fill='#5CD551' />
					<circle cx={192.664} cy={54.057} r={15.247} fill='#F8BF00' />
					<circle cx={87.323} cy={56.829} r={15.247} fill='#AAA' />
					<circle cx={181.576} cy={117.816} r={15.247} fill='#00BC9B' />
					<circle cx={189.892} cy={173.259} r={9.703} fill='#FF4C9F' />
					<circle cx={134.449} cy={181.576} r={9.703} fill='#A680D0' />
					<circle cx={126.133} cy={120.589} r={9.703} fill='#3273E2' />
					<circle cx={74.848} cy={205.139} r={13.861} fill='#00BEF2' />
					<defs>
						<linearGradient
							id='prefix__paint0_linear_201_791'
							x1={25.813}
							y1={43.738}
							x2={24.853}
							y2={43.741}
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='#CE0003' />
							<stop offset={1} stopColor='#F89200' />
						</linearGradient>
						<linearGradient
							id='prefix__paint1_linear_201_791'
							x1={84.55}
							y1={9.703}
							x2={34.651}
							y2={30.494}
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='#5CD551' />
							<stop offset={1} stopColor='#CE0003' />
						</linearGradient>
						<linearGradient
							id='prefix__paint2_linear_201_791'
							x1={185.734}
							y1={45.74}
							x2={94.222}
							y2={1.288}
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='#F8BF00' />
							<stop offset={1} stopColor='#5CD551' />
						</linearGradient>
						<linearGradient
							id='prefix__paint3_linear_201_791'
							x1={189.955}
							y1={68.38}
							x2={180.647}
							y2={68.665}
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='#F8BF00' />
							<stop offset={1} stopColor='#00BC9B' />
						</linearGradient>
						<linearGradient
							id='prefix__paint4_linear_201_791'
							x1={191.278}
							y1={167.715}
							x2={199.329}
							y2={164.367}
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='#FF4C9F' />
							<stop offset={1} stopColor='#00BC9B' />
						</linearGradient>
						<linearGradient
							id='prefix__paint5_linear_201_791'
							x1={178.93}
							y1={176.648}
							x2={164.642}
							y2={198.567}
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='#FF4C9F' />
							<stop offset={1} stopColor='#A680D0' />
						</linearGradient>
						<linearGradient
							id='prefix__paint6_linear_201_791'
							x1={122.542}
							y1={185.426}
							x2={76.716}
							y2={205.442}
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='#A680D0' />
							<stop offset={1} stopColor='#00BEF2' />
						</linearGradient>
						<linearGradient
							id='prefix__paint7_linear_201_791'
							x1={48.512}
							y1={131.677}
							x2={116.034}
							y2={195.448}
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='#F89200' />
							<stop offset={1} stopColor='#A680D0' />
						</linearGradient>
						<linearGradient
							id='prefix__paint8_linear_201_791'
							x1={132.496}
							y1={127.211}
							x2={128.504}
							y2={127.258}
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='#3273E2' />
							<stop offset={1} stopColor='#A680D0' />
						</linearGradient>
						<linearGradient
							id='prefix__paint9_linear_201_791'
							x1={166.833}
							y1={119.314}
							x2={166.142}
							y2={124.861}
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='#00BC9B' />
							<stop offset={1} stopColor='#3273E2' />
						</linearGradient>
						<linearGradient
							id='prefix__paint10_linear_201_791'
							x1={107.925}
							y1={119.314}
							x2={107.57}
							y2={124.925}
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='#3273E2' />
							<stop offset={1} stopColor='#F89200' />
						</linearGradient>
						<linearGradient
							id='prefix__paint11_linear_201_791'
							x1={88.709}
							y1={66.532}
							x2={78.108}
							y2={106.981}
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='#AAA' />
							<stop offset={1} stopColor='#3273E2' />
						</linearGradient>
						<linearGradient
							id='prefix__paint12_linear_201_791'
							x1={174.897}
							y1={54.365}
							x2={172.418}
							y2={69.577}
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='#F8BF00' />
							<stop offset={1} stopColor='#AAA' />
						</linearGradient>
						<linearGradient
							id='prefix__paint13_linear_201_791'
							x1={74.344}
							y1={68.688}
							x2={32.956}
							y2={75.743}
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='#AAA' />
							<stop offset={1} stopColor='#F89200' />
						</linearGradient>
						<linearGradient
							id='prefix__paint14_linear_201_791'
							x1={90.595}
							y1={13.861}
							x2={90.595}
							y2={52.671}
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='#5CD551' />
							<stop offset={1} stopColor='#AAA' />
						</linearGradient>
					</defs>
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
						fill={fill ? fill : '#fff'}
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
						stroke='#fff'
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
						stroke={fill ? fill : '#fff'}
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
						fill='#fff'
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
						fill='var(--success)'
					/>
				</svg>
			);
		case 'share':
			return (
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M21.0002 11.459L11.4002 5.09998L11.4002 8.69998C3 10.5 3 18.9 3 18.9C3 18.9 6.6 14.1 11.4002 14.7L11.4002 18.42L21.0002 11.459Z'
						stroke='white'
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
						d='M4.60147 16.4759L3.78077 15.9046L3.78077 15.9046L4.60147 16.4759ZM5.69156 13.1034L4.69156 13.0922V13.1034H5.69156ZM5.71444 11.0643L6.71444 11.0755V11.0643H5.71444ZM19.4065 16.4923L20.2382 15.9371L20.2382 15.9371L19.4065 16.4923ZM18.3575 13.1034L17.3575 13.0916V13.1034H18.3575ZM18.3803 11.1653L19.3803 11.1771V11.1653H18.3803ZM10.124 19.3691C9.69173 19.0253 9.06264 19.0971 8.71889 19.5293C8.37513 19.9616 8.44688 20.5907 8.87914 20.9344L10.124 19.3691ZM15.123 20.9344C15.5553 20.5907 15.6271 19.9616 15.2833 19.5293C14.9395 19.0971 14.3105 19.0253 13.8782 19.3691L15.123 20.9344ZM3.06525 6.02391C2.86902 6.54016 3.12845 7.11774 3.6447 7.31396C4.16095 7.51019 4.73853 7.25076 4.93475 6.73451L3.06525 6.02391ZM7.31024 3.86947C7.79043 3.59665 7.95854 2.98621 7.68572 2.50601C7.41289 2.02582 6.80245 1.85771 6.32226 2.13053L7.31024 3.86947ZM17.6674 2.14511C17.1902 1.86706 16.578 2.02849 16.2999 2.50567C16.0219 2.98286 16.1833 3.5951 16.6605 3.87315L17.6674 2.14511ZM19.0616 6.7157C19.2526 7.23393 19.8274 7.49928 20.3457 7.30837C20.8639 7.11746 21.1293 6.54258 20.9384 6.02434L19.0616 6.7157ZM5.42217 17.0473C6.05994 16.1312 6.69156 14.7668 6.69156 13.1034H4.69156C4.69156 14.2544 4.25239 15.2271 3.78077 15.9046L5.42217 17.0473ZM6.6915 13.1146L6.71438 11.0755L4.7145 11.0531L4.69162 13.0922L6.6915 13.1146ZM20.2382 15.9371C19.7861 15.2599 19.3575 14.2752 19.3575 13.1034H17.3575C17.3575 14.7653 17.9626 16.1305 18.5748 17.0476L20.2382 15.9371ZM19.3574 13.1152L19.3803 11.1771L17.3804 11.1535L17.3575 13.0916L19.3574 13.1152ZM19.3803 11.1653C19.3803 6.85267 16.1569 3.20465 12.0011 3.20465V5.20465C14.8917 5.20465 17.3803 7.78945 17.3803 11.1653H19.3803ZM19.0248 18.4373C19.7934 18.4373 20.2235 17.858 20.3798 17.4573C20.5415 17.0428 20.5787 16.4471 20.2382 15.9371L18.5748 17.0475C18.5161 16.9596 18.5023 16.8805 18.5001 16.8374C18.4979 16.7948 18.5047 16.7608 18.5166 16.7305C18.5276 16.7023 18.5569 16.6419 18.6309 16.5786C18.7124 16.5087 18.8498 16.4373 19.0248 16.4373V18.4373ZM6.71444 11.0643C6.71444 7.74421 9.16167 5.20465 12.0011 5.20465V3.20465C7.89647 3.20465 4.71444 6.80743 4.71444 11.0643H6.71444ZM4.97833 16.4373C5.15701 16.4373 5.29585 16.5114 5.37667 16.582C5.44973 16.6458 5.47746 16.7054 5.48736 16.7315C5.49812 16.76 5.50459 16.7925 5.50192 16.8344C5.49923 16.8768 5.48455 16.9577 5.42217 17.0473L3.78077 15.9046C3.4243 16.4166 3.45904 17.0224 3.61677 17.4393C3.76862 17.8406 4.19715 18.4373 4.97833 18.4373V16.4373ZM19.0248 16.4373H4.97833V18.4373H19.0248V16.4373ZM12.0011 20C11.2633 20 10.6076 19.7536 10.124 19.3691L8.87914 20.9344C9.72218 21.6048 10.8183 22 12.0011 22V20ZM13.8782 19.3691C13.3946 19.7536 12.7389 20 12.0011 20V22C13.1839 22 14.28 21.6048 15.123 20.9344L13.8782 19.3691ZM4.93475 6.73451C5.40847 5.48821 6.24648 4.47384 7.31024 3.86947L6.32226 2.13053C4.81302 2.988 3.6867 4.38893 3.06525 6.02391L4.93475 6.73451ZM16.6605 3.87315C17.7588 4.51314 18.6172 5.50924 19.0616 6.7157L20.9384 6.02434C20.3274 4.36602 19.1526 3.01052 17.6674 2.14511L16.6605 3.87315Z'
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
					<path
						d='M3.238 19.5c1.325-2.21 4.23-3.724 8.762-3.724s7.437 1.513 8.762 3.724M15.6 8.1a3.6 3.6 0 11-7.2 0 3.6 3.6 0 017.2 0z'
						stroke='#fff'
						strokeWidth={2}
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
						stroke='#C05567'
						strokeWidth={2}
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			);
		case 'activity':
			return (
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<circle cx='12.5' cy='12.5' r='8.5' fill='white' />
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8 13C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13ZM16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13Z'
						fill='#333333'
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
						fill='#fff'
					/>
				</svg>
			);
		case 'success':
			return (
				<svg
					width={86}
					height={86}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}
				>
					<circle cx={43} cy={43} r={43} fill='#5ABE51' fillOpacity={0.24} />
					<circle cx={43} cy={43} r={33} fill='#5ABE51' />
					<path
						d='M29 41.205l8.963 9.994a1 1 0 001.464.027L57 33'
						stroke='#fff'
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
						fill='#fff'
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
						fill='#333333'
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
