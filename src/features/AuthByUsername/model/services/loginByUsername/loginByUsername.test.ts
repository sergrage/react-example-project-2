import { loginByUsername } from "./loginByUsername";
import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/TestAsyncThunk";


describe('loginByUserName.test', () => {
    test('2xx', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({data : {id: '1',  username: 'Admin'}}));


        const result = await thunk.callThunk({ username: 'Admin', password: '123'})

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData({ 'id': '1',  'username': 'Admin'}));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.payload).toEqual({id: '1',  username: 'Admin'});
        expect(result.meta.requestStatus).toBe('fulfilled');
    })

    test('403', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);

        thunk.api.post.mockReturnValue(Promise.resolve({status: 403}));

        const result = await thunk.callThunk({ username: 'Admin', password: '123'})

        expect(thunk.api.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('AuthFormError');
    })
});