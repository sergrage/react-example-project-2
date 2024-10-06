import { AsyncThunkAction, Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";

export class TestAsyncThunk<Return, Arg, RejectValue> {
    dispatch: Dispatch;
    getState: () => StateSchema;

    actionCreator: (arg: Arg) => AsyncThunkAction<Return, Arg, {  rejectValue: RejectValue;}>

    constructor(actionCreator: (arg: Arg) =>  AsyncThunkAction<Return, Arg, {  rejectValue: RejectValue;}>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async callThunk(arg: Arg) {
        const action =  this.actionCreator(arg);
        return await action(this.dispatch, this.getState, undefined);
    }
}