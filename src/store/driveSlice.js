import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	items: [],
	status: 'loading',
}

const driveSlice = createSlice({
	name: 'drive',
	initialState,
	reducers: {},
	/* extraReducers: builder => {
		builder
	}, */
})

export default driveSlice.reducer
