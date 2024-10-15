import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkExtraArgument } from "app/providers/StoreProvider";
import { Profile } from "../../model/types/Profile";

export const fetchProfileData = createAsyncThunk<Profile, void, { rejectValue: string, extra: ThunkExtraArgument }>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        try {
        const resp = await thunkAPI.extra.api.get<Profile>('/profile');

        if(!resp.data) {
            throw new Error();
        }

        return resp.data;

        } catch(e) {
            console.log(e);
            return thunkAPI.rejectWithValue('AuthFormError');
        }

    },
)