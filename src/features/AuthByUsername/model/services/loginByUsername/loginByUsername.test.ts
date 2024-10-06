import axios from "axios";
import { loginByUsername } from "./loginByUsername";
import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/TestAsyncThunk";

jest.mock('axios');

const mockedAxios = jest.mocked(axios, {shallow: false});

describe('loginByUserName.test', () => {
    test('2xx', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({data : {id: '1',  username: 'Admin'}}));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ username: 'Admin', password: '123'})

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData({ 'id': '1',  'username': 'Admin'}));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.payload).toEqual({id: '1',  username: 'Admin'});
        expect(result.meta.requestStatus).toBe('fulfilled');
    })

    test('403', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({status: 403}));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ username: 'Admin', password: '123'})

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('AuthFormError');
    })
});