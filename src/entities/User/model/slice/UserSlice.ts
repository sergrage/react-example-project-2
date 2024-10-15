import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User, UserSchema } from "../types/User"
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage"

const initialState: UserSchema = {}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload
    },
    initAuthUser: (state) => {
      if(localStorage.getItem(USER_LOCALSTORAGE_KEY)) {
        state.authData = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY) || '')
      }
    },
    logout: (state) => {
      state.authData = undefined
      localStorage.removeItem(USER_LOCALSTORAGE_KEY)
    }
  },
})

export const { actions: userActions } = UserSlice
export const { reducer: userReducer } = UserSlice

