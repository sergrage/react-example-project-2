import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkExtraArgument } from "app/providers/StoreProvider";
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    { rejectValue: string, extra: ThunkExtraArgument }>(
    'login/loginByUsername',
    async ({username, password}, thunkAPI) => {
        try {
        const resp = await thunkAPI.extra.api.post<User>('/login', {
            username,
            password
        });

        if(!resp.data) {
            throw new Error();
        }

        thunkAPI.dispatch(userActions.setAuthData(resp.data))
        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(resp.data))

        thunkAPI.extra.navigate?.('/profile')
        return resp.data;

        } catch(e) {
            console.log(e);
            return thunkAPI.rejectWithValue('AuthFormError');
        }
    },
)