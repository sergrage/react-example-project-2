import { counterReducer, counterActions } from "./CounterSlice";
import { CounterSchema } from "../types/CounterSchema";

describe('counterSlice test', () => {
    const state: CounterSchema = {
        value : 10
    };
    test('decriment counter', () => {
        expect(counterReducer(state as CounterSchema, counterActions.decrement())).toEqual({
            value : 9
        });
    });
    test('increment counter', () => {
        expect(counterReducer(state as CounterSchema, counterActions.increment())).toEqual({
            value : 11
        });
    });
    test('work with undefined statre', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({
            value : 1
        });
    });
});