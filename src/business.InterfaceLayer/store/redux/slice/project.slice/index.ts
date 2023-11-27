import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  id: 0,
  code: '',
  name: '',
  author: '',
  createdDate: 0,
  editedDate: 0,
  editedBy: ''
}

export var projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {}
})
