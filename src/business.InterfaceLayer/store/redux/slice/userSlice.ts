import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { IUser } from "../../../types";

const initialState: IUser = {
  id: '',
  avatar: '',
  name: 'Неизвестный енот',
  about: '',
  status: 'active',
  login: '',
  password: '',
  roles: 'user'
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: ({ login, password }, { payload }: PayloadAction<IUser>) => {
      login = payload.login
      password = payload.password
    },

    removeUser: state => {
      state.login = ''
      state.password = ''
    }
  }
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer