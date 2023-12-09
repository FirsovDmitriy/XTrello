import { configureStore } from "@reduxjs/toolkit"
import userReduser from './redux/slice/userSlice'
import { userAPI } from "./redux/api/user.api"

export const store = configureStore({
  reducer: {
    user: userReduser,
    [userAPI.reducerPath]: userAPI.reducer 
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAPI.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
