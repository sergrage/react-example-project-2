import { fireEvent, screen } from "@testing-library/react";
import {Counter} from "./Counter";
import { renderComponent } from "shared/lib/tests/renderComponent/renderComponent";

describe('Counter component test', () => {
    test('Counter render in document', () => {
        renderComponent(<Counter />, {
            initialState: {counter: {value : 10 }}
        })
        expect(screen.getByTestId('counterValue')).toBeInTheDocument();
    });
    test('Counter increment', async () => {
        renderComponent(<Counter />, {
            initialState: { counter: { value: 10 } }
        })
        fireEvent.click(await screen.getByTestId('btnIncr'));
        expect(screen.getByTestId('counterValue')).toHaveTextContent('11');
    });
    test('Counter decrement', async () => {
        renderComponent(<Counter />, {
            initialState: { counter: { value: 10 } }
        })
        fireEvent.click(await screen.getByTestId('btnDecr'));
        expect(screen.getByTestId('counterValue')).toHaveTextContent('9');
    });
});
