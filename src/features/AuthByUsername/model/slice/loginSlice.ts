import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LoginSchema } from "../types/loginSchema"
import { loginByUsername } from "../services/loginByUsername/loginByUsername";
import { User } from "entities/User";


const initialState: LoginSchema = {
  isLoading: false,
  username: '',
  password: '',
  error: ''
};

export const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
    builder.addCase(loginByUsername.fulfilled, (state, action: PayloadAction<User>) => {
      state.isLoading = false;
      console.log(state, action.payload);
    })
    builder.addCase(loginByUsername.rejected, (state, action: PayloadAction<string | undefined>) => {
      state.isLoading = false;
      state.error = action.payload;
    })
  },
});

export const { actions: loginActions } = LoginSlice;
export const { reducer: loginReducer } = LoginSlice;

