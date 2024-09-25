import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../model/slice/CounterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const incr = () => {
        dispatch(counterActions.increment())
    }

    const decr = () => {
        dispatch(counterActions.decrement())
    }
    return (
        <div className="">
            <h1 data-testid="counterValue">{counterValue}</h1>
            <button onClick={incr} data-testid="btnIncr">+</button>
            <button onClick={decr} data-testid="btnDecr">-</button>
        </div>

    )
};
