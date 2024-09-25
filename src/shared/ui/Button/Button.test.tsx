import {render, screen} from "@testing-library/react";
import { Button, ThemeButton } from "./Button"
import '@testing-library/jest-dom'

describe('Button component', () => {
    test('Button render in document', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    })
    test('Button has class CLEAR', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
       // screen.debug(); // для рендера в консоле
    })
})