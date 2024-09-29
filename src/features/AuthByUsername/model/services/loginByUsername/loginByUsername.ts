import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entities/User";
import i18n from "shared/config/i18n/i18n";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async ({username, password}, thunkAPI) => {
        try {
        const resp = await axios.post<User>('http://localhost:8000/login', {
            username,
            password
        });

        if(!resp.data) {
            throw new Error();
        }

        thunkAPI.dispatch(userActions.setAuthData(resp.data))
        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(resp.data))


        return resp.data;

        } catch(e) {
            console.log(e);
            return thunkAPI.rejectWithValue('AuthFormError');
        }

    },
)