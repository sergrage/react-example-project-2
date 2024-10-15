import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Profile, ProfileSchema } from "../types/Profile"
import { fetchProfileData } from "entities/Profile"


const initialState: ProfileSchema = {
    data: undefined,
    error: undefined,
    isLoading: false,
    readonly: true
}

export const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
        setProfileData: (state, action: PayloadAction<Profile>) => {
        state.data = action.payload
    },
  },
    extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state: ProfileSchema) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProfileData.fulfilled, (state: ProfileSchema, action: PayloadAction<Profile>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchProfileData.rejected, (state:  ProfileSchema, action: PayloadAction<string | undefined>) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
})

export const { actions: profileActions } = ProfileSlice
export const { reducer: profileReducer } = ProfileSlice

