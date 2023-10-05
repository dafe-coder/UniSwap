import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	chooseCoinOne: null,
	chooseCoinTwo: null,
	amountSend: 0,
	addressTo: '',
}

const transactionsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		setChooseCoinOne(state, action) {
			state.chooseCoinOne = action.payload
		},
		setChooseCoinTwo(state, action) {
			state.chooseCoinTwo = action.payload
		},
		setAmountSend(state, action) {
			state.amountSend = action.payload
		},
		setAddressTo(state, action) {
			state.addressTo = action.payload
		},
	},
})

export const {
	setChooseCoinOne,
	setChooseCoinTwo,
	setAmountSend,
	setAddressTo,
} = transactionsSlice.actions

export default transactionsSlice.reducer
