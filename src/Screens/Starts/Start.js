import React from 'react';
import { Par, Title } from '../../Components/UI';
import { ButtonBig } from '../../Components/';

export const Start = () => {
	return (
		<div className='screen'>
			<div className='body'>
				<Title size='m' mb={60}>
					Let's get you started!
				</Title>
				<ButtonBig to='/generate' mb={16} title='Get a new wallet'>
					I am new to crypto, or I want a shiny new wallet!
				</ButtonBig>
				<ButtonBig to='/import-data' title='Import an existing wallet'>
					I am new to crypto, or I want a shiny new wallet!
				</ButtonBig>
			</div>
			<div className='body-bottom'>
				<Par color='light' center>
					By continuing, I agree to the <a href='!#'>Terms of Service</a> <br />
					and consent to the{' '}
					<a href='!#' target='_blank'>
						Privacy Policy.
					</a>
				</Par>
			</div>
		</div>
	);
};
