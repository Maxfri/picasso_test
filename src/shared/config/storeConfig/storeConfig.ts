import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { postApi } from '../../api/postApi'

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
})

setupListeners(store.dispatch)