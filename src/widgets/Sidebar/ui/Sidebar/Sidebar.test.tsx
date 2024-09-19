import { fireEvent, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import { Sidebar } from "./Sidebar";
import { renderWithTranslation } from "../../../../shared/lib/tests/renderWithTranslation/renderWithTranslation";
import React from "react";


describe('Sidebar', () => {
    test('Sidebar render in document', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    })

    test('Sidebar toogle on click', async () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.findByTestId('sidebarToogle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();

        fireEvent.click(await toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    })
})