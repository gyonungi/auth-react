import { configureStore } from '@reduxjs/toolkit'

import drive from './driveSlice'
import user from './userSlice'
export const store = configureStore({
	reducer: { user, drive },
})
