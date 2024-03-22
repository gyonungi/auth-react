import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const loginUser = createAsyncThunk(
	'user/loginUser',
	async userCredentials => {
		const req = await axios.post(
			`https://transstage1.iwayex.com/transnextgen/v3/auth/login`,
			userCredentials
		)
		const res = await req.data.result.token
		localStorage.setItem('token', JSON.parse(res))
		return res
	}
)
const initialState = {
	token: {},
	status: 'loading',
}
const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setToken(state, action) {
			state.token = action.payload
		},
	},
	extraReducers: builder => {
		builder.addCase(loginUser.pending, state => {
			state.status = 'loading'
			state.token = null
		})
		builder.addCase(loginUser.fulfilled, (state, action) => {
			state.token = action.payload
			state.status = 'success'
		})
		builder.addCase(loginUser.rejected, state => {
			console.log(`ошибка запроса`)
			state.status = 'error'
			state.token = null
		})
	},
})

export const { setToken } = userSlice.actions
export default userSlice.reducer
