import { AsyncThunkAction, Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import axios, { AxiosStatic } from "axios";

jest.mock('axios');
const mockedAxios = jest.mocked(axios, {shallow: false});

export class TestAsyncThunk<Return, Arg, RejectValue> {
    dispatch: Dispatch;
    getState: () => StateSchema;

    actionCreator: (arg: Arg) => AsyncThunkAction<Return, Arg, {  rejectValue: RejectValue;}>

    api: jest.MockedFunctionDeep<AxiosStatic>;
    navigate: jest.MockedFn<any>;

    constructor(actionCreator: (arg: Arg) =>  AsyncThunkAction<Return, Arg, {  rejectValue: RejectValue;}>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();

        this.api = mockedAxios;
        this.navigate = jest.fn();
    }

    async callThunk(arg: Arg) {
        const action =  this.actionCreator(arg);
        return await action(this.dispatch, this.getState, {api: this.api, navigate: this.navigate});
    }
}