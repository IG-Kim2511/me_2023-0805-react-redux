
// 🦄App 최상단 폴더에 위치시켜서 변수들 관리함

// 🦄configureStore
import { configureStore } from '@reduxjs/toolkit'


import counterReducer from './counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})