import { fireEvent, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import { Sidebar } from "./Sidebar";
import { renderComponent } from "shared/lib/tests/renderComponent/renderComponent";


describe('Sidebar', () => {
    test('Sidebar render in document', () => {
        renderComponent(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    })

    test('Sidebar toogle on click', async () => {
        renderComponent(<Sidebar />);
        const toggleBtn = screen.findByTestId('sidebarToogle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();

        fireEvent.click(await toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    })
})