import { loginReducer, loginActions } from "./loginSlice";
import { LoginSchema } from "../types/loginSchema";
import { DeepPartial } from "app/types/types";

describe('LoginSlice test', () => {

    test('setUsername', () => {
        const state: DeepPartial<LoginSchema> = {username: '' };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('Admin'))).toEqual({
            username: 'Admin',
        });
    });
    test('setPassword', () => {
        const state: DeepPartial<LoginSchema> = {password: '' };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('123'))).toEqual({
            password: '123',
        });
    });
});