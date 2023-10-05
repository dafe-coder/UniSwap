import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	menuChoose: 0,
}

const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		setMenuChoose(state, action) {
			state.menuChoose = action.payload
		},
	},
})

export const { setMenuChoose } = settingsSlice.actions

export default settingsSlice.reducer
